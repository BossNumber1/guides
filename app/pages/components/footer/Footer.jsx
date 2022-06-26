import Link from "next/link";
import { listLinks } from "../../db/listLinks";
import EnumerationIcons from "../common/EnumerationIcons";

function Footer({ numberIconActive }) {
    return (
        <div className="footer">
            <div className="footer__icons">
                {listLinks.map((element) => {
                    return element.map((el) => {
                        return (
                            <EnumerationIcons
                                el={el}
                                numberIconActive={numberIconActive}
                            />
                        );
                    });
                })}
            </div>

            <div className="footer__signature">
                <Link href="https://t.me/moyustimov">
                    Устинов Дмитрий, 2022
                </Link>
            </div>
        </div>
    );
}

export default Footer;
