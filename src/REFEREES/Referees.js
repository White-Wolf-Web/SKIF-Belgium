import React, { useState, useEffect } from "react";
import "./Referees.css";
import { useTranslation } from "react-i18next";
import ".././i18n";

export default function Referees() {
	const { t } = useTranslation();

	const [items, setItems] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("https://skifb-admin.be/api/RefereesApi/GetReferees");
				const data = await response.json();
				setItems(data);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);
	return (
		<main>
		<h1>{t("referees.referee")}</h1>
			<table className="table table-striped table-dark table-hover">
				<thead>
					<tr>
						<th scope="col">{t("referees.firstName")}</th>
						<th scope="col">{t("referees.lastName")}</th>
						<th scope="col" className="col-dojo">
							{t("referees.dojo")}
						</th>
						<th scope="col" className="referee-level">
							{t("referees.nationalLevel")}
						</th>
						<th scope="col" className="referee-level">
							{t("referees.internationalLicenceKata")}
						</th>
						<th scope="col" className="referee-level">
							{t("referees.internationalLicenseKumite")}
						</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item.id}>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td className="col-dojo">{item.dojo}</td>
							<td className="referee-center">{item.nationalLevel}</td>
							<td className="referee-center">{item.kataLevel}</td>
							<td className="referee-center">{item.kumiteLevel}</td>
						</tr>
					))}
				</tbody>
			</table>
			<p className="referee-asterix">* &ensp;{t("referees.1asterix")}</p>
			<p className="referee-asterix">**&ensp;{t("referees.2asterix")}</p>
		</main>
	);
}
