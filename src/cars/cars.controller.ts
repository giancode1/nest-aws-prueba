// El controlador escucha solicitudes de los clientes
// y emite respuesta
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

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
        // return ['Toyota', 'Honda', 'Jeep']   //200 por defecto
    }

    @Get(':id') // id, puede ser cualquier nombre y tantos como quieras:  :id/:brand
    getCarById(@Param('id', ParseIntPipe) id: number) {
        console.log({ id })  // ahora si es un numero
        // throw new Error('Auxilio') //nest tiene una capa para manejar las excepciones, nest no se rompe aunq no he tenido nada para controlar esta excepcion
        return this.carsService.findOneById(id) // si id es incorrecto como 3a, ya me responde con 400 'bad request', EXCELENTE asi de rápido y fácil
        
    }

}
