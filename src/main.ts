import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// puedes agregar un pipe a nivel global de aplicación
// puedes poner middlewares y demas a diferentes nivel depende de lo que necesites