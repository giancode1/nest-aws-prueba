// las interfaces y clases las podemos importar aunq no sean parte del modulo, ya q no tienen dependecias o inyeccion
// hay ciertas cosas q si requieren q esten importadas en el modulo
import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED:Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Honda',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Jeep',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime()
    },
]