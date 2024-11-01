import { Module } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService, ConfigModule],
  imports: [],
  exports: [FlowersService]
})
export class FlowersModule {}
