import React from 'react'


import { useState, useEffect } from "react";

export default function Test() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
      fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendarTEST", {
  "method": "GET",
  "headers": {"content-type": "application/json",
    "accept": "application/json"
  }
})
.then(response => response.json())
.then(response => {
  this.setState({
    friends: response
  })
})
.catch(err => { console.log(err);
})});
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.club}>
              {item.id} {item.club}
            </li>
          ))}
        </ul>
      );
    }
  }
