import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";
import NavTabTwo from "./NavTabTwo";
import NavTabThree from "./NavTabThree";
import NavTabFour from "./NavTabFour";
import NavTabFive from "./NavTabFive";
import NavTabSix from "./NavTabSix";
import NavTabSeven from "./NavTabSeven";
import { useTranslation } from "react-i18next";

import "../../i18n";


export default function Navigation() {
    const { t } = useTranslation();
    return (
        <Nav defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/" key={"nav.home.string"}>
                <i className="fa-solid fa-house-chimney"></i>
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
            <Nav.Item>
                <NavTabSix eventKey="link6" />
            </Nav.Item>
            <Nav.Item>
                <NavTabSeven eventKey="link7" />
            </Nav.Item>
        </Nav>
    );
}
