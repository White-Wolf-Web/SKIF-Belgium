import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Link } from "react-router-dom";

export default function NavTabTwo() {
    const { t } = useTranslation();
    return (
        <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>SKIF</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><Link to="/history">{t("nav.history")}</Link></Dropdown.Item>
                <Dropdown.Item>{t("nav.concept")}</Dropdown.Item>
                <Dropdown.Item>Kanazawa Soké</Dropdown.Item>
                <Dropdown.Item>Kanazawa Kancho</Dropdown.Item>
                <Dropdown.Item>Murakami Manabu</Dropdown.Item>
                <Dropdown.Item>SKIEF</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
