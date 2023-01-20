import React from "react";
import "./Header.css";
import SkifBLogo from "../../ASSETS/IMAGES/logo/logoSkifB2.webp";
import Navigation from "../Nav/Navigation";

export default function Header() {
    return (
        <>
            <div className="enTete">
                <img src={SkifBLogo} alt="Logo de la skif en Belgique" className="logoSkifB" />
                <div className="skifb">
                    <div className="">
                        <p>SKIF</p>
                    </div>
                    <div className="colorGold">
                        <p>&nbsp;&nbsp;BEL</p>
                    </div>
                    <div className="colorRed">
                        <p>GIUM</p>
                    </div>
                </div>
            </div>
            <Navigation />{" "}
        </>
    );
}
