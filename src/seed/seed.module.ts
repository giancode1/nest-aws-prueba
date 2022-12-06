import { Module } from '@nestjs/common';
import { CarsModule } from '../cars/cars.module';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { BrandsModule } from '../brands/brands.module';

// No se re ejecuta todo, lo servicios son tratados como SINGLETON
// Es decir manda la misma imnstancia q ya habiamos credo
@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule, BrandsModule]
})
export class SeedModule {}
