import React from "react";
import AdvancedParagraph from "./AdvancedParagraph";
import MainTitle from "./MainTitle";
import Paragraph from "./Paragraph";
import Source from "./Source";

function Main() {
    return (
        <div className="main">
            <MainTitle />

            <Paragraph
                introduction={`1. В терминале заходим в пустую созданную для нашего проекта дерикторию. Там вводим:`}
                command={`npx create-react-app .`}
                commandNumber="0"
            />

            <div className="paragraph paragraph_noCode">2. Включаем Docker</div>

            <Paragraph
                introduction={`3. Переходим в папку с приложением и создаём Dockerfile.prod со
                следующей структурой:`}
                command={` FROM node as build
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
                    COPY --from=build /app/build /usr/share/nginx/html`}
                commandNumber="1"
            />

            <Paragraph
                introduction={` 4. Создаём рядом Dockerfile.dev со следующим содержимым:`}
                command={`FROM node
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
                    <br />`}
                commandNumber="2"
            />

            <Paragraph
                introduction={` 5. Теперь по соседству делаем файл .env:`}
                command={` CHOKIDAR_USEPOLLING=true
                    <br />
                    REACT_APP_NAME=greatdev`}
                commandNumber="3"
            />

            <Paragraph
                introduction={`6. Аналогично - docker-compose-dev.yml:`}
                command={` version: '3.8'
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
                    <br />- CHOKIDAR_USEPOLLING=true`}
                commandNumber="4"
            />

            <Paragraph
                introduction={`7. Рядышком - docker-compose-prod.yml:`}
                command={`version: '3.8'
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
                    <br />- "8080:80"`}
                commandNumber="5"
            />

            <Paragraph
                introduction={`8. Туда же - .dockerignore:`}
                command={`node_modules
                    <br />
                    Dockerfile
                    <br />
                    .git
                    <br />
                    .gitignore
                    <br />
                    .dockerignore
                    <br />
                    .env`}
                commandNumber="6"
            />

            <Paragraph
                introduction={`9. Теперь, для того чтобы посмотреть как будет в
                prodakshen-режиме и как в режиме разработки, пропишем в
                компоненте App.js:`}
                command="<p>{`Hello, ${process.env.REACT_APP_NAME}!`}</p>"
                commandNumber="7"
            />

            <AdvancedParagraph
                introduction={`10. Чтобы запустить приложение в докере, существует несколько
                вариантов. Я опишу самый короткий. Он заключается в том, чтобы
                использовать всего-лишь одну команду:`}
                developerCommand={`docker-compose -f docker-compose-dev.yml up -d --build`}
                developerCommandNumber="9"
                productionCommand={`docker-compose -f docker-compose-prod.yml up -d --build`}
                productionCommandNumber="10"
            />

            <AdvancedParagraph
                introduction={`11. Ну и чтобы удалить контейнер, `}
                developerCommand={`docker-compose -f docker-compose-dev.yml down`}
                developerCommandNumber="11"
                productionCommand={`docker-compose -f docker-compose-prod.yml down`}
                productionCommandNumber="12"
            />

            <AdvancedParagraph
                introduction={`12. Чтобы удалить образ, `}
                developerCommand={`docker rmi docker-image-dev`}
                developerCommandNumber="13"
                productionCommand={`docker rmi docker-image-prod`}
                productionCommandNumber="14"
            />

            <Source />
        </div>
    );
}

export default Main;
