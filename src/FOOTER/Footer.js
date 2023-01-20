import React from "react";
import "./Footer.css";
import LogoSkifWorld from "../ASSETS/IMAGES/logo/logoSkif.webp";
import BroderieSkif from "../ASSETS/IMAGES/Broderie/skifBroderie.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ".././i18n";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer id="footer">
            <div className="container">
                <ul className="footer__liens">
                    <li>
                        <a>
                            <i className="fa-solid fa-certificate"></i>
                            {t("footer.becoming_a_member")}
                        </a>
                    </li>
                    <li>
                        <Link to="/calendar">
                            <i className="fa-solid fa-calendar-days"></i>&nbsp;{t("nav.calendar")}
                        </Link>
                    </li>
                    <li>
                        <a>
                            <i className="fa-solid fa-person"></i>
                            {t("footer.space_member")}
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className="fa-solid fa-envelope"></i> Contact
                        </a>
                    </li>
                    <li>
                        <Link to="/dojoslist">
                            <i className="fa-solid fa-dungeon"></i>&nbsp;Dojos
                        </Link>
                    </li>
                    <li>
                        <a>
                            <i className="fa-solid fa-camera"></i>
                            {t("footer.photo")}
                        </a>
                    </li>
                    <li>
                        <Link to="/terms">
                            <i className="fa-solid fa-file"></i>
                            {t("footer.conditions")}
                        </Link>
                    </li>
                </ul>
                <div className="broderieSociale">
                    <img
                        src={BroderieSkif}
                        alt="Broderie que l'on retrouve sur les kimonos de karaté skif"
                        className="skifBroderie"
                    />
                    <ul className="icons">
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="logoSkifWorld">
                    <img src={LogoSkifWorld} alt="logo Skif world basé au Japon" />
                </div>
            </div>
        </footer>
    );
}
