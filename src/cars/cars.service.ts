// Servicios     todos los servicios son providers, no todos los proviers son servicios
// alojan logica de negoio de tal manera que sean reutilizable
// mediante inyección de dependencias
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()  // decorador Injectable
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            mode: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    findAll(){ // por defecto publico
        return this.cars;
    }

    findOneById(id: number){
        const car = this.cars.find(car => car.id===id);

        //le doy mas info al user q consuma la api , NotFoundException lazna 404
        if(!car) throw new NotFoundException(`Car with id '${ id }' not found`);
        
        return car;
    }
}
