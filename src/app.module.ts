import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/middleware';

@Module({
  imports: [FlowersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("flowers")
  }
} /* (при экспорте подключаем миддлвер(LoggerMiddleware), будет работать по пути "/flowers") */

