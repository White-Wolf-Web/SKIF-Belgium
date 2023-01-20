import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function TermsConditions() {
    const { t } = useTranslation();
    return (
        <main>
            <div>
                <h1>{t("termsconditions.terms_h1")}</h1>
                <br></br>
                <h2>{t("termsconditions.terms_h2_1")}</h2>
                <p>{t("termsconditions.terms_p_1_1")}</p>
                <p>{t("termsconditions.terms_p_1_2")}</p>
                <p>{t("termsconditions.terms_p_1_3")}</p>
                <p>{t("termsconditions.terms_p_1_4")}</p>
                <p>{t("termsconditions.terms_p_1_5")}</p>
                <br></br>
                <h2>{t("termsconditions.terms_h2_2")}</h2>
                <p>{t("termsconditions.terms_p_2_1")}</p>
                <p>{t("termsconditions.terms_p_2_2")}</p>
                <br></br>
                <h2>{t("termsconditions.terms_h2_3")}</h2>
                <p>{t("termsconditions.terms_p_3_1")}</p>
                <p>{t("termsconditions.terms_p_3_2")}</p>
                <p>{t("termsconditions.terms_p_3_3")}</p>
                <p>{t("termsconditions.terms_p_3_4")}</p>
                <p>{t("termsconditions.terms_p_3_5")}</p>
                <p>{t("termsconditions.terms_p_3_6")}</p>
                <p>{t("termsconditions.terms_p_3_7")}</p>
                <br></br>
                <h2>{t("termsconditions.terms_h2_4")}</h2>
                <p>{t("termsconditions.terms_p_4_1")}</p>
            </div>
        </main>
    );
}
