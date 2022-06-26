import Link from "next/link";

function Footer({ numberIconActive }) {
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
        <div className="footer">
            <div className="footer__signature">Устинов Дмитрий, 2022</div>

            <div className="footer__icons">
                {listLinks.map((element) => {
                    return element.map((el) => {
                        return (
                            <div
                                data-tooltip={el.tooltip}
                                className={
                                    +numberIconActive === el.index - 1
                                        ? "footer__icon footer__icon_active"
                                        : "footer__icon"
                                }
                            >
                                <Link href={el.pathToPage}>
                                    <img src={el.iconLink} alt={el.alt} />
                                </Link>
                            </div>
                        );
                    });
                })}

                {/* <div
                    data-tooltip="Докеризация ReactJS"
                    className={
                        +numberIconActive === 0
                            ? "footer__icon footer__icon_active"
                            : "footer__icon"
                    }
                >
                    <Link href={el.pathToPage}>
                        <img
                            src="./pictures/iconReactJS.svg"
                            alt="reactjs icon"
                        />
                    </Link>
                </div>
                <div
                    data-tooltip="Докеризация NextJS"
                    className={
                        +numberIconActive === 1
                            ? "footer__icon footer__icon_active"
                            : "footer__icon"
                    }
                >
                    <Link href={el.pathToPage}>
                        <img
                            src="./pictures/iconNextJS.svg"
                            alt="nextjs icon"
                        />
                    </Link>
                </div>
                <div
                    data-tooltip="Докеризация Telegram-бота"
                    className={
                        +numberIconActive === 2
                            ? "footer__icon footer__icon_active"
                            : "footer__icon"
                    }
                >
                    <Link href={el.pathToPage}>
                        <img
                            src="./pictures/iconTgBot.svg"
                            alt="telegram icon"
                        />
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;
