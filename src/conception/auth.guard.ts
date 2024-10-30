import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable() /* (пример guards) */
export class AuthGuard implements CanActivate { /* (работает на основе встроенного canactivate) */
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest(); /* (получаем запрос) */
        const isAuth = request.headers.authorization === "secret"; /* (проверяем строку авторизации) */
        if (!isAuth) throw new UnauthorizedException("Not authorized"); /* (ошибка если не авторизован) */
        
        return isAuth;  /* (true если авторизован) */
    }
} /* (пример использования в контроллере) */