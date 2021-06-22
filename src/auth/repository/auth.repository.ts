import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { tb_usuario_login } from "../entity/auth.entity";
import * as bcrypt from 'bcrypt';
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { SignUpDto } from "../dto/signup.dto";
//import  {EmailSender}  from "../../mailer/mailerConfig";


@EntityRepository(tb_usuario_login)
export class AuthRepository extends Repository<tb_usuario_login>{
    
    async createUser(createUserDto: CreateUserDto): Promise<tb_usuario_login>{

        const {login, email, password} = createUserDto;
        const userExist = await this.findOne({email});

        if(userExist){
            throw new ConflictException('Email já cadastrado na Base de Dados!');
        } else {

            const{
                id_tipo_login,
                login,
                password,
                name,
                email,
                observacao,
                id_login_insert
            } = createUserDto;

            // colocando hash no password
            // vai gerar uma pequena hash aleatória como prefixo da hash do password do usuário
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = this.create({
                id_tipo_login,
                login,
                password: hashedPassword,
                name,
                email,
                observacao,
                id_login_insert
            });

            try {

                await this.save(user);
                return user;

            } catch (error) {
                throw new InternalServerErrorException('Error com a conexão com o Bando de Dados'); 
            }
        }  
    }

    // async sendMailer( sendMailer: EmailSender){

    // }

    
}