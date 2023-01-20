import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";
import NavTabTwo from "./NavTabTwo";
import NavTabThree from "./NavTabThree";
import NavTabFour from "./NavTabFour";
import NavTabFive from "./NavTabFive";
import { useTranslation } from "react-i18next";

import "../../i18n";

export default function Navigation() {
    const { t } = useTranslation();
    return (
        <Nav defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/" key={"nav.home.string"}>
                    {t("nav.home")}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <NavTabTwo eventKey="link-2" />
            </Nav.Item>
            <Nav.Item>
                <NavTabThree eventKey="link-3" />
            </Nav.Item>
            <Nav.Item>
                <NavTabFour eventKey="link4" />
            </Nav.Item>
            <Nav.Item>
                <NavTabFive eventKey="link5" />
            </Nav.Item>
        </Nav>
    );
}
