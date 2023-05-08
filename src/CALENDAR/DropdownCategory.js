import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const fetchCategories = async () => {
	try {
		const response = await fetch("https://skifb-admin.be/api/CategoriesAPI/GetCategories");
		const data = await response.json();
		console.log("le fetch passe");
		return data;
	} catch (error) {
		console.error("Erreur lors de la récupération des catégories:", error);
	}
};


export default function DropdownCategory({ onCategorySelected }) {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [categories, setCategories] = useState(null);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		const getCategories = async () => {
			const categoryList = await fetchCategories();
			if (Array.isArray(categoryList)) {
				setCategories(categoryList);
			} else {
				console.error("L'API n'a pas renvoyé un tableau");
			}
		};
		getCategories();
	}, []);

	const getCategoryTitle = (category) => {
		const language = i18n.language;
		switch (language) {
			case "en":
				return category.titleEN;
			case "fr":
				return category.titleFR;
			case "nl":
				return category.titleNL;
			default:
				return category.titleFR;
		}
	};

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				{selectedCategory || t("Sélectionnez une catégorie")}
			</Dropdown.Toggle>

			<Dropdown.Menu>
      {categories &&
	categories.map((category, index) => (
		<Dropdown.Item
			key={index}
			onClick={() => {
				setSelectedCategory(getCategoryTitle(category));
				if (onCategorySelected) {
					onCategorySelected(category.id);
				}
			}}
		>
			{getCategoryTitle(category)}
		</Dropdown.Item>
	))}
			</Dropdown.Menu>
		</Dropdown>
	);
}

/*import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const fetchCategories = async () => {
  try {
    const response = await fetch("https://skifb-admin.be/api/CategoriesAPI/GetCategories");
    const data = await response.json();
    console.log("le fetch passe");
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
  }
};

export default function DropdownCategory({ onCategorySelected }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await fetchCategories();
      if (Array.isArray(categoryList)) {
        setCategories(categoryList);
      } else {
        console.error("L'API n'a pas renvoyé un tableau");
      }
    };
    getCategories();
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedCategory || "Sélectionnez une catégorie"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {categories &&
          categories.map((category, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => {
                setSelectedCategory(category.titleFR);
                if (onCategorySelected) {
                  onCategorySelected(category.id);
                }
              }}
            >
              {category.titleFR}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
*/
