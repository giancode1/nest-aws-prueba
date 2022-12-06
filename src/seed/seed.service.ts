import { CARS_SEED } from './data/car.seed';
import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {

  // cargar datos, semilla de inf // en la vida real basta q inserte en la db
  populateDB() {
    // CARS_SEED
    // BRANDS_SEED

    return 'Seed executed';
  }


  
}
