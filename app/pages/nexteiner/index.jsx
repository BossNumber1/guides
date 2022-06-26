import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Main from "../components/main/Main";
import DeclarationHeader from "../DeclarationHeader";
import * as content from "../db/nextjsData";

function Nexteiner() {
    return (
        <>
            <DeclarationHeader
                title="NextJS-application dockerization guide"
                keywords="NextJS, docker, application, NextJS-application dockerization"
            />

            <div className="container">
                <Header title="Докеризация NextJS-приложения" />
                <Main content={content} readTime="минута" />
                <Footer numberIconActive="1" />
            </div>
        </>
    );
}

export default Nexteiner;
