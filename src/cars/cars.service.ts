// Servicios     todos los servicios son providers, no todos los proviers son servicios
// alojan logica de negoio de tal manera que sean reutilizable
// mediante inyección de dependencias
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()  // decorador Injectable
export class CarsService {

    private cars:Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    findAll(){ // por defecto publico
        return this.cars;
    }

    findOneById(id: string){
        const car = this.cars.find(car => car.id===id);

        //le doy mas info al user q consuma la api , NotFoundException lazna 404
        if(!car) throw new NotFoundException(`Car with id '${ id }' not found`);
        
        return car;
    }

    create( createCarDto: CreateCarDto ){
        const car:Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }
}
