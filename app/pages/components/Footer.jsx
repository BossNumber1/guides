import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__signature">Устинов Дмитрий, 2022</div>

            <div className="footer__icons">
                <div data-tooltip="Докеризация ReactJS">
                    <img src="https://clck.ru/rcVkw" alt="reactjs icon" />
                </div>
                <div data-tooltip="Докеризация NextJS">
                    <img src="https://clck.ru/rcWhq" alt="nextjs icon" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
