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
			<Dropdown.Item as="div" onClick={() => handleDocumentDownload("id1")}>{t("nav.technical_regulations")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("id2")}>{t("nav.grading_syllabus")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("id3")}>{t("nav.dan_examination_request_form")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("id4")}>{t("nav.important_points")}</Dropdown.Item>
				<Dropdown.Item onClick={() => handleDocumentDownload("id5")}>Dojo Kun</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("id6")}>{t("nav.insurance_accident_report")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("da04b5b8-32e1-4eb5-97f6-e000b047e656&&versionFile=EN")}>{t("footer.privacy_policy")}</Dropdown.Item>
				<Dropdown.Item as="div" onClick={() => handleDocumentDownload("id8")}>{t("footer.conditions")}</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
