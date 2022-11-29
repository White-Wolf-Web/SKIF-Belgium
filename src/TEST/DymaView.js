import React from "react";
import  Dyma from "./Dyma"

export default function DymaView() {
    const { data, isLoading, error } = Dyma();
    console.log(Dyma);
    console.log(data);
    console.log(data);

    return (
        <div
            style={{
                backgroundColor: "#fefefe",
                height: "100px",
                width: "100%",
                fontSize: 40,
                display: "flex",
                justifyContent: "center",
                margin: 20,
            }}
        >
            {isLoading ? (
                <p>Chargement ....</p>
            ) : ( 
                <ul>
        {data.map(item => (
          <li key={data.id}>
            {data.name} {data.club}
          </li>
        ))}
      </ul>
            )}
            {error && <p>{error}...😡🥵🤬</p>}
        </div>
    );
}

/*
  <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.club}</li>
                    ))}
                </ul>

*/