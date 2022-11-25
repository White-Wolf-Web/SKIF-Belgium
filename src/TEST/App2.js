import React from "react";
import { useFetchData } from "./useFetchData";
function App2() {
    const { data, isLoading, error } = useFetchData('https://skifb-admin.be/api/CalendarAPI/GetCalendarTEST');
   
    return (
        
        <div
        
            className="d-flex flex-row justify-content-center align-items-center"
            style={{ backgroundColor: "#fefefe", height: "100vh", width: "100%" }}
        >
            {isLoading ? (
                <p>Chargement ....</p>
            ) : (
                <ul>
                {data.map((item) => (
        <li key={item.id}>
            <p>{item.club}</p>
        </li>))}
        
                </ul>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}
export default App2;
