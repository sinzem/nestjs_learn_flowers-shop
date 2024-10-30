import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
    transform(value: string): number {
        const val = parseInt(value);
        if (isNaN(val)) {
            throw new BadRequestException("Validation filed");
        }
        return val;
    }
} /* (пример пайпа - преобразует входящие данные, в д.с из строки в число, если не получается, выдаст ошибку, для примера подключен в контроллере) */