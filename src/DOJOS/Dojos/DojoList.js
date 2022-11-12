import React from "react";
import "./DojoList.css"; // J'importe mon css
import DojoData from "../../DATAS/DojoData";
import { Link } from "react-router-dom";
import DojoCard from "../DojoCard/DojoCard";


export default function DojoList() {
    return (
        <main>
            <h1>Liste des Dojos SKIF-B</h1>
            <div className="DojoGallery">
                {DojoData.map((DojoData) => (
                    <Link to={"/dojo/" + DojoData.id} key={DojoData.id}>
                        <DojoCard cover={DojoData.cover}   club={DojoData.club}   chiefInstructeur={DojoData.chiefInstructeur}   
                            addressCity={DojoData.addressCity}  province={DojoData.province}    />
                    </Link>
                ))}
            </div>
        </main>
    );
}
