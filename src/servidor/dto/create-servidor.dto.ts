import { IsIP, IsNotEmpty, IsOptional, IsPort, IsString } from "class-validator";

export class CreateServidorDto{

    @IsString()
    @IsNotEmpty({message: 'Informar o campo nome!'})
    nome: string;

    @IsNotEmpty({message: 'Informar o campo ip!'})
    @IsIP()
    ip: string;

    @IsNotEmpty({message: 'Informar o campo id status!'})
    id_status: number;

    @IsString()
    @IsOptional()
    http_usuario: string;

    @IsString()
    @IsOptional()
    http_senha: string;

    @IsPort()
    @IsOptional()
    http_porta: number;

    @IsString()
    @IsOptional()
    ami_usuario: string;

    @IsString()
    @IsOptional()
    ami_senha: string;
  
    @IsPort()
    @IsOptional()
    ami_porta: number;
   
    @IsString()
    @IsOptional()
    mysql_usuario: string;

    @IsString()
    @IsOptional()
    mysql_senha: string
   
    @IsString()
    @IsOptional()
    mysql_porta: number;

    @IsString()
    @IsOptional()
    observacao: string;

    @IsOptional()
    id_login_insert: number;
 
}