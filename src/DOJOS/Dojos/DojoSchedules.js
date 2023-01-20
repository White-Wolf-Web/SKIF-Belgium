import React from "react";
import Card from "react-bootstrap/Card";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function DojoSchedules(props) {
    const { t } = useTranslation();
    return (
        <div>
            <Card >
                <Card.Body>
                
                    <Card.Text>{props.scheduleMonday} </Card.Text>
                    <Card.Text>{props.scheduleTuesday}</Card.Text>
                    <Card.Text>{props.scheduleWednesday}</Card.Text>
                    <Card.Text>{props.scheduleThursday}</Card.Text>
                    <Card.Text>{props.scheduleFriday}</Card.Text>
                    <Card.Text>{props.scheduleSaturday}</Card.Text>
                    <Card.Text>{props.scheduleSunday}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
