import React from "react";
import Card from "react-bootstrap/Card";
import "./Karatekas.css";
//import karatekasData from "../DATAS/karatekasData"

export default function KaratekaCard(props) {
    return (
        <div className="d-flex justify-content-around">
            <Card className="karatekaCard">
                <Card.Img variant="top"  className="karateka-card-img" src={props.cover} alt={props.name + " " +props.rank}/>
                <Card.Body className="karateka-card-body">
                    <Card.Title className="karatekaCardName">{props.name}</Card.Title>
                    <Card.Text className="karatekaRank">{props.rank}</Card.Text>
                    <Card.Text className="karatekaPosition">{props.skifPosition}</Card.Text>
                    <Card.Text className="karatekaTown">{props.town}</Card.Text>
                    <Card.Text className="karatekaMention">{props.mention}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
