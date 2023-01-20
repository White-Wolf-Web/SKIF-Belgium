import React from "react";
import { useTranslation } from "react-i18next";
import NextEvent from "../NextEvent/NextEvent";
import "../../i18n";
import "./Home.css";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <main>
                {" "}
                <h1 className="homeH1">{t("home.title")}</h1>
                <div>
                    <section>
                        <h2>{t("home.section1_h2")}</h2>
                        <p>{t("home.section1_text")}</p>
                    </section>
                    <section>
                        <h2>{t("home.section2_h2")}</h2>
                        <p>{t("home.section2_text")}</p>
                    </section>
                    <section>
                        <h2>{t("home.section3_h2")}</h2>
                        <p>{t("home.section3_text")}</p>
                    </section>
                    <section>
                        <h2>{t("home.section4_h2")}</h2>
                        <p>{t("home.section4_text")}</p>
                    </section>
                </div>
                <>
                    <NextEvent />
                    <p className="japaneseKanjiSkifb">國 際 松 濤 館 空 手 道 ベ ル ギ ー 連 盟</p>
                </>
            </main>
        </div>
    );
}
