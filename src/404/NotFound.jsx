import React from "react";
import karateMan from "./karateMan.png";
import karateWoman from "./karateWoman.png";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function NotFound() {
    return (
        <main className="">
            <div className="notFoundImgH1">
                <img src={karateMan} alt="Karateka Homme" className="notFoundImg" />
                <h1 className="notFoundH1">404</h1>
                <img src={karateWoman} alt="Karateka Femme" className="notFoundImg" />
            </div>
            <Button
                className="notFoundDivA"
                breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            >
                <Link to={"/"} className="notFoundA">
                    {" "}
                    Retour à l'accueil
                </Link>
            </Button>
        </main>
    );
}
