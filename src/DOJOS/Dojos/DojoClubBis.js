import React, { useState, useEffect } from "react";
import "./DojoClub.css";
//import { useParams } from "react-router-dom";
//import DojoData from "../../DATAS/DojoData";
import CarrouselBis from "../../CAROUSEL/CarrouselBis";
import DojoAllInstructorsBis from "./DojoAllInstructorsBis";
import { useFetchClub } from "../../UTILS/useFetchClub";
//import DojoSchedules from "./DojoSchedules";
//import DojoContact from "./DojoContact";
//import DojoAdress from "./DojoAdress";*/
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function DojoClubBis(props) {
	//const { t } = useTranslation();
	//const { clubId } = useParams();
	//const dojoClub = DojoData.findIndex((obj) => obj.id === id);
	//const address = DojoData[dojoClub].address;
	//const contact = DojoData[dojoClub].contact;
	//const schedules = DojoData[dojoClub].schedules;
	const { t } = useTranslation();
	//const url = "https://skifb-admin.be/api/ClubsAPI/GetClubDetails?Id=DC648F09-903A-4104-9221-1E3E951C0D09";
    const url = "https://skifb-admin.be/api/ClubsAPI/GetClubDetails?Id=22fe7966-7cc8-4002-aeaa-43756a3f5fd6";
	const { data: items, isLoading, error } = useFetchClub(url);
	//const lang = language.toUpperCase();
	//const url = `https://skifb-admin.be/api/ClubsAPI/GetClubDetails?Id=${clubId}&&versionFile=${lang}`;
    
	if (isLoading) {
		return "Loading...";
	}

	if (error) {
		return `An error occurred: ${error.message}`;
	}

	return (
		<main>
			<div>
				{items.map((item) => (
					<h1 key={item.id}>{item.titleEN}</h1>
				))}
			</div>

			<div>
				{" "}
				<CarrouselBis />
			</div>
			<DojoAllInstructorsBis />

			<div>
				<h2>{t("words.schedule")}</h2>
				<div className="dojoShedulesBis">
					{items.map((item) => (
						<div key={item.id}> {item.descriptionFR}</div>
					))}
				</div>
			</div>
			<div>
				<h2>{t("words.contact")}</h2>

				<div className="dojoContactBis">
					{items.map((item) => (
						<div key={item + 104 + item.toString()}>
							{" "}
							<i className="fa-solid fa-at"></i>&ensp; {item.email} <br></br>
							<i className="fa-solid fa-phone"></i> &ensp; {item.phone}
							<br></br>
							<i className="fa-solid fa-globe"></i> &ensp; {item.webSite}
						</div>
					))}
				</div>
			</div>

			<div>
				<h2>{t("words.adress")}</h2>
				<div className="dojoAdressCardBis">
					{items.map((item) => (
						<div key={item.street + item.postCode + 9}>
							{item.addressStreet} <br></br>
							{item.addressPostalCode} &ensp;
							{item.addressCity}
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
