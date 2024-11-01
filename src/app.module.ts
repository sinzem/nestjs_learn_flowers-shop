import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/middleware';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { FlowersGraphqlModule } from './flowers-graphql/flowers-graphql.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), /* (модуль для работы с файлами конфигурации, можем передать обьект с опциями) */
    FlowersModule, 
    MicroserviceModule,
    ClientsModule.register([ /* (подключение микросервиса) */
      {
        name: "ORDER_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 8877
        }
      }
    ]),
    /* (подключение graphql) */
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true
    }),
    FlowersGraphqlModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("flowers")
  }
} /* (при экспорте подключаем миддлвер(LoggerMiddleware), будет работать по пути "/flowers") */

