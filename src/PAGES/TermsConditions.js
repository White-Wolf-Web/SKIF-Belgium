import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import "./Pages.css";

export default function TermsConditions() {
	const { t, i18n } = useTranslation();

	const downloadURL = `https://skifb-admin.be/api/DocumentsApi/DownloadDocument?Id=da04b5b8-32e1-4eb5-97f6-e000b047e656&&versionFile=${i18n.language.toUpperCase()}`;
	return (
		<main>
			<div>
				<h1>{t("termsconditions.terms_h1")}</h1>

				<h2>{t("termsconditions.terms_h2_1")}</h2>
				<br />
				<p className="aLaLigneFaibleMarge">{t("termsconditions.terms_p_1_1")}</p>
				<p>
					{t("termsconditions.terms_p_1_2")} <br /> {t("termsconditions.terms_p_1_3")} <br /> {t("termsconditions.terms_p_1_4")} <br />{" "}
					{t("termsconditions.terms_p_1_5")}
				</p>

				<h2>{t("termsconditions.terms_h2_2")}</h2>
				<p className="aLaLigneFaibleMarge">{t("termsconditions.terms_p_2_1")} </p>
				<p>{t("termsconditions.terms_p_2_2")}</p>

				<h2>{t("termsconditions.terms_h2_3")}</h2>
				<p className="aLaLigneFaibleMarge">{t("termsconditions.terms_p_3_1")}</p>
				<p className="aLaLigneFaibleMarge">{t("termsconditions.terms_p_3_2")}</p>
				<p className="aLaLigneFaibleMarge">{t("termsconditions.terms_p_3_3")}</p>
				<p className="aLaLigneFaibleMarge">{t("termsconditions.terms_p_3_4")}</p>
				<p className="aLaLigneFaibleMarge">{t("termsconditions.terms_p_3_5")}</p>
				<p className="aLaLigneFaibleMarge">{t("termsconditions.terms_p_3_6")}</p>
				<p>{t("termsconditions.terms_p_3_7")}</p>
				<br />
				<h2>{t("termsconditions.terms_h2_4")}</h2>
				<p>{t("termsconditions.terms_p_4_1")}</p>
			</div>
			<div>
				<div className="button-container">
					<a className="download-button" href={downloadURL}>
						{t("termsconditions.download_button")}
					</a>
				</div>
			</div>
		</main>
	);
}
