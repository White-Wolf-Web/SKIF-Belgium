import React from "react";
import "./Karatekas.css";
import { useParams } from "react-router-dom";
import karatekasData from "../DATAS/karatekasData";
//import KaratekaAdress from "./KaratekaAdress";
import CarrouselKarateka from "../CAROUSEL/CarrouselKarateka";
//import KaratekaContainer from "./KaratekaContainer";
import "../i18n";
import { useTranslation } from "react-i18next";

export default function Karateka(props) {
	const { t } = useTranslation();
	const { id } = useParams();
	const karatekaId = karatekasData.findIndex((obj) => obj.id === id);
	console.log(karatekaId);
    //const karatekaClub = karatekasData[karatekaId].club;
	//const karatekaAllInfo = karatekasData[karatekaId];
	const karatekaAddress = karatekasData[karatekaId].address;
	//const karatekaContact = karatekasData[karatekaId].contact;
	const karatekaInfo = karatekasData[karatekaId].karateka;
	//const karatekaSocialNetwork = karatekasData[karatekaId].socialNetwork;
	//const karatekaCompetition = karatekasData[karatekaId].competition;
	//const karatekaFamily = karatekasData[karatekaId].family;
	//const karatekaCover = karatekasData[karatekaId].cover;
	//const karatekaPictures = karatekasData[karatekaId].pictures;
	const karatekaReferee = karatekasData[karatekaId].referee;

	return (
		<main>
			<h1>{karatekaInfo.name}</h1>
			<CarrouselKarateka />
			<div className="karateka-info-container">
            <p>{`Grade ${karatekaInfo.rank}`}</p>
            <p>{karatekaInfo.skifPosition}</p>
            <p>{karatekaInfo.position} {" - "} {karatekaAddress[0].city}</p>
            <h2>{t("karateka.referee")}</h2>
            <p>{t("karateka.internationalLicenceKata")}  &ensp; {karatekaReferee.internationalLicenceKata}</p>
            <p> {t("karateka.internationalLicenceKumite")} &ensp; {karatekaReferee.internationalLicenceKumite}</p> 
            <p>{t("karateka.nationalLevel") } &ensp; {karatekaReferee.nationalLevel}</p>
            <p>{karatekaReferee.addComment}</p>
            
			</div>
		</main>
	);
}
