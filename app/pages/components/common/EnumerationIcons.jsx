import React from "react";
import Link from "next/link";

function EnumerationIcons({ el, numberIconActive, styles }) {
    return (
        <div
            key={el.index}
            data-tooltip={el.tooltip && el.tooltip}
            className={
                numberIconActive
                    ? +numberIconActive === el.index - 1
                        ? "footer__icon footer__icon_active"
                        : "footer__icon"
                    : el.pathToPage !== ""
                    ? styles.container__card
                    : styles.container__defaultCard
            }
        >
            <ShowIcon el={el} />
        </div>
    );
}

function ShowIcon({ el }) {
    return (
        <Link href={el.pathToPage}>
            <img src={el.iconLink} alt={el.alt} />
        </Link>
    );
}

export default EnumerationIcons;
