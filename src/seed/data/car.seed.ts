// las interfaces y clases las podemos importar aunq no sean parte del modulo, ya q no tienen dependecias o inyeccion
// hay ciertas cosas q si requieren q esten importadas en el modulo
import { Car } from '../../../dist/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED:Car[] = [
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
    }
]