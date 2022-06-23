import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Main from "./components/main/Main";
import DeclarationHeader from "./DeclarationHeader";

export default function Home() {
    return (
        <>
            <DeclarationHeader />

            <div className="container">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}
