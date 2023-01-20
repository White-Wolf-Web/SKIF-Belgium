import React from "react";
import "./DojoList.css"; // J'importe mon css
import DojoData from "../../DATAS/DojoData";
import { Link } from "react-router-dom";
import DojoCard from "../DojoCard/DojoCard";

export default function DojoList() {
    return (
        <main>
            <h1>Dojos SKIF-B</h1>
            <div className="DojoGallery">
                {DojoData.map((element) => (
                    <Link to={"/dojo/" + element.id} key={element.id}>
                        <DojoCard
                            cover={element.cover}
                            club={element.club}
                            chiefInstructeur={element.chiefInstructeur.name}
                            town={element.town}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}
