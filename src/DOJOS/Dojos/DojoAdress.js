import React from "react";
import Card from "react-bootstrap/Card";
import GoogleMap from "../../GOOGLEMAP/GoogleMap";
import "./DojoClub.css"

export default function DojoAdress(props) {
    return (
        <div>
            <Card className="dojoAdress">
                <Card.Body>
                  <div className="dojoAdress">  <Card.Text>
                        {props.addressStreet} {props.addressNumber}   {props.addressPostalCode} {props.addressCity}   {props.province} {props.addressCountry}
                    </Card.Text>
                   </div>
                   <div className="googleMap"> <GoogleMap /></div>
                </Card.Body>
            </Card>
        </div>
    );
}
