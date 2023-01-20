import React from "react";
import Card from "react-bootstrap/Card";
import "./DojoClub.css";

export default function DojoContact(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Text className="cardContact">
                    <i className="fa-solid fa-at"></i> &emsp; {props.contactMail}
                </Card.Text>
                <Card.Text className="cardContact">
                    <i className="fa-solid fa-phone"></i> &emsp; {props.phone}
                </Card.Text>
                <Card.Text className="cardContact">
                    <i className="fa-solid fa-globe"></i>&emsp; {props.website}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
