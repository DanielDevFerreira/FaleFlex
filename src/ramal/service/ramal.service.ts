import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRamalDto } from '../dto/create-ramal.dto';
import { UpdateRamalDto } from '../dto/update-ramal.dto';

import { tb_ramal } from '../entity/ramal.entity';
import { RamalRepository } from '../repository/ramal.repository';

@Injectable()
export class RamalService {
    constructor(
        private ramalRepository: RamalRepository,
    ){}

//=====================================================================

    createRamal(ramalCreteDto: CreateRamalDto): Promise<tb_ramal>{
        return this.ramalRepository.createRamal(ramalCreteDto);
    }

//=====================================================================

    getAllRamal():Promise<tb_ramal[]>{
        return this.ramalRepository.find();
    }

//=====================================================================

    async getRamalById( id: string ): Promise<tb_ramal>{
        const found = await this.ramalRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Usuario com ID ${id} não encontrado!`);
        }
        return found;
    }
//=====================================================================

    async updateRamal(id: string, updateRamalDto: UpdateRamalDto ): Promise<tb_ramal>{
        const objectRamal = await this.getRamalById(id);

        objectRamal.id_servidor = updateRamalDto.id_servidor,
        objectRamal.id_cliente = updateRamalDto.id_cliente,
        objectRamal.ramal = updateRamalDto.ramal,
        objectRamal.senha = updateRamalDto.senha,
        objectRamal.id_status = updateRamalDto.id_status,
        objectRamal.registro = updateRamalDto.registro,
        objectRamal.id_situacao = updateRamalDto.id_situacao,
        objectRamal.observacao = updateRamalDto.observacao,
        objectRamal.id_login_insert = updateRamalDto.id_login_insert,
        objectRamal.dt_insert = updateRamalDto.dt_insert,
        objectRamal.id_login_update = updateRamalDto.id_login_update,
        objectRamal.dt_update = new Date();

        try {
            await this.ramalRepository.save(objectRamal);
            return objectRamal;
        } catch (error) {
            throw new InternalServerErrorException('Error com a conexão com o Bando de Dados'); 
        }
    }

//=====================================================================

    async softDeleteRamal(id: string): Promise<void>{
        const found = await this.ramalRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Não foi encontrado o registro com o id ${id}`);
        }
        const query = this.ramalRepository.softDelete(id);
    }
}
