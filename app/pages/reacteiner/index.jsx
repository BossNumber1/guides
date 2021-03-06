import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Main from "../components/main/Main";
import DeclarationHeader from "../DeclarationHeader";
import * as content from "../db/reactjsData";

function Reacteiner() {
    return (
        <>
            <DeclarationHeader
                title="ReactJS-application dockerization guide"
                keywords="ReactJS, docker, application, ReactJS-application dockerization"
            />

            <div className="container">
                <Header
                    title="Докеризация ReactJS-приложения"
                    subtitle={`<b>Вместо часа</b> с лишним разбора английского видео <b>несколько минут</b> выжимки на русском`}
                />
                <Main
                    content={content}
                    readTime="1,5 минуты"
                    linkSource="https://clck.ru/r2VWw"
                />
                <Footer numberIconActive="0" />
            </div>
        </>
    );
}

export default Reacteiner;
