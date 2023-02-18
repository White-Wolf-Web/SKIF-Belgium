import React, { useState, useEffect } from "react";


export default function CalendarPoster(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendar");
                const data = await response.json();
                setItems(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    return (
		<div >
		{items.map((item) => (
      <div key={item.id}>{item.coverImage}</div>
		)
    )
}</div>)}
	
