import { IsDate, IsIP, IsNotEmpty, IsOptional, IsPort, IsString } from "class-validator";

export class UpdateServidorDto{

    @IsOptional()
    nome: string;

    @IsOptional()
    ip: string;

    @IsOptional()
    id_status: number;

    @IsOptional()
    http_usuario: string;

    @IsOptional()
    http_senha: string;

    @IsOptional()
    http_porta: number;

    @IsOptional()
    ami_usuario: string;

    @IsOptional()
    ami_senha: string;
  
    @IsOptional()
    ami_porta: number;
   
    @IsOptional()
    mysql_usuario: string;

    @IsOptional()
    mysql_senha: string
   
    @IsOptional()
    mysql_porta: number;

    @IsOptional()
    observacao: string;

    @IsOptional()
    id_login_insert: number;

    @IsOptional()
    id_login_update: number

    dt_update: string;
 
}