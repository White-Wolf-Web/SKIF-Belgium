import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const fetchProvinces = async () => {
	try {
		const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GettNextEventsByProvince");
		const data = await response.json();
		const provinceNames = data.map((province) => province.title);
		return provinceNames;
	} catch (error) {
		console.error("Erreur lors de la récupération des provinces", error);
	}
};

export default function DropdownProvince() {
	const [selectedProvince, setSelectedProvince] = useState("");
	const [provinces, setProvinces] = useState(null);

	useEffect(() => {
		const getProvinces = async () => {
			const clubList = await fetchProvinces();
			if (Array.isArray(clubList)) {
				setProvinces(clubList);
			} else {
				console.error("L'API n'a pas renvoyé un tableau");
			}
		};
		getProvinces();
	}, []);

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				{selectedProvince || "Sélectionnez une province"}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{provinces &&
					provinces.map((province, index) => (
						<Dropdown.Item
							key={index}
							onClick={() => {
								setSelectedProvince(province);
							}}
						>
							{province}
						</Dropdown.Item>
					))}
			</Dropdown.Menu>
		</Dropdown>
	);
}
