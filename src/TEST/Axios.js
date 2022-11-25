import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Axios() {
    const [data, setData] = useState([]);
    //const [isLoading, setIsLoading] = useState(true);
    //const [error, setError] = useState(null);

    useEffect(()  =>  {
        axios.get("https://skifb-admin.be/api/CalendarAPI/GetCalendarTEST")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {data.data?.map((item) => (
                <div>
                    <h2>{item.club}</h2>
                </div>
            ))}
        </div>
    );
}
