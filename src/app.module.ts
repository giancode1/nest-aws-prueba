import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

// los decoradores convierten las clases en objetos con funcionalidad especifica

@Module({   // esto es un @decorador
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {} //es una simple clase con el decorador Module
