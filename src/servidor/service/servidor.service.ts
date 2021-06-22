import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServidorDto } from '../dto/create-servidor.dto';
import { UpdateServidorDto } from '../dto/update-servidor.dto';
import { tb_servidor } from '../entity/servidor.entity';
import { ServidorRepository } from '../repository/servidor.repository';

@Injectable()
export class ServidorService {
    constructor(
        @InjectRepository(ServidorRepository)
        private servidorRepository: ServidorRepository,
    ){}

//==================================================================================

    createServidor(createServidorDto: CreateServidorDto): Promise<tb_servidor>{
        return this.servidorRepository.createServidor(createServidorDto);
    }

//==================================================================================   

    getAllServidor(): Promise<tb_servidor[]>{
        return this.servidorRepository.find();
    }

//==================================================================================

    getServidorById(id: string): Promise<tb_servidor>{
        return this.servidorRepository.findOne(id);
    }

//==================================================================================

    async softDeleteServidor( id: string): Promise<void>{
        const found = await this.servidorRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Não foi encontrado o registro com o id ${id}`);
        }
        const query = this.servidorRepository.softDelete(id);
    }

//==================================================================================

    async updateServidor (id: string, updateServidorDto: UpdateServidorDto): Promise<tb_servidor>{
        const objectServidor = await this.getServidorById(id);

        console.log(objectServidor);
        console.log(updateServidorDto);
        
        objectServidor.nome = updateServidorDto.nome,
        objectServidor.ip = updateServidorDto.ip,
        objectServidor.id_status = updateServidorDto.id_status,
        objectServidor.http_usuario = updateServidorDto.http_usuario,
        objectServidor.http_senha = updateServidorDto.http_senha,
        objectServidor.http_porta = updateServidorDto.http_porta,
        objectServidor.ami_usuario = updateServidorDto.ami_usuario,
        objectServidor.ami_senha = updateServidorDto.ami_senha,
        objectServidor.ami_porta = updateServidorDto.ami_porta,
        objectServidor.ami_porta = updateServidorDto.ami_porta,
        objectServidor.mysql_usuario = updateServidorDto.mysql_usuario,
        objectServidor.mysql_senha = updateServidorDto.mysql_senha,
        objectServidor.mysql_porta = updateServidorDto.mysql_porta,
        objectServidor.observacao = updateServidorDto.observacao,
        objectServidor.id_login_insert = updateServidorDto.id_login_insert,
        objectServidor.id_login_update = updateServidorDto.id_login_update,
        objectServidor.dt_update = new Date();

        try {
            await this.servidorRepository.save(objectServidor);
            return objectServidor;
        } catch (error) {
            throw new InternalServerErrorException('Error com a conexão com o Bando de Dados'); 
        }
    }
}
