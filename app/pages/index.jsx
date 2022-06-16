import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main/Main";
import DeclarationHeader from "./DeclarationHeader";

export default function Home() {
    return (
        <>
            <DeclarationHeader />

            <Header />
            <Main />
            <Footer />
        </>
    );
}
