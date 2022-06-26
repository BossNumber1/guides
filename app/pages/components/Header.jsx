import React from "react";

function Header({ title, subtitle }) {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__title">{title}</div>
                <div
                    className="header__benefit"
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>
            </div>
        </div>
    );
}

export default Header;
