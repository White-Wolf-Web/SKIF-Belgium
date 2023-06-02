import React, { useState, useEffect } from "react";
import "./DojoList.css"; 
//import DojoData from "../../DATAS/DojoData";
import { Link } from "react-router-dom";
import DojoCard from "../DojoCard/DojoCard";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function DojoListBis() {
    const { t } = useTranslation();

	const [items, setItems] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("https://skifb-admin.be/api/ClubsAPI/GetAllClubsDescription?lang=FR");
                
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
            <h1>Dojos SKIF-B 2</h1>
            <div className="DojoGallery">
                {items.map((item) => (
                    <Link to={"/dojobis/" + item.id} key={item.id}>
                        <DojoCard
                            cover={item.cover}
                            club={item.title}
                            chiefInstructeur={item.chiefInstructor}
                            town={item.city}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}
