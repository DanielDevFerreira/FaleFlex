import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateServidorDto } from '../dto/create-servidor.dto';
import { UpdateServidorDto } from '../dto/update-servidor.dto';
import { tb_servidor } from '../entity/servidor.entity';
import { ServidorService } from '../service/servidor.service';


@Controller('servidor')
@UseGuards(AuthGuard())
export class ServidorController {
    constructor(
        private servidorService: ServidorService,
    ){}

//=====================================================================================

    @Post()
    createServidor(@Body() createServidorDto: CreateServidorDto): Promise<tb_servidor>{
        return this.servidorService.createServidor(createServidorDto);
    }

//=====================================================================================

    @Get()
    getAllServidor(): Promise<tb_servidor[]>{
        return this.servidorService.getAllServidor();
    }

//=====================================================================================

    @Get('/:id')
    getServidorById( id: string ): Promise<tb_servidor>{
        return this.servidorService.getServidorById(id);
    }

//=====================================================================================

    @Delete('/:id')
    softDeleteServidor(@Param('id') id: string): Promise<void>{
        return this.servidorService.softDeleteServidor(id);
    }

//=====================================================================================

    @Patch('/:id')
    updateServidor(@Param('id') id:string, @Body() updateServidorDto: UpdateServidorDto ): Promise<tb_servidor>{
        return this.servidorService.updateServidor(id, updateServidorDto);
    }

//=====================================================================================
}
