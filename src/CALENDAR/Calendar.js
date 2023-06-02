import "./Calendar.css";
import Accordion from "react-bootstrap/Accordion";
import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
//import CalendarPoster from "./CalendarPoster";
import CalendarPdf from "./CalendarPdf";
import "../i18n";
import FilterContainer from "./CalendarFilter";
import Loader from "../UTILS/Loader.js";

export default function Calendar(props) {
	const { t } = useTranslation();
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const urlPdf = "https://skifb-admin.be/api/CalendarAPI/GetFile?filename=";

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendar");
				const data = await response.json();
				setItems(data);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		}
		fetchData();
	}, []);
	// TRI
	const [selectedClub, setSelectedClub] = useState(null);
	const [selectedProvince, setSelectedProvince] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleClubSelected = (club) => {
		console.log("Club selected: ", club);
		setSelectedClub(club);
	};

	const handleProvinceSelected = (province) => {
		console.log("Province selected: ", province);
		setSelectedProvince(province);
	};

	const handleCategorySelected = (categoryId) => {
		console.log("Category ID selected: ", categoryId);
		setSelectedCategory(categoryId);
	};

	const filteredItems = useMemo(() => {
		let result = [...items];

		if (selectedClub) {
			result = result.filter((item) => item.club === selectedClub);
		}

		const PROVINCE_ID_MAP = {
			"Brussels-Capital": "4e65bd5b-6bcf-4858-9a4b-ca668bbad2b5",
			"Province of Antwerp": "f87c2b0f-a669-4985-96e4-31c009f354ae",
			"Province of East Flanders": "c4ed0cb5-4f4c-4949-88cd-64be0d4476eb",
			"Province of Flemish Brabant": "fc2afe13-f5eb-40e6-9a01-ee96ef0151da",
			"Province of Hainaut": "983d7275-fc4a-4632-8160-c2557d171b56",
			"Province of Liège": "c1b2f9ed-fc16-460c-8775-72ea996d7dea",
			"Province of Limburg": "16894587-855b-4f58-92a6-50d31dc65ea5",
			"Province of Luxembourg": "41434975-2f9a-4ac6-8098-8c2a2add8995",
			"Province of Namur": "cf51f89f-a9a4-453f-a6fe-3dfb168f5e2a",
			"Province of Wallon Brabant": "3c857301-4185-469d-bfa5-e3b08481f497",
			"Province of West Flanders": "9de336db-239b-4b04-8d40-2cca042a6096",
		};

		if (selectedProvince) {
			console.log("Province sélectionnée: ", selectedProvince); // Pour le débogage
			result = result.filter((item) => {
				const itemProvinceId = PROVINCE_ID_MAP[item.addressProvince];
				console.log("Province de l'item: ", itemProvinceId); // Pour le débogage
				return itemProvinceId === selectedProvince;
			});
		}

		const CATEGORY_ID_MAP = {
			"Examination 1st Kyu and Dan": "b699ab21-6c1f-4f35-96e2-df5f8f58fbbc",
			"Instructor's Training": "e6083ff1-3124-49a4-84f6-c4ddc0011160",
			"Internal Meeting": "60944d9e-fdec-4246-b75e-25df5b7d0204",
			"International event (competition, training)": "e392d733-c6f4-4b9f-a73c-e151829eb9c6",
			"National Competition": "16f5d902-31fe-4d00-8958-d861078e105d",
			"National Team Training": "6eb3c483-4d4f-43da-a98d-c415c0543072",
			"National Training": "f7c7d08d-caad-4392-a370-0c7154a7a2dd",
			"Referee Training": "e1b79464-e440-45c8-ac68-b62605783e47",
		};

		// Puis dans votre filtre :
		if (selectedCategory) {
			console.log("Catégorie sélectionnée: ", selectedCategory); // Pour le débogage
			result = result.filter((item) => {
				const itemCategoryId = CATEGORY_ID_MAP[item.category];
				console.log("Item: ", item); // Pour le débogage
				console.log("Catégorie de l'item: ", itemCategoryId); // Pour le débogage
				return itemCategoryId === selectedCategory;
			});
		}

		return result;
	}, [items, selectedClub, selectedProvince, selectedCategory]);

	console.log("Filtered items: ", filteredItems);

	return (
		<main>
			<h1>{t("federal_calendar.h1")}</h1>
			<FilterContainer onClubSelected={handleClubSelected} onProvinceSelected={handleProvinceSelected} onCategorySelected={handleCategorySelected} />
			<div className="calendarReact">
				{loading ? (
					<Loader />
				) : (
					<div className="calendarAccordion">
						{filteredItems.map((item) => (
							<Accordion defaultActiveKey="false" key={item.id} flush>
								<Accordion.Item eventKey="0">
									<Accordion.Header>
										<div className="calendar-accordion-header">
											<div> {item.startDay + "/" + item.startMonth + "/" + item.startYear} </div>
											<div>
												{" "}
												<span className="breaking-space"></span> {item.title}
											</div>
										</div>
									</Accordion.Header>
									<Accordion.Body className="calendarBody">
										<div className="calendarCardText">
											<div>
												{t("federal_calendar.timetable")} {item.startHours} {t("federal_calendar.to")} {item.endHours + "."}
											</div>
											<div>
												{t("federal_calendar.location")} {item.club}
											</div>
											<div>
												{t("federal_calendar.adress")} {item.addressStreet} {item.addressNumber + ","} {item.addressCity} {item.addressPostalCode}{" "}
											</div>
											<div className="br">
												{"Province:"} {item.addressProvince} &emsp; {item.addressCountry}
											</div>

											<div>
												{" "}
												{t("federal_calendar.contact")}
												{item.contact}
											</div>
											<div className="br">
												{" "}
												{t("federal_calendar.mail")}
												{item.email}
											</div>
											<div>
												<div className="br">{item.price}</div>
											</div>

											<div>{item.description}</div>
										</div>

										<CalendarPdf linkPdf={urlPdf + item.linkPdf} coverImage={item.coverImage} />
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						))}
					</div>
				)}
			</div>
		</main>
	);
}
