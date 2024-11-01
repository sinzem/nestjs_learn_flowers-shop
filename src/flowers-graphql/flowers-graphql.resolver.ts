import { Query, Resolver } from '@nestjs/graphql';
import { FlowersService } from 'src/flowers/flowers.service';
import { FlowerModel } from './flower.model';
// import { FlowersGraphqlService } from './flowers-graphql.service';

/* (по сути резолвер выступает в качестве провайдера, в graphql проходят только get-запросы) */
@Resolver()
export class FlowersGraphqlResolver {
  constructor(/* private readonly flowersGraphqlService: FlowersGraphqlService, */ private readonly flowersService: FlowersService) {}

  @Query(() => [FlowerModel], {name: "flowers"})
  findAll() {
    return this.flowersService.findAll()
  }
}
