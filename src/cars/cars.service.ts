// Servicios     todos los servicios son providers, no todos los proviers son servicios
// alojan logica de negoio de tal manera que sean reutilizable
// mediante inyección de dependencias
import { Injectable } from '@nestjs/common';

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
        return this.cars.find(car => car.id===id);
    }
}
