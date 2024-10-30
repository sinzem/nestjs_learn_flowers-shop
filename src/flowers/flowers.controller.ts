import { Controller, UseGuards, Get, UseInterceptors, /* Query  */} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { AuthGuard } from 'src/conception/auth.guard';
import { LoggingInterceptor } from 'src/conception/interceptor';
// import { ParseIntPipe } from 'src/conception/parseInt.pipe';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor) /* (пример подключения интерцептора) */
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  // @Get()
  // findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) { /* (пример подключения пайпа - поле pageNumber преобразует в число, если не получится - выдаст ошибку(можно навешивать на Params, Body и т.д)) */
  //   console.log(pageNumber);
  //   return this.flowersService.findAll();
  // }

  @Get()
  @UseGuards(AuthGuard) /* (подключение кастомного guard) */
  findAll() {
    return this.flowersService.findAll();
  }
  
}