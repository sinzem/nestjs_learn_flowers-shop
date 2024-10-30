import {IsString, IsNumber} from "class-validator";

/* (транспортировочный класс для создания записи в таблице, кроме типов проводим валидацию, можем прописать сообщения для ошибок) */
export class CreateFlowersDto {
    @IsString({
        message: "This is not string"
    })
    name: string

    @IsString()
    color: string

    @IsNumber()
    price: number
}

/* (создаем тип для обновления таблицы на основе имеющегося) */
export type TUpdateFlowersDto = Partial<CreateFlowersDto>

// применяем в контроллере или в сервисах