import DeclarationHeader from "./DeclarationHeader";
import styles from "../styles/home/home.module.scss";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <DeclarationHeader
                title="Guides"
                keywords="Guides, ReactJS, NextJS, docker, application"
            />

            <div className={styles.container}>
                <div className={styles.container__row}>
                    <div className={styles.container__card}>
                        <Link href="/reacteiner">
                            <img
                                src="./pictures/iconReactJS.svg"
                                alt="reactjs icon"
                            />
                        </Link>
                    </div>
                    <div className={styles.container__card}>
                        <Link href="/nexteiner">
                            <img
                                src="./pictures/iconNextJS.svg"
                                alt="nextjs icon"
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.container__row}>
                    <div className={styles.container__card}>
                        <Link href="/tgboteiner">
                            <img
                                src="./pictures/iconTgBot.svg"
                                alt="telegram icon"
                            />
                        </Link>
                    </div>
                    <div className={styles.container__card}>4</div>
                </div>
            </div>
        </>
    );
}
