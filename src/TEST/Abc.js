import React, { useState, useEffect } from "react";

export default function Abc() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let ignore = false;
        async function fetchList() {
            try {
                const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
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
                <h1>Listes</h1>

                {users.map((r) => (
                    <li key={r.id}>{r.name}</li>
                ))}
            </div>
        </div>
    );
}
