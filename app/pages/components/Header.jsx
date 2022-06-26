import React from "react";
import Typed from "react-typed";

function Header({ title, subtitle }) {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__title">
                    <Typed strings={[`${title}`]} typeSpeed={50} />
                </div>
                <div
                    className="header__benefit"
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>
            </div>
        </div>
    );
}

export default Header;
