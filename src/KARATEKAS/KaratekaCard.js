import React from "react";
import Card from "react-bootstrap/Card";
import "./Karateka.css";

export default function KaratekaCard(props) {
    return (
        <div className="d-flex justify-content-around">
            <Card className="karatekaCard">
                <Card.Img variant="top" src={props.cover} />
                <Card.Body>
                    <Card.Title className="karatekaCardName">{props.karateka.name}</Card.Title>
                    <Card.Text className="karatekaRank"> {props.karateka.rank}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
