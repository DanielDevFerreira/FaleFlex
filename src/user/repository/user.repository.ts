import { InternalServerErrorException } from "@nestjs/common";
import { exit } from "process";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { tb_usuario } from "../entity/user.entity";

@EntityRepository(tb_usuario)
export class UserRepository extends Repository<tb_usuario>{

    async createUser(createUserDto: CreateUserDto): Promise<tb_usuario>{
        const {
           nome,
           cpf_cnpj,
           nome_tts,
           id_status,
           id_tipo_usuario,
           endereco,
           subdominio,
           responsavel_financeiro,
           telefone_financeiro,
           email_financeiro,
           responsavel_tecnico,
           telefone_tecnico,
           email_tecnico,
           observacao,
           id_login_insert,
           id_login_update,
           dt_update 
        } = createUserDto;

        const user = this.create({
           nome,
           cpf_cnpj,
           nome_tts,
           id_status,
           id_tipo_usuario,
           endereco,
           subdominio,
           responsavel_financeiro,
           telefone_financeiro,
           email_financeiro,
           responsavel_tecnico,
           telefone_tecnico,
           email_tecnico,
           observacao,
           id_login_insert,
           id_login_update,
           dt_update
        });

        try {

            await this.save(user);
            return user;

        } catch (error) {
            throw new InternalServerErrorException('Error com a conexão com o Bando de Dados'); 
        } 

        
    }
}