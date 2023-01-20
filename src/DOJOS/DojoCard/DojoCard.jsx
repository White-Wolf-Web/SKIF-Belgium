import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DojoCard.css";

export default function DojoCard(props) {
    return (
        <div className="d-flex justify-content-around">
            <Card className="dojosCard">
                <Card.Img variant="top" src={props.cover} />
                <Card.Body>
                    <Card.Title className="dojoCardTitle">{props.club}</Card.Title>
                    <Card.Text className="dojoCardInstructeur"> {props.chiefInstructeur}</Card.Text>
                    <Card.Text className="dojoTown">{props.town}</Card.Text>
                    <Button variant="primary">DOJO</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
