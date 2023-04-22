import React from "react";
//import Dropdown from "react-bootstrap/Dropdown";
//import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../i18n";

export default function NavTabFour() {
    const { t } = useTranslation();
  return (
    <div  ><Link className="nav-no-dropdown" to="/calendar">{t("nav.calendar")}</Link></div>
  )
}
