// import Footer from "./components/footer/Footer";
// import Header from "./components/Header";
// import Main from "./components/main/Main";
import DeclarationHeader from "./DeclarationHeader";
import styles from "../styles/home/home.module.scss";

export default function Home() {
    return (
        <>
            <DeclarationHeader
                title="Guides"
                keywords="Guides, ReactJS, NextJS, docker, application"
            />

            <div className={styles.container}>
                <div className={styles.container__row}>
                    <div className={styles.container__card}>1</div>
                    <div className={styles.container__card}>2</div>
                </div>
                <div className={styles.container__row}>
                    <div className={styles.container__card}>3</div>
                    <div className={styles.container__card}>4</div>
                </div>
            </div>

            {/* <div className="container">
                <Header />
                <Main />
                <Footer />
            </div> */}
        </>
    );
}
