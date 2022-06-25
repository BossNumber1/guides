import React from "react";

function Header({ title }) {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__title">{title}</div>
                <div className="header__benefit">
                    <b>Вместо часа</b> с лишним разбора английского видео{" "}
                    <b>несколько минут</b> выжимки на русском
                </div>
            </div>
        </div>
    );
}

export default Header;
