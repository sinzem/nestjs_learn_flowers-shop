import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFlowersDto } from './dto/flowers.dto';
import { ConfigService } from '@nestjs/config';
// import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
    
    constructor(private readonly prisma: PrismaService,
                private readonly configService: ConfigService) {}

    findAll() {
        // console.log(this.configService.get<string>("MODE")); /* (пример получения переменных через config(.env - именно env нигде не подключал, определяет автоматически)) */
        // console.log(this.configService.get<EnumAppMode>("MODE"));  /* (пример получения переменных через config(EnumAppMode - создали типизацию для примера)) */
        return this.prisma.flower.findMany();
        // console.log("service operation");
        // return [
        //     {name: "Rose", color: "red", price: 5},
        //     {name: "Lily", color: "white", price: 6},
        //     {name: "Tulip", color: "yellow", price: 7}]
    }

    create(dto: CreateFlowersDto) {
        return this.prisma.flower.create({
            data: dto
        })
    }

}
