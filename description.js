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
