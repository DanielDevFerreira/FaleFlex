import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateServidorDto } from "../dto/create-servidor.dto";
import { tb_servidor } from "../entity/servidor.entity";

@EntityRepository(tb_servidor)
export class ServidorRepository extends Repository<tb_servidor>{

    async createServidor(createServidorDto: CreateServidorDto): Promise<tb_servidor>{
        const{
            nome,
            ip,
            id_status,
            http_usuario,
            http_senha,
            http_porta,
            ami_usuario,
            ami_senha,
            ami_porta,
            mysql_usuario,
            mysql_senha,
            mysql_porta,
            observacao,
            id_login_insert
        } = createServidorDto;

        const servidor = this.create({
            nome,
            ip,
            id_status,
            http_usuario,
            http_senha,
            http_porta,
            ami_usuario,
            ami_senha,
            ami_porta,
            mysql_usuario,
            mysql_senha,
            mysql_porta,
            observacao,
            id_login_insert
        });

        try {

          await this.save(servidor);
          return servidor;

        } catch (error) {
            throw new InternalServerErrorException('Error com a conexão com o Bando de Dados'); 
        } 
    }
}