import { useState, useEffect } from 'react';

export default function GetCalendarTEST() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let ignore = false;
        async function fetchList() {
            try {
                const reponse = await fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendarTEST", {  
                    method: 'GET',  
                    withCredentials: true,  
                    crossorigin: true,  
                    mode: 'no-cors',     
                  })  ;
                if (reponse.ok) {
                    const listing = await reponse.json();
                    if (!ignore) {
                        if (Array.isArray(listing)) {
                            setUsers(listing);
                        } else {
                            setUsers([listing]);
                        }
                    }
                } else {
                    console.error("Oops, une erreur");
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchList();
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div style={{
            backgroundColor: "#fefefe",
            height: "auto",
            width: "100%",
            fontSize: 19,
            display: "flex",
            justifyContent: "center",
            margin: 20,
        }}>
            <div>
                <h1>Listes evenement Skif</h1>

                {users.map((r) => (
                    <li key={r.title}>{r.title}</li>
                ))}
            </div>
        </div>
    );
}
