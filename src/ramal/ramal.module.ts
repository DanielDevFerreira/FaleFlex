import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RamalController } from './controller/ramal.controller';
import { RamalRepository } from './repository/ramal.repository';
import { RamalService } from './service/ramal.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([
            RamalRepository
        ]),
        AuthModule
    ],
    controllers:[RamalController],
    providers:[RamalService]
})
export class RamalModule {}
