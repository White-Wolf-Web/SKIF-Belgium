import React from "react";
import "./Calendar.css";
import Accordion from "react-bootstrap/Accordion";
import CalendarData from "../DATAS/CalendarData";
import CalendarReact from "./CalendarReact";
import CalendarPoster from "./CalendarPoster";

export default function Calendar(props) {

    return (
        <main>
            <h1>CALENDRIER FEDERAL</h1>

            <div className="calendarReact">
                <CalendarReact />

                <div className="calendarAccordion">
                    {CalendarData.map((CalendarData) => (
                        <Accordion defaultActiveKey="false" key={CalendarData.id} flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div>
                                        {" "}
                                        {CalendarData.startDay +
                                            "/" +
                                            CalendarData.startMonth +
                                            "/" +
                                            CalendarData.startYear}{" "}
                                        &emsp; {CalendarData.title}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="calendarBody">
                                    <div className="">
                                        <div>
                                            {"Horaire de"} {CalendarData.startHours} {"à"}{" "}
                                            {CalendarData.endHours + "."}
                                        </div>
                                        <div>
                                            {"Lieu : "} {CalendarData.club + "."}
                                        </div>
                                        <div>
                                            {"Adresse :"} {CalendarData.addressStreet}{" "}
                                            {CalendarData.addressNumber} {CalendarData.addressCity}{" "}
                                            {CalendarData.addressPostalCode}{" "}
                                        </div>
                                        <div>
                                            {CalendarData.province} &emsp;{" "}
                                            {CalendarData.addressCountry}
                                        </div>
                                        <br></br>
                                        <div>
                                            {" "}
                                            {"Contact : "}
                                            {CalendarData.contact}
                                        </div>
                                        <div>
                                            {" "}
                                            {"Mail : "}
                                            {CalendarData.contactMail}
                                        </div>
                                        <br></br>
                                        <div>{CalendarData.description}</div>
                                    </div>
                                    <CalendarPoster poster={CalendarData.poster} />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </div>
            </div>
        </main>
    );
}
