export const ParagraphContent = [
    {
        index: 1,
        introduction: `1. В терминале заходим в пустую созданную для нашего проекта дерикторию. Там вводим:`,
        command: ["npx create-react-app ."],
        heightContent: 18,
        widthContent: 162,
    },
    {
        index: 2,
        introduction: `2. Чтобы все изменения вводимые в изначальный код приложения отображались - в package.json меняем в разделе scripts существующий start на:`,
        command: ["WATCHPACK_POLLING=true react-scripts start"],
        heightContent: 16,
        widthContent: 310,
    },
    {
        index: 3,
        introduction: `3. Включаем Docker`,
    },
    {
        index: 4,
        introduction: `4. Переходим в папку с приложением и создаём Dockerfile.dev со
                следующей структурой:`,
        command: [
            ` FROM node \n WORKDIR /app \n COPY package.json . \n RUN npm install \n COPY . . \n ARG MODE_TYPE \n ENV MODE_TYPE=$MODE_TYPE \n EXPOSE 3000 \n CMD ["npm", "start"]`,
        ],
        heightContent: 140,
        widthContent: 261,
    },
    {
        index: 5,
        introduction: `5. Создаём рядом Dockerfile.prod со следующим содержимым:`,
        command: [
            ` FROM node as build \n WORKDIR /app \n COPY package.json . \n RUN npm install \n COPY . . \n ARG MODE_TYPE \n ENV MODE_TYPE=$MODE_TYPE \n RUN npm run build \n \n FROM nginx \n COPY --from=build /app/build /usr/share/nginx/html`,
        ],
        heightContent: 173,
        widthContent: 380,
    },
    {
        index: 6,
        introduction: `6. Аналогично - docker-compose-dev.yml:`,
        command: [
            ` version: '3.8' \n services: \n   react_example: \n     build: \n       context: . \n       dockerfile: Dockerfile.dev \n       args:  \n         - MODE_TYPE=development-mode \n     container_name: dev_container_react_example \n     ports: \n       - 3000:3000 \n     volumes: \n       - ./src:/app/src`,
        ],
        heightContent: 203,
        widthContent: 363,
    },
    {
        index: 7,
        introduction: `7. Рядышком - docker-compose-prod.yml:`,
        command: [
            ` version: '3.8' \n services: \n   react_example: \n     build: \n       context: . \n       dockerfile: Dockerfile.prod \n       args: \n         - MODE_TYPE=production-mode \n     container_name: prod_container_react_example \n     ports: \n       - 80:80`,
        ],
        heightContent: 171,
        widthContent: 365,
    },
    {
        index: 8,
        introduction: `8. Туда же - .dockerignore:`,
        command: [
            ` node_modules \n Dockerfile.dev \n Dockerfile.prod \n docker-compose-dev.yml \n docker-compose-prod.yml \n .git \n .gitignore \n .dockerignore`,
        ],
        heightContent: 126,
        widthContent: 184,
    },
    {
        index: 9,
        introduction: `9. Теперь, чтобы понимать какая версия запущена, пропишем в App.js:`,
        command: ["<p>{`This is ${process.env.MODE_TYPE}!`}</p>"],
        heightContent: 17,
        widthContent: 326,
    },
];

export const AdvancedParagraphContent = [
    {
        index: 1,
        introduction: `10. Чтобы запустить приложение в докере, существует несколько
                вариантов. Я опишу самый короткий. Он заключается в том, чтобы
                использовать всего-лишь одну команду:`,
        developerCommand: `docker-compose -p dev_image -f docker-compose-dev.yml up -d --build`,
        productionCommand: `docker-compose -p prod_image -f docker-compose-prod.yml up -d --build`,
        widthContentDeveloper: 422,
        widthContentProduction: 436,
    },
    {
        index: 2,
        introduction: `11. Чтобы удалить контейнер, `,
        developerCommand: `docker-compose -p dev_image -f docker-compose-dev.yml down`,
        productionCommand: `docker-compose -p prod_image -f docker-compose-prod.yml down`,
        widthContentDeveloper: 383,
        widthContentProduction: 396,
    },
    {
        index: 3,
        introduction: `12. Ну и чтобы удалить образ, `,
        developerCommand: `docker rmi dev_image_react_example`,
        productionCommand: `docker rmi prod_image_react_example`,
        widthContentDeveloper: 230,
        widthContentProduction: 234,
    },
];
