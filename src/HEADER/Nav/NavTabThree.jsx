import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
//import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function NavTabThree() {
  const { t } = useTranslation();
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>SKIF-B</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as="div">{t("nav.board")}</Dropdown.Item>
        <Dropdown.Item as="div">{t("nav.statutes")}</Dropdown.Item>
        <Dropdown.Item as="div">{t("footer.legal_notice")}</Dropdown.Item>
        <Dropdown.Item as="div">{t("footer.becoming_a_member")}</Dropdown.Item>
        <Dropdown.Item as="div">
          <Link to="/karatekas">{t("nav.who_s_who")}</Link>
        </Dropdown.Item>
        <Dropdown.Item as="div">
          <Link to="/dojoslist">{t("footer.dojo")}</Link>
        </Dropdown.Item>
        <Dropdown.Item as="div">Google Map</Dropdown.Item>
        <Dropdown.Item as="div">{t("nav.photo_gallery")}</Dropdown.Item>
        <Dropdown.Item as="div">YŪDANSHA KAI</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
