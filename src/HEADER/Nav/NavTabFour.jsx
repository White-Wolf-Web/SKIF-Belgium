import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useTranslation } from "react-i18next";

import "../../i18n";

export default function NavTabFour() {
    const { t } = useTranslation();
    return (
        <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>{t("nav.administration")}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>{t("nav.document")}</Dropdown.Item>
                <Dropdown.Item>Axa</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
