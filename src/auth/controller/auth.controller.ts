import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { response, Response } from 'express';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { SignInDto } from 'src/auth/dto/signin.dto';
import { tb_usuario_login } from 'src/auth/entity/auth.entity';
import { SignUpDto } from '../dto/signup.dto';
import { AuthService } from '../service/auth.service';


@Controller('auth')
export class AuthController {
    constructor(
        private authServive: AuthService
    ){}

//================================================================================

    @Post('createUser')
    @UseGuards(AuthGuard())
    createUser(@Body() createUserDto: CreateUserDto): Promise<tb_usuario_login>{
        return this.authServive.createUser(createUserDto);
    }

//================================================================================

    @Post('signup')
    async signup(@Body() signDto: SignUpDto): Promise<tb_usuario_login>{
        return this.authServive.signUp(signDto);
    }

//================================================================================

    @Post('signin')
    async signIn(@Body() authSignInDto: SignInDto, @Res() response: Response){
        const token = await this.authServive.signIn(authSignInDto);
        const retorno =  response.json({
            message: "Login efetuado com sucesso!",
            token: token
        })

        return retorno;
    }
}

