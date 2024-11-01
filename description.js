// npm i -g @nestjs/cli - установка nest глобально
// npx nest new . - создаем новый проект в этой директории

// npx nest g res name --no-spec  - генерируем модуль (resources - module/controller/service) с указанным именем одной командой, -no-spec - без тестов

// вконце .eslintrc.js добавляем настройки prettier


// СУБД - prisma
// npm install prisma --save-dev - cтавим призму
// npx prisma  - запускаем
// npx prisma init  -  инициализируем - создаст папку prisma, в ней прописываем модели
// npm install @prisma/client
// в расширениях VSCode также ставим prisma
// подключение к БД прописываем в src/prisma.service.ts
// в .env прописываем строку подключения 
        // DATABASE_URL="postgresql://<login>:<password>@localhost:<port>/<db_name>?schema=public"
        // не забываем подключить в модуле и в сервисах
    // npx prisma - выдаст список возможных комманд
    // npx prisma generate - после написания схемы запускаем генерацию таблицы
    // npx prisma db push  - подтянет изменения(создаст таблицу в БД)



// npm i --save class-validator class-transformer  - для валидации и трансформации

// npm i --save @nestjs/config  - для работы с файлами конфигурации

// npm i --save @nestjs/microservices  - для работы с микросервисами(подключаем в main.ts)
        // npx nest g res microservice --no-spec  - генерируем микросервис(при генерации предлагается выбор опций, выбираем путь microservice)
        // сам микросервис подключаем к основному в main.ts, app.controller и app.service


// npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql  - для использования graphql
        /* (дополнительно установил GraphQL: Language Feature Support
        - расширение для VSCode и создаем схему(scjema.gql) в src) */
        // подключаем в app.module
        // npx nest g res flowers-graphql --no-spec  - генерируем модуль с graphql (в д.с при создании выбрали опции code first и no-crud)
        // по адресу http://localhost:4200/graphql - (подставляем порт приложения) можно открыть playground для визуализации запросов
                        // Пример запроса в playground 
                        // query someName {  (запрос с любым именем)
                        //     flowers {  (таблица)
                        //         name   (любые нужные поля - Ctrl+Space - список доступных)
                        //         color
                        //     }
                        // }
