import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Dojos(props) {
    const { t } = useTranslation();
	const [items, setItems] = useState([]);
	const urlPdf = "https://skifb-admin.be/api/CalendarAPI/GetFile?filename=";
  return (
    <div>Dojos</div>
  )
}
