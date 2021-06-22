import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateRamalDto } from '../dto/create-ramal.dto';
import { UpdateRamalDto } from '../dto/update-ramal.dto';
import { tb_ramal } from '../entity/ramal.entity';
import { RamalService } from '../service/ramal.service';

@Controller('ramal')
@UseGuards(AuthGuard())
export class RamalController {
    constructor(
        private ramalService: RamalService
    ){}

//======================================================================    

    @Post()
    createRamal(@Body() createRamalDto: CreateRamalDto): Promise<tb_ramal>{
        console.log(createRamalDto);
        return this.ramalService.createRamal(createRamalDto);
    }

//====================================================================== 

    @Get()
    getAllRamal():Promise<tb_ramal[]>{
        return this.ramalService.getAllRamal();
    }

//====================================================================== 

    @Get('/:id')
    getRamalId(@Param('id') id:string):Promise<tb_ramal>{
        return this.ramalService.getRamalById(id);
    }

//====================================================================== 

    @Patch('/:id')
    updateRamal(@Param('id') id: string, @Body() updateRamalDto: UpdateRamalDto ): Promise<tb_ramal>{
        return this.ramalService.updateRamal(id, updateRamalDto);
    }

//======================================================================

    @Delete('/:id')
    softDeleteRamal(@Param('id') id:string): Promise<void>{
        return this.ramalService.softDeleteRamal(id);
    }

//======================================================================
}
