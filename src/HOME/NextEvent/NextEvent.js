import React from "react";
import Kancho2022 from "../../ASSETS/IMAGES/Posters/Kancho2022.jpeg";
import "./NextEvent.css";

export default function NextEvent() {
    return (
        <div className="nextEvent">
            <img src={Kancho2022} alt="Prochain évenement" width={362} height={512} />
            
        </div>
    );
}
