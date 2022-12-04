// El controlador escucha solicitudes de los clientes
// y emite respuesta
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')  //  /cars
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
    // getCarById(@Param('id', new ParseUUIDPipe({version: '5', })) id: string) {  //ponle mas opciones al pipe
        getCarById(@Param('id', ParseUUIDPipe) id: string) {
        // Si no es un uuid ni siquiera va a llegar al servicio
        // el servicio es el cual trabaja con la db
        return this.carsService.findOneById(id)
    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto ){
        return createCarDto;
    }

    @Patch(':id')
    updateCar( 
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
