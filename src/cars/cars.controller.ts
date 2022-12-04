// El controlador escucha solicitudes de los clientes
// y emite respuesta
// no maneja logica de negocio
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')  //  /cars   //puedes poner un pipe a nivel global de controlador
@UsePipes(ValidationPipe) // a esta clase controlador todos sus metodos usaan el ValidationPipe
//pero aun mejor hagamosla global, prox clase
export class CarsController {

    //inyeccion de dependencias: crea una dependecia en el constructor
    constructor(
        private readonly carsService: CarsService
    ) {

    }

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
        getCarById(@Param('id', ParseUUIDPipe) id: string) {

        return this.carsService.findOneById(id)
    }

    @Post()
    //@UsePipes(ValidationPipe) //ahora si valida con el dto, pero puede ir arriba ya que tambn sera usado por el Patch
    createCar( @Body() createCarDto: CreateCarDto ){
        return this.carsService.create(createCarDto)
    }

    @Patch(':id') // puedes poner un pipe a nivel de controlador, o un metodo en el controlador
    updateCar(   //puedes agregar tantos pipes como quieras, aqui a nivel de parametro
        @Param('id', ParseIntPipe) id:number,
        @Body() body: any )
    {
        return body;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id:number ){
        return {
            method: 'delete',
            id
        }
    }

}
