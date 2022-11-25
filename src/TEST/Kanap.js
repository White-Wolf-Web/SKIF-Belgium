import React, { useEffect, useState } from "react";

export default function Kanap() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendarTEST")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.name}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
}
