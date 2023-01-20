import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function History() {
    const { t } = useTranslation();
    return (
        <main>
            <div>
                <h1>{t("history.hist_h1")}</h1>
                <br></br>
                <p>{t("history.hist_p1")}</p>
                <p>{t("history.hist_p2")}</p>
                <p>{t("history.hist_p3")}</p>
                <p>{t("history.hist_p4")}</p>
                <p>{t("history.hist_p5")}</p>
                <p>{t("history.hist_p6")}</p>
                <p>{t("history.hist_p7")}</p>
                <p>{t("history.hist_p8")}</p>
                <p>{t("history.hist_p9")}</p>
                <p>{t("history.hist_p10")}</p>
                <p>{t("history.hist_p11")}</p>
            </div>
        </main>
    );
}
