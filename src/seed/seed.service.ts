import { Injectable } from '@nestjs/common';


@Injectable()
export class SeedService {

  // cargar datos, semilla de inf // en la vida real basta q inserte en la db
  populateDB() {
    return 'Seed Executed'
  }


  
}
