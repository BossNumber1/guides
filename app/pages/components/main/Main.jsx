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
            commandNumber: 0,
            heightContent: 18,
            widthContent: 162,
        },
        {
            index: 2,
            introduction: `2. Включаем Docker`,
        },
        {
            index: 3,
            introduction: `3. Переходим в папку с приложением и создаём Dockerfile.prod со
                следующей структурой:`,
            // command: [
            //     "FROM node as build",
            //     "WORKDIR /app",
            //     "COPY package.json .",
            //     "RUN npm install",
            //     "COPY . .",
            //     "ARG REACT_APP_NAME",
            //     "ENV REACT_APP_NAME=$REACT_APP_NAME",
            //     "RUN npm run build",
            //     "",
            //     "FROM nginx",
            //     "COPY --from=build /app/build /usr/share/nginx/html",
            // ],
            command: [
                ` FROM node as build \n WORKDIR /app \n COPY package.json . \n RUN npm install \n COPY . . \n ARG REACT_APP_NAME \n 
 ENV REACT_APP_NAME=$REACT_APP_NAME \n RUN npm run build \n \n FROM nginx \n COPY --from=build /app/build /usr/share/nginx/html`,
            ],
            commandNumber: 1,
            heightContent: 188,
            widthContent: 383,
        },
        {
            index: 4,
            introduction: `4. Создаём рядом Dockerfile.dev со следующим содержимым:`,
            // command: [
            //     "FROM node",
            //     "WORKDIR /app",
            //     "COPY package.json .",
            //     "RUN npm install",
            //     "COPY . .",
            //     "ENV REACT_APP_NAME=myName",
            //     "EXPOSE 3000",
            //     `CMD ["npm", "start"]`,
            // ],
            command: [
                ` FROM node \n WORKDIR /app \n COPY package.json . \n RUN npm install \n COPY . . \n ENV REACT_APP_NAME=myName \n EXPOSE 3000 \n CMD ["npm", "start"]`,
            ],
            commandNumber: 2,
            heightContent: 127,
            widthContent: 204,
        },
        {
            index: 5,
            introduction: `5. Теперь по соседству делаем файл .env:`,
            command: [` CHOKIDAR_USEPOLLING=true \n REACT_APP_NAME=greatdev`],
            commandNumber: 3,
            heightContent: 33,
            widthContent: 195,
        },
        {
            index: 6,
            introduction: `6. Аналогично - docker-compose-dev.yml:`,
            // command: [
            //     "version: '3.8'",
            //     "services:",
            //     "react-app:",
            //     "build:",
            //     "context: .",
            //     "dockerfile: Dockerfile.dev",
            //     "ports:",
            //     `- "3000:3000"`,
            //     "volumes:",
            //     `- ./src:/app/src`,
            //     "environment:",
            //     "- REACT_APP_NAME=greatdev-dev",
            //     "- CHOKIDAR_USEPOLLING=true",
            // ],
            command: [
                ` version: '3.8' \n services: \n react-app: \n build: \n context: . \n dockerfile: Dockerfile.dev \n ports: \n - "3000:3000" \n volumes: \n - ./src:/app/src \n environment: \n - REACT_APP_NAME=greatdev-dev \n - CHOKIDAR_USEPOLLING=true`,
            ],
            commandNumber: 4,
            heightContent: 202,
            widthContent: 229,
        },
        {
            index: 7,
            introduction: `7. Рядышком - docker-compose-prod.yml:`,
            // command: [
            //     "version: '3.8'",
            //     "services:",
            //     "react-app:",
            //     "build:",
            //     "context: .",
            //     "dockerfile: Dockerfile.prod",
            //     "args:",
            //     "- REACT_APP_NAME=greatdev-prod",
            //     "ports:",
            //     `- "8080:80"`,
            // ],
            command: [
                ` version: '3.8' \n services: \n react-app: \n build: \n context: . \n dockerfile: Dockerfile.prod \n args: \n - REACT_APP_NAME=greatdev-prod \n ports: \n - "8080:80"`,
            ],
            commandNumber: 5,
            heightContent: 155,
            widthContent: 235,
        },
        {
            index: 8,
            introduction: `8. Туда же - .dockerignore:`,
            // command: [
            //     "node_modules",
            //     "Dockerfile",
            //     ".git",
            //     ".gitignore",
            //     ".dockerignore",
            //     ".env",
            // ],
            command: [
                ` node_modules \n Dockerfile \n .git \n .gitignore \n .dockerignore \n .env`,
            ],
            commandNumber: 6,
            heightContent: 95,
            widthContent: 115,
        },
        {
            index: 9,
            introduction: `9. Теперь, для того чтобы посмотреть как будет в
                prodakshen-режиме и как в режиме разработки, пропишем в
                компоненте App.js:`,
            command: ["<p>{`Hello, ${process.env.REACT_APP_NAME}!`}</p>"],
            commandNumber: 7,
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
            developerCommand: `docker-compose -f docker-compose-dev.yml up -d --build`,
            developerCommandNumber: 9,
            productionCommand: `docker-compose -f docker-compose-prod.yml up -d --build`,
            productionCommandNumber: 10,
        },
        {
            index: 2,
            introduction: `11. Ну и чтобы удалить контейнер, `,
            developerCommand: `docker-compose -f docker-compose-dev.yml down`,
            developerCommandNumber: 11,
            productionCommand: `docker-compose -f docker-compose-prod.yml down`,
            productionCommandNumber: 12,
        },
        {
            index: 3,
            introduction: `12. Чтобы удалить образ, `,
            developerCommand: `docker rmi docker-image-dev`,
            developerCommandNumber: 13,
            productionCommand: `docker rmi docker-image-prod`,
            productionCommandNumber: 14,
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
                        commandNumber={el.commandNumber}
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
                        developerCommandNumber={el.developerCommandNumber}
                        productionCommand={el.productionCommand}
                        productionCommandNumber={el.productionCommandNumber}
                    />
                );
            })}

            <Source />
        </div>
    );
}

export default Main;
