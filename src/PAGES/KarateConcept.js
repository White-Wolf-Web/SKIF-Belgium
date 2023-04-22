import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import "./Pages.css"
//import BackToLine from "../COMPOSANTS/BackToLine";

export default function KarateConcept() {
    const { t } = useTranslation();
  return (
<main>
    
    <div className="p-reduit">
<h1 className="p-margin-bottom3">{t("karate_concept.concept_h1")}</h1>
<br />
<p className="p-margin-bottom3">{t("karate_concept.concept_p1")}</p>
<p className="p-margin-bottom3">{t("karate_concept.concept_p1bis")}</p>
<p className="p-margin-bottom3">{t("karate_concept.concept_p1ter")}</p>

<p className="p-margin-bottom3">{t("karate_concept.concept_p2")}</p>
<p className="p-margin-bottom3">{t("karate_concept.concept_p3")}</p>
<p>{t("karate_concept.concept_p4")}</p>

<p className="text-center p-margin-bottom5"><strong>{t("karate_concept.concept_p5")}</strong></p>

<p className="p-margin-bottom3"><strong>{t("karate_concept.concept_p6")}</strong>{t("karate_concept.concept_p6bis")}</p>
<p className="p-margin-bottom3">{t("karate_concept.concept_p6ter")}</p>
<p>{t("karate_concept.concept_p6quater")}</p>

<p className="p-margin-bottom3"><strong>{t("karate_concept.concept_p7")}</strong>{t("karate_concept.concept_p7bis")}</p>
<p className="p-margin-bottom5">{t("karate_concept.concept_p7ter")}</p>

<p className="p-margin-bottom3">{t("karate_concept.concept_p8")}<strong>{t("karate_concept.concept_p8bis")}</strong>{t("karate_concept.concept_p8ter")}</p>
<p className="p-margin-bottom8">{t("karate_concept.concept_p8quater")}</p>

<ul className="ul-reduit">
  <li>{t("karate_concept.concept_p9")}</li>
  <li>{t("karate_concept.concept_p9bis")}</li>
  <li>{t("karate_concept.concept_p9ter")}</li>
  <li>{t("karate_concept.concept_p9quater")}</li>
</ul>

<p className="p-margin-bottom3">{t("karate_concept.concept_p10")}</p>
<p className="p-margin-bottom3">{t("karate_concept.concept_p10bis")}</p>
<p className="p-margin-bottom3"><strong>{t("karate_concept.concept_p10ter")}</strong></p>
<p className="p-margin-bottom3">{t("karate_concept.concept_p10quater")}</p>
<p className="p-margin-bottom3"><strong>{t("karate_concept.concept_p10quinquies")}</strong></p>
<p>{t("karate_concept.concept_p10sexies")}</p>

<p className="p-margin-bottom3">{t("karate_concept.concept_p11")}</p>
<p className="p-margin-bottom3"><strong>{t("karate_concept.concept_p11bis")}</strong></p>
<p>{t("karate_concept.concept_p11ter")}</p>

<p className="p-margin-bottom3"><strong>{t("karate_concept.concept_p12")}</strong>{t("karate_concept.concept_p12bis")}</p>
<p className="p-margin-bottom8">{t("karate_concept.concept_p12ter")}</p>

<p className="p-margin-bottom8">{t("karate_concept.concept_p13")}</p>
<p>{t("karate_concept.concept_p14")}</p>

<p className="p-margin-bottom3">{t("karate_concept.concept_p15")}</p>
<ul className="ul-reduit p-margin-bottom8">
  <li>
    <strong>{t("karate_concept.concept_p15bis")}</strong>
    {t("karate_concept.concept_p15bisBis")}
  </li>
  <li>
    <strong>{t("karate_concept.concept_p15ter")}</strong>
    {t("karate_concept.concept_p15terBis")}
  </li>
  <li>
    <strong>{t("karate_concept.concept_p15quater")}</strong>
    {t("karate_concept.concept_p15quaterBis")}
  </li>
  <li>
    <strong>{t("karate_concept.concept_p15quinquies")}</strong>
    {t("karate_concept.concept_p15quinquiesBis")}
  </li>
  <li>
    <strong>{t("karate_concept.concept_p15sexies")}</strong>
    {t("karate_concept.concept_p15sexiesBis")}
  </li>
  <li>
    <strong>{t("karate_concept.concept_p15septies")}</strong>
    {t("karate_concept.concept_p15septiesBis")}
  </li>
</ul>

<ul className="ul-reduit">
  <li>
  <strong>{t("karate_concept.concept_p16")}</strong>
    <em>{t("karate_concept.concept_p16bis")}</em>
  </li>
  <li>
    <strong>{t("karate_concept.concept_p16ter")}</strong>
    {t("karate_concept.concept_p16terBis")}
  </li>
  <li>
    <strong>{t("karate_concept.concept_p16quater")}</strong>
    {t("karate_concept.concept_p16quaterBis")}
  </li>
</ul>

<p className="p-margin-bottom3"><strong>{t("karate_concept.concept_p17")}</strong></p>
<p className="p-margin-bottom5">{t("karate_concept.concept_p18")}</p>
<p>{t("karate_concept.concept_p19")}</p>
    </div></main>
  )
}
