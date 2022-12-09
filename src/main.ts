import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(  // GlobalPipes
    new ValidationPipe({
      whitelist: true,  // solo deja pasar la data que estoy esperando, elimina data que no es
      forbidNonWhitelisted: true, // ahora me dice que tales campos no deben ser enviados
    })
  )

  const port = process.env.PORT || 3000
  await app.listen(port);
}
bootstrap();

// no olvidar instalar: pnpm i class-validator class-transformer

// puedes agregar un pipe a nivel global de aplicación
// puedes poner middlewares y demas a diferentes nivel depende de lo que necesites