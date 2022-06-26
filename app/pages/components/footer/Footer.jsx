import Link from "next/link";
import { listLinks } from "../../db/listLinks";

function Footer({ numberIconActive }) {
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
            </div>
        </div>
    );
}

export default Footer;
