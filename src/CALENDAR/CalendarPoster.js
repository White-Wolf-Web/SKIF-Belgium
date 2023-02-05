import React, { useState, useEffect } from "react";
import kancho from "../ASSETS/IMAGES/Posters/Kancho2022.webp";
//import xxx from "https://skifb-admin.be/api/CalendarAPI/GetFile?filename=f9e28063-a355-4de4-94bf-739ca5baf63e.pdf"

export default function CalendarPoster(props) {
	const [items, setItems] = useState([]);
  const handleClick = kancho;

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GetFile?filename=f9e28063-a355-4de4-94bf-739ca5baf63e.pdf");
				const data = await response.json();
				setItems(data);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);



	return (
		<div>
		<button onClick={() => {}}>X</button>
		</div>
   
	);
}

