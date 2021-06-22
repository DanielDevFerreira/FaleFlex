import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { SignInDto } from 'src/auth/dto/signin.dto';
import { tb_usuario_login } from 'src/auth/entity/auth.entity';
import { AuthRepository } from 'src/auth/repository/auth.repository';
import * as bcript from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/jwt-interface/jwt-payload.interface';
import { SignUpDto } from '../dto/signup.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthRepository)
        private authRepository: AuthRepository,
        private jwtService: JwtService,
        private mailService: MailService
    ){}

//============================================================================

// function para o administrador criar um usuário
    async createUser(createUserDto: CreateUserDto): Promise<tb_usuario_login>{
        return this.authRepository.createUser(createUserDto);
    }

//============================================================================

async signUp(signUpDto: SignUpDto): Promise<tb_usuario_login>{

    const{
        id_tipo_login = 2,
        login,
        password,
        name,
        email,
        observacao,
        id_login_insert
    } = signUpDto;
    
    const urlBase = 'http://localhost:3000';

    const userExist = await this.authRepository.findOne({email});

    if(userExist){
        throw new ConflictException('Email já cadastrado na Base de Dados!');
    } else {
        

        const salt = await bcript.genSalt();
        const hashedPassword = await bcript.hash(password, salt);

        const userSignUp = this.authRepository.create({
            id_tipo_login,
            login,
            password: hashedPassword,
            name,
            email,
            observacao,
            id_login_insert
        });

        const acessToken = await this.jwtService.sign({name, email, password});

        await this.mailService.sendUserConfirmation(name, email, acessToken)

        
        try {
            await this.authRepository.save(userSignUp);
            //console.log(await userSignUp);
            return userSignUp;

        } catch (error) {
            throw new InternalServerErrorException('Error com a conexão com o Bando de Dados'); 
        }
    }
}
//============================================================================

    async signIn(signInDto: SignInDto): Promise<{ acessToken: string }>{
        const { login, password } = signInDto;

        //verificar se existe o login
        const userLogin = await this.authRepository.findOne({ login });

        //caso o login exista e a senha esteja correta, faça
        if(userLogin && (await bcript.compare(password, userLogin.password))){
            // geraldo o token para o login
            const payload: JwtPayload = { login };
            const acessToken = await this.jwtService.sign(payload);
            return { acessToken };
        }else{
            throw new UnauthorizedException('Por Favor, verificar as credendiais do login');
        }
    }
}
