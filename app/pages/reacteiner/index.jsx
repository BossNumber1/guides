import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Main from "../components/main/Main";
import DeclarationHeader from "../DeclarationHeader";

function Reacteiner() {
    return (
        <>
            <DeclarationHeader
                title="ReactJS-application dockerization guide"
                keywords="ReactJS, docker, application, ReactJS-application dockerization"
            />

            <div className="container">
                <Header title="Докеризация ReactJS-приложения" />
                <Main />
                <Footer numberIconActive="0" />
            </div>
        </>
    );
}

export default Reacteiner;
