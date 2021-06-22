import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class SignInDto{

    @IsString()
    @IsNotEmpty()
    login: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}