import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// los decoradores convierten las clases en objetos con funcionalidad especifica

@Module({   // esto es un @decorador
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {} //es una simple clase con el decorador Module
