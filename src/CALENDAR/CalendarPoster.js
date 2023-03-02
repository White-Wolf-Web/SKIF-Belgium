import React, { useState, useEffect } from "react";

export default function CalendarPoster(props) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendar");
        const data = await response.json();
        setItem(data[0]); // Set only the first item in the array
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="calendarCardCoverImg">
      {item && (
        <img src={`data:image/jpeg;base64,${props.coverImage}`} alt={item.title} />
      )}
    </div>
  );
}