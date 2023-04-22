import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const fetchCategories = async () => {
  try {
    const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GetCategories"); // Remplacez cette URL par l'URL de l'API pour récupérer les catégories
    const data = await response.json();
    const categoryNames = data.map((category) => category.title);
    return categoryNames;
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
  }
};

export default function DropdownCategory() {
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
                setSelectedCategory(category);
              }}
            >
              {category}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
