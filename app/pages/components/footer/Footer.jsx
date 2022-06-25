import React from "react";

function Footer({ numberIconActive }) {
    return (
        <div className="footer">
            <div className="footer__signature">Устинов Дмитрий, 2022</div>

            <div className="footer__icons">
                <div
                    data-tooltip="Докеризация ReactJS"
                    className={
                        +numberIconActive === 0
                            ? "footer__icon footer__icon_active"
                            : "footer__icon"
                    }
                >
                    <img src="./pictures/iconReactJS.svg" alt="reactjs icon" />
                </div>
                <div
                    data-tooltip="Докеризация NextJS"
                    className={
                        +numberIconActive === 1
                            ? "footer__icon footer__icon_active"
                            : "footer__icon"
                    }
                >
                    <img src="./pictures/iconNextJS.svg" alt="nextjs icon" />
                </div>
                <div
                    data-tooltip="Докеризация Telegram-бота"
                    className={
                        +numberIconActive === 2
                            ? "footer__icon footer__icon_active"
                            : "footer__icon"
                    }
                >
                    <img src="./pictures/iconTgBot.svg" alt="telegram icon" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
