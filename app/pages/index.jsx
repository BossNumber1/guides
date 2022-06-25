import DeclarationHeader from "./DeclarationHeader";
import styles from "../styles/home/home.module.scss";
import Link from "next/link";

export default function Home() {
    const listLinks = [
        [
            {
                index: 1,
                pathToPage: "/reacteiner",
                iconLink: "./pictures/iconReactJS.svg",
                alt: "reactjs icon",
                tooltip: "Докеризация ReactJS",
            },
            {
                index: 2,
                pathToPage: "/nexteiner",
                iconLink: "./pictures/iconNextJS.svg",
                alt: "nextjs icon",
                tooltip: "Докеризация NextJS",
            },
        ],
        [
            {
                index: 3,
                pathToPage: "/tgboteiner",
                iconLink: "./pictures/iconTgBot.svg",
                alt: "telegram icon",
                tooltip: "Докеризация Telegram-бота",
            },
            {
                index: 4,
                pathToPage: "",
                iconLink: "",
                alt: "",
            },
        ],
    ];

    return (
        <>
            <DeclarationHeader
                title="Guides"
                keywords="Guides, ReactJS, NextJS, docker, application"
            />

            <div className={styles.container}>
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
