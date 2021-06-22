import { EntityRepository, Repository } from "typeorm";
import { InternalServerErrorException } from "@nestjs/common";
import { tb_ramal } from "../entity/ramal.entity";
import { CreateRamalDto } from "../dto/create-ramal.dto";


@EntityRepository(tb_ramal)
export class RamalRepository extends Repository<tb_ramal>{
    
    async createRamal(ramalcreateDto: CreateRamalDto): Promise<tb_ramal>{
        const{
           id_servidor,
           id_cliente,
           ramal,
           senha,
           id_status,
           registro,
           id_situacao,
           observacao,
           id_login_insert,
           dt_insert
        } = ramalcreateDto;

        const objectRamal = this.create({
            id_servidor,
            id_cliente,
            ramal,
            senha,
            id_status,
            registro,
            id_situacao,
            observacao,
            id_login_insert,
            dt_insert
        });

        console.log(objectRamal);
        try {

            await this.save(objectRamal);
            return objectRamal;

        } catch (error) {
            throw new InternalServerErrorException('Error com a conexão com o Bando de Dados'); 
        }  
    }
}