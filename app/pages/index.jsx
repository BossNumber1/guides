import DeclarationHeader from "./DeclarationHeader";
import styles from "../styles/home/home.module.scss";
import { listLinks } from "./db/listLinks";
import EnumerationIcons from "./components/common/EnumerationIcons";
import Typed from "react-typed";

export default function Home() {
    return (
        <>
            <DeclarationHeader
                title="Guides"
                keywords="Guides, ReactJS, NextJS, docker, application"
            />

            <div className={styles.container}>
                <div className={styles.container__title}>
                    <Typed strings={["Гайды"]} typeSpeed={150} />
                </div>
                {listLinks.map((element) => {
                    return (
                        <div className={styles.container__row}>
                            {element.map((el) => {
                                return (
                                    <EnumerationIcons el={el} styles={styles} />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
