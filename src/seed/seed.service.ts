import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/car.seed';


@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ){}

  // cargar datos, semilla de inf // en la vida real basta q inserte en la db
  populateDB() {
    // CARS_SEED
    // BRANDS_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData( BRANDS_SEED );
    return 'Seed executed';
  }


  
}
