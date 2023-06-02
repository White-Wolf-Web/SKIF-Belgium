import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const fetchProvinces = async () => {
	try {
		const response = await fetch("https://skifb-admin.be/api/ProvincesApi/GetProvinces");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Erreur lors de la récupération des provinces", error);
	}
};

export const getProvinceById = (provinces, id) => {
	return provinces.find((province) => province.id === id);
};

export const getProvinceName = (province, language) => {
	switch (language) {
		case "en":
			return province.titleEN;
		case "fr":
			return province.titleFR;
		case "nl":
			return province.titleNL;
		default:
			return province.titleFR;
	}
};

export default function DropdownProvince({ onProvinceSelected }) {
	const { t, i18n } = useTranslation();
	const [selectedProvince, setSelectedProvince] = useState("");
	const [provinces, setProvinces] = useState(null);

	useEffect(() => {
		const getProvinces = async () => {
			const provinceList = await fetchProvinces();
			if (Array.isArray(provinceList)) {
				// Sort the provinces by the English title
				provinceList.sort((a, b) => a.titleEN.localeCompare(b.titleEN));
				setProvinces(provinceList);
			} else {
				console.error("L'API n'a pas renvoyé un tableau");
			}
		};
		getProvinces();
	}, []);

	const handleProvinceSelected = (provinceId) => {
		const selectedProvince = provinces.find((province) => province.id === provinceId);
		if (selectedProvince) {
			setSelectedProvince(getProvinceName(selectedProvince, i18n.language));
			if (onProvinceSelected) {
				onProvinceSelected(provinceId); // Pass the province ID instead of the name
			}
		}
	};

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				{selectedProvince || t("federal_calendar.Select_a_province")}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{provinces &&
					provinces.map((province, index) => (
						<Dropdown.Item
							key={index}
							onClick={() => {
								console.log("Province selected: ", province);
								handleProvinceSelected(province.id);
							}}
						>
							{getProvinceName(province, i18n.language)}
						</Dropdown.Item>
					))}
			</Dropdown.Menu>
		</Dropdown>
	);
}

/*import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const fetchProvinces = async () => {
  try {
    const response = await fetch("https://skifb-admin.be/api/ProvincesApi/GetProvinces");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des provinces", error);
  }
};

export const getProvinceById = (provinces, id) => {
  return provinces.find((province) => province.id === id);
};

export const getProvinceName = (province, language) => {
  switch (language) {
    case "en":
      return province.titleEN;
    case "fr":
      return province.titleFR;
    case "nl":
      return province.titleNL;
    default:
      return province.titleFR;
  }
};

export default function DropdownProvince({ onSelect }) {
  const { i18n } = useTranslation();
  const [selectedProvince, setSelectedProvince] = useState("");
  const [provinces, setProvinces] = useState(null);

  useEffect(() => {
    const getProvinces = async () => {
      const provinceList = await fetchProvinces();
      if (Array.isArray(provinceList)) {
        setProvinces(provinceList);
      } else {
        console.error("L'API n'a pas renvoyé un tableau");
      }
    };
    getProvinces();
  }, []);

  const handleProvinceSelected = (provinceId) => {
    const selectedProvince = provinces.find((province) => province.id === provinceId);
    if (selectedProvince) {
      setSelectedProvince(getProvinceName(selectedProvince, i18n.language));
      if (onSelect) {
        onSelect(provinceId); // Pass the province ID instead of the name
      }
    }
  };

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
                handleProvinceSelected(province.id);
              }}
            >
              {getProvinceName(province, i18n.language)}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
*/
