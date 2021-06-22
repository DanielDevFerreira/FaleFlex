import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ServidorController } from './controller/servidor.controller';
import { ServidorRepository } from './repository/servidor.repository';
import { ServidorService } from './service/servidor.service';



@Module({
    imports:[
        TypeOrmModule.forFeature([
            ServidorRepository
        ]),
        AuthModule
    ],
    controllers:[ServidorController],
    providers:[ServidorService]
})
export class ServidorModule {}
