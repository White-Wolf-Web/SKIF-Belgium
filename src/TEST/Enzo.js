import React, { Fragment, useState, useEffect } from "react";

export default function Enzo() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://skifb-admin.be/api/CalendarAPI/GetCalendarTEST', {
                method: "GET",
                mode: "no-cors",
                headers: {
                    "content-type": "application/json",
                    accept: "application/json",
                },
            });
            console.log(result);
            setData(result.data);
            console.log(result.club);
        };
        fetchData();
        console.log("fetch");
    },[]);
    console.log();
    return (
        <Fragment>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <p>{item.club}</p>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
