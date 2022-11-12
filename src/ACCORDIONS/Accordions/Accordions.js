import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Accordions.css";
import { useParams } from "react-router-dom";
import CalendarData from "../../CALENDAR/CalendarData";
import { Link } from "react-router-dom";


export default function Accordions(props) {
    const { id } = useParams(); 
    const event = CalendarData.findIndex((obj) => obj.id === id);
    console.log(event);

    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                <div>
           
           {CalendarData.title} &emsp;{" "}
           {CalendarData.startDay +
               "/" +
               CalendarData.startMonth +
               "/" +
               CalendarData.startYear}{" "}
       </div>
                </Accordion.Header>
                <Accordion.Body>
                <>
    <div>{"Horaire de"} {CalendarData.startHours} {"à"} {CalendarData.endHours + "."}</div>
<div>{"Lieu : "} {CalendarData.club + "."}</div>
<div>{"Adresse :"} {CalendarData.addressStreet} {CalendarData.addressNumber} {CalendarData.addressCity} {CalendarData.addressPostalCode} {CalendarData.addressCountry + "."}</div>
<div>{CalendarData.description}</div>
<div>{CalendarData.linkSubscription}</div>
<div><Link to={CalendarData.linkPdf} />PDF</div>

    </>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
