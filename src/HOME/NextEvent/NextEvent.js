import React from "react";
//import Kancho2022 from "../../ASSETS/IMAGES/Posters/Kancho2022.jpeg";
import Tanaka2023Tour from "../../ASSETS/IMAGES/Posters/Tanaka-2023-tour.webp"
import "./NextEvent.css";

export default function NextEvent() {
    return (
        <div>
            <img src={Tanaka2023Tour} alt="Prochain évenement" width={362} height={512} className="nextEvent" />
            
        </div>
    );
}
