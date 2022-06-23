import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__signature">Устинов Дмитрий, 2022</div>

            <div className="footer__icons">
                <div
                    data-tooltip="Докеризация ReactJS"
                    className="footer__icon footer__icon_active"
                >
                    <img src="./pictures/iconReactJS.svg" alt="reactjs icon" />
                </div>
                <div data-tooltip="Докеризация NextJS" className="footer__icon">
                    <img src="./pictures/iconNextJS.svg" alt="nextjs icon" />
                </div>
                <div
                    data-tooltip="Докеризация Telegram-бота"
                    className="footer__icon"
                >
                    <img src="./pictures/iconTgBot.svg" alt="telegram icon" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
