import React, { useState, useEffect } from "react";
import CalendarPoster from "./CalendarPoster";
//import { Link } from "react-router-dom";

export default function CalendarPdf(props) {
  const [items, setItems] = useState([]);
  const urlPdf = "https://skifb-admin.be/api/CalendarAPI/GetFile?filename=";

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendar");
				const data = await response.json();
				setItems(data);
			} catch (e) {
				console.log(e)
			}
		}
		fetchData();
	}, []);
  //console.log(items.linkPdf);
  //console.log(urlPdf);
//console.log(items);
	return (
    <div>
    {items && (
		<a href= {props.linkPdf}>
			<CalendarPoster coverImage={props.coverImage} />
      
		</a>)}
    </div>


	);
  
}

// A CHANGER L'ADRESSE UNE FOIS DEPLOYER LE A EN LINK 

