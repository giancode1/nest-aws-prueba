// Servicios     todos los servicios son providers, no todos los proviers son servicios
// alojan logica de negoio de tal manera que sean reutilizable
// mediante inyección de dependencias
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

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

    update( id:string, updateCarDto: UpdateCarDto ){
        //principio DRY
        let carDB = this.findOneById(id);

        //en teoria este if esta demas dice fernando pero bueno
        if(updateCarDto.id && updateCarDto.id !== id)  //el id del query con el id del body en caso de tenerlo deben ser iguales
            throw new BadRequestException(`Car id in not valid inside body`);

        const index = this.cars.findIndex((car) => car.id === id);
        carDB = {
            ...carDB,
            ...updateCarDto,
            id,
        };
        this.cars[index] = carDB;
        
        // forma original
        // this.cars = this.cars.map( car => {
        //     if (car.id === id){
        //         carDB = {
        //             ...carDB,        //original
        //             ...updateCarDto,  //actualizado
        //             id              // se queda este id
        //         }
        //         return carDB;
        //     }
        //     return car;
        // })

        return carDB;
    }

    delete(id: string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        // return implicito
    }
}
