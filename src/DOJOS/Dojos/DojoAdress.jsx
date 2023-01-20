import React from "react";
import Card from "react-bootstrap/Card";
import GoogleMap from "../../GOOGLEMAP/GoogleMap";
import "./DojoClub.css";

export default function DojoAdress(props) {
    return (
        <Card>
            <Card.Body className="cardBodyAddress">
                <div>
                    <Card.Text className="dojoAddress">
                        {props.street} {props.number}{" "}
                    </Card.Text>

                    <Card.Text className="dojoAddress">
                        {props.postCode} {props.city}{" "}
                    </Card.Text>

                    <Card.Text className="dojoAddress">{props.province} </Card.Text>
                </div>
                <div className="googleMap">
                    <GoogleMap />
                </div>
            </Card.Body>
        </Card>
    );
}
