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
            command: `npx create-react-app .`,
            commandNumber: 0,
        },
        {
            index: 2,
            introduction: `2. Включаем Docker`,
        },
        {
            index: 3,
            introduction: `3. Переходим в папку с приложением и создаём Dockerfile.prod со
                следующей структурой:`,
            command: ` FROM node as build
                    <br />
                    WORKDIR /app
                    <br />
                    COPY package.json .<br />
                    RUN npm install
                    <br />
                    COPY . .<br />
                    ARG REACT_APP_NAME
                    <br />
                    ENV REACT_APP_NAME=$REACT_APP_NAME
                    <br />
                    RUN npm run build
                    <br />
                    <br />
                    FROM nginx
                    <br />
                    COPY --from=build /app/build /usr/share/nginx/html`,
            commandNumber: 1,
        },
        {
            index: 4,
            introduction: `4. Создаём рядом Dockerfile.dev со следующим содержимым:`,
            command: `FROM node
                    <br />
                    WORKDIR /app
                    <br />
                    COPY package.json .<br />
                    RUN npm install
                    <br />
                    COPY . .<br />
                    ENV REACT_APP_NAME=myName
                    <br />
                    EXPOSE 3000
                    <br />
                    CMD ["npm", "start"]
                    <br />`,
            commandNumber: 2,
        },
        {
            index: 5,
            introduction: `5. Теперь по соседству делаем файл .env:`,
            command: `CHOKIDAR_USEPOLLING=true
                    <br />
                    REACT_APP_NAME=greatdev`,
            commandNumber: 3,
        },
        {
            index: 6,
            introduction: `6. Аналогично - docker-compose-dev.yml:`,
            command: `version: '3.8'
                    <br />
                    services:
                    <br />
                    react-app:
                    <br />
                    build:
                    <br />
                    context: .<br />
                    dockerfile: Dockerfile.dev
                    <br />
                    ports:
                    <br />
                    - "3000:3000"
                    <br />
                    volumes:
                    <br />
                    - ./src:/app/src
                    <br />
                    environment:
                    <br />
                    - REACT_APP_NAME=greatdev-dev
                    <br />- CHOKIDAR_USEPOLLING=true`,
            commandNumber: 4,
        },
        {
            index: 7,
            introduction: `7. Рядышком - docker-compose-prod.yml:`,
            command: `version: '3.8'
                    <br />
                    services:
                    <br />
                    react-app:
                    <br />
                    build:
                    <br />
                    context: .<br />
                    dockerfile: Dockerfile.prod
                    <br />
                    args:
                    <br />
                    - REACT_APP_NAME=greatdev-prod
                    <br />
                    ports:
                    <br />- "8080:80"`,
            commandNumber: 5,
        },
        {
            index: 8,
            introduction: `8. Туда же - .dockerignore:`,
            command: `node_modules
                    <br />
                    Dockerfile
                    <br />
                    .git
                    <br />
                    .gitignore
                    <br />
                    .dockerignore
                    <br />
                    .env`,
            commandNumber: 6,
        },
        {
            index: 9,
            introduction: `9. Теперь, для того чтобы посмотреть как будет в
                prodakshen-режиме и как в режиме разработки, пропишем в
                компоненте App.js:`,
            command: "<p>{`Hello, ${process.env.REACT_APP_NAME}!`}</p>",
            commandNumber: 7,
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
