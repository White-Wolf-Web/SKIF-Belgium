import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useTranslation } from "react-i18next";

import "../../i18n";

export default function NavTabFive() {
	const { t, i18n } = useTranslation();

	
	const handleDocumentDownload = async (documentId) => {
		try {
		  const lang = i18n.language.toUpperCase();
		  const response = await fetch(
			`https://skifb-admin.be/api/DocumentsApi/DownloadDocument?id=${documentId}&&versionFile=${lang}`
		  );
		  const data = await response.blob();
		  const url = window.URL.createObjectURL(data);
		  const link = document.createElement("a");
		  link.href = url;
		  link.setAttribute("download", `document_${documentId}.pdf`);
		  document.body.appendChild(link);
		  link.click();
		  link.parentNode.removeChild(link);
		} catch (error) {
		  console.error("Erreur lors du téléchargement du document:", error);
		}
	  };
	

	return (
		<Dropdown as={NavItem}>
			<Dropdown.Toggle as={NavLink}>{t("nav.document")}</Dropdown.Toggle>
			<Dropdown.Menu>
			<Dropdown.Item     as="div" onClick={() => handleDocumentDownload("7b5891f0-6ea7-404a-80a9-dbb6bb8c40de")}>{t("nav.technical_regulations")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("caa83c35-b53f-434f-8fd8-0e63c637a16e")}>{t("nav.grading_syllabus")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("c8a6f661-e9ee-4ed1-91b4-85cfff623960")}>{t("nav.dan_examination_request_form")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("5ffb4d0b-9e2f-4678-992f-812f3eceadd5")}>{t("nav.important_points")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("d85e1994-9fda-4e75-8201-d8c00f8c9536")}>Dojo Kun</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("ffc1cc8a-1d24-450f-9b46-dfe40db5608d")}>{t("nav.insurance_accident_report")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("c0b4a7ef-6f9d-4ec8-905e-1a08722198a2")}>{t("footer.privacy_policy")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("da04b5b8-32e1-4eb5-97f6-e000b047e656")}>{t("footer.conditions")}</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
