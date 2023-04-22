import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../../i18n";

export default function NavTabSix() {
  const { t } = useTranslation();
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>{t("nav.refereeing")}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as="div">
          <Link
            to="/referees"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {t("nav.referee")}
          </Link>
        </Dropdown.Item>
        <Dropdown.Item as="div">{t("nav.rules")}</Dropdown.Item>
        <Dropdown.Item as="div">{t("nav.score_sheet")}</Dropdown.Item>
        <Dropdown.Item as="div">{t("nav.referee_gestures")}</Dropdown.Item>
        <Dropdown.Item as="div">{t("nav.referee_comittee")}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
