import DeclarationHeader from "./DeclarationHeader";
import styles from "../styles/home/home.module.scss";
import Link from "next/link";
import { listLinks } from "./db/listLinks";

export default function Home() {
    return (
        <>
            <DeclarationHeader
                title="Guides"
                keywords="Guides, ReactJS, NextJS, docker, application"
            />

            <div className={styles.container}>
                <div className={styles.container__title}>Гайды</div>
                {listLinks.map((element) => {
                    return (
                        <div className={styles.container__row}>
                            {element.map((el) => {
                                return (
                                    <div
                                        key={el.index}
                                        className={
                                            el.pathToPage !== ""
                                                ? styles.container__card
                                                : styles.container__defaultCard
                                        }
                                        data-tooltip={el.tooltip && el.tooltip}
                                    >
                                        <Link href={el.pathToPage}>
                                            <img
                                                src={el.iconLink}
                                                alt={el.alt}
                                            />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
