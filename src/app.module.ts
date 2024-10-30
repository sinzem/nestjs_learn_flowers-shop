import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/middleware';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), /* (модуль для работы с файлами конфигурации, можем передать обьект с опциями) */
    FlowersModule, MicroserviceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("flowers")
  }
} /* (при экспорте подключаем миддлвер(LoggerMiddleware), будет работать по пути "/flowers") */

