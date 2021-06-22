import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateRamalDto {
    @IsOptional()
    id_servidor: number;

    @IsOptional()
    id_cliente: number;

    @IsOptional()
    ramal: number;

    @IsOptional()
    senha: string;

    @IsOptional()
    id_status: number;

    @IsOptional()
    registro: string;

    @IsOptional()
    id_situacao: number;

    @IsOptional()
    observacao: string;

    @IsOptional()
    id_login_insert: number;

    @IsOptional()
    dt_insert: string;

    @IsOptional()
    id_login_update: number;

    dt_update;

}