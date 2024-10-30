import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule); /* (no microservice) */
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP 
  }) /* (пример создания приложения как микросервиса) */

  // app.setGlobalPrefix("api")  /* (no microservice) */

  /* await app.listen(process.env.PORT ?? 4200); */ /* (no microservice) */
  await app.listen()
}
bootstrap();
