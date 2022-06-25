import React from "react";
import styles from "../../styles/not_found_page/not_found_page.module.scss";

function NotFoundPage() {
    return (
        <div className={styles.container}>
            <div className={styles.container_logo}>
                <img
                    src="./pictures/not_found.jpeg"
                    alt="not found logo"
                    width="303px"
                    height="410px"
                />
            </div>

            <div className={styles.container__description}>
                <div>Такой страницы нет</div>
                <div>
                    Скорее всего, она в разработке. Через 5 секунд верну тебя на
                    главную.
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
