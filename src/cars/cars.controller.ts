// El controlador escucha solicitudes de los clientes
// y emite respuesta
import { Controller, Get, Param } from '@nestjs/common';
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
    getCarById(@Param('id') id: string) { // cualquier inf que viene por el url es un string
        console.log({ id })  
        return this.carsService.findOneById(+id) // ! si envio un id como 3a si lo resuelve 200, con +id me sale NaN pero NaN es un numero, contradictorio :/ pero asi es
        //se debe mejorar la respuesta del backend, deberia dar un 400 en el caso comentado anterior
    }

}
