import React, { useState, useEffect } from "react";
//import Image from 'react-bootstrap/Image'
import "./Calendar.css";



//downloadFile('https://example.com/files/filename.pdf');

export default function CalendarPoster(props) {
   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://skifb-admin.be/api/CalendarAPI/GetCalendar');
      const blob = await response.blob();
      setData(blob);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
console.log(props.linkPdf);
  return (
    <div>
     
        <div>{data.linkPdf}</div>
     
    </div>
  );
}







