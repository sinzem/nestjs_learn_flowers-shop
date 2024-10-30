import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";


@Injectable() /* (интерцепторы позволяют обработать не тольео запрос, но и ответ, отрабатывает после миддлвера, также использует next) */
export class LoggingInterceptor implements NestInterceptor { /* (наследуется от встроенного класса NestInterceptor) */
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log("Before"); /* (можем обработать запрос до выполнения операции(функции сервиса)) */

        return next.handle().pipe(tap(() => console.log("After..."))) /* (обрабатываем ответ(после выполнения функции сервиса1)) */
    } 
} /* (пример использования в контроллере) */