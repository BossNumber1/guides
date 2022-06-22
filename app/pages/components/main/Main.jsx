import React from "react";
import AdvancedParagraph from "./AdvancedParagraph";
import MainTitle from "./MainTitle";
import Paragraph from "./Paragraph";
import Source from "./Source";

function Main() {
    const ParagraphContent = [
        {
            index: 1,
            introduction: `1. В терминале заходим в пустую созданную для нашего проекта дерикторию. Там вводим:`,
            command: ["npx create-react-app ."],
            heightContent: 18,
            widthContent: 162,
        },
        {
            index: 2,
            introduction: `2. Включаем Docker`,
        },
        {
            index: 3,
            introduction: `3. Переходим в папку с приложением и создаём Dockerfile.dev со
                следующей структурой:`,
            command: [
                ` FROM node \n WORKDIR /app \n COPY package.json . \n RUN npm install \n COPY . . \n ARG REACT_APP_NAME \n ENV REACT_APP_NAME=$REACT_APP_NAME \n EXPOSE 3000 \n CMD ["npm", "start"]`,
            ],
            heightContent: 140,
            widthContent: 261,
        },
        {
            index: 4,
            introduction: `4. Создаём рядом Dockerfile.prod со следующим содержимым:`,
            command: [
                ` FROM node as build \n WORKDIR /app \n COPY package.json . \n RUN npm install \n COPY . . \n ARG REACT_APP_NAME \n ENV REACT_APP_NAME=$REACT_APP_NAME \n RUN npm run build \n \n FROM nginx \n COPY --from=build /app/build /usr/share/nginx/html`,
            ],
            heightContent: 173,
            widthContent: 380,
        },
        {
            index: 5,
            introduction: `5. Аналогично - docker-compose-dev.yml:`,
            command: [
                ` version: '3.8' \n services: \n   react_example: \n     build: \n       context: . \n       dockerfile: Dockerfile.dev \n       args:  \n         - REACT_APP_NAME=greatdev-dev \n     container_name: dev_container_react_example \n     ports: \n       - 3000:3000 \n     volumes: \n       - ./src:/app/src`,
            ],
            heightContent: 203,
            widthContent: 363,
        },
        {
            index: 6,
            introduction: `6. Рядышком - docker-compose-prod.yml:`,
            command: [
                ` version: '3.8' \n services: \n   react_example: \n     build: \n       context: . \n       dockerfile: Dockerfile.prod \n       args: \n         - REACT_APP_NAME=greatdev-prod \n     container_name: prod_container_react_example \n     ports: \n       - 80:80`,
            ],
            heightContent: 171,
            widthContent: 365,
        },
        {
            index: 7,
            introduction: `7. Туда же - .dockerignore:`,
            command: [
                ` node_modules \n Dockerfile.dev \n Dockerfile.prod \n .git \n .gitignore \n .dockerignore`,
            ],
            heightContent: 94,
            widthContent: 125,
        },
        {
            index: 8,
            introduction: `8. Теперь, для того чтобы посмотреть как будет в
                prodakshen-режиме и как в режиме разработки, пропишем в
                компоненте App.js:`,
            command: ["<p>{`Hello, ${process.env.REACT_APP_NAME}!`}</p>"],
            heightContent: 17,
            widthContent: 355,
        },
    ];

    const AdvancedParagraphContent = [
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

    return (
        <div className="main">
            <MainTitle />

            {ParagraphContent.map((el) => {
                return (
                    <Paragraph
                        key={el.index}
                        introduction={el.introduction}
                        command={el.command}
                        heightContent={el.heightContent}
                        widthContent={el.widthContent}
                    />
                );
            })}

            {AdvancedParagraphContent.map((el) => {
                return (
                    <AdvancedParagraph
                        key={el.index}
                        introduction={el.introduction}
                        developerCommand={el.developerCommand}
                        productionCommand={el.productionCommand}
                        widthContentDeveloper={el.widthContentDeveloper}
                        widthContentProduction={el.widthContentProduction}
                    />
                );
            })}

            <Source />
        </div>
    );
}

export default Main;
