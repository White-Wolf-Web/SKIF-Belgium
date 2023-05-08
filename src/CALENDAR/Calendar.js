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

const handleClubSelected = (club) => {
  setSelectedClub(club);
};

const handleProvinceSelected = (province) => {
  setSelectedProvince(province);
};

const filteredItems = useMemo(() => {
  let result = items;

  if (selectedClub) {
	result = result.filter((item) => item.club === selectedClub);
  }

  if (selectedProvince) {
	result = result.filter((item) => item.addressProvince === selectedProvince);
  }

  return result;
}, [items, selectedClub, selectedProvince]);


	return (
		<main>
			<h1>{t("federal_calendar.h1")}</h1>
			<FilterContainer onClubSelected={handleClubSelected} onProvinceSelected={handleProvinceSelected} />
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
