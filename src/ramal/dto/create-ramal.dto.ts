import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateRamalDto {
    @IsNotEmpty({message: 'Informa o campo id servidor'})
    id_servidor: number;

    @IsNotEmpty({message: 'Informa o campo id cliente'})
    id_cliente: number;

    @IsNotEmpty({message: 'Informa o campo ramal'})
    ramal: number;

    @IsNotEmpty({message: 'Informa o campo senha do ramal'})
    senha: string;

    @IsNotEmpty({message: 'Informa o campo id status'})
    id_status: number;

    @IsOptional()
    registro: string;

    @IsOptional()
    id_situacao: number;

    @IsOptional()
    observacao: string;

    @IsNotEmpty({message: 'Informa o campo id login insert'})
    id_login_insert: number;
 
    dt_insert: string;

}