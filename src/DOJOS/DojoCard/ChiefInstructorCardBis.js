import React from "react";
import "./InstructorCard.css";
import Card from "react-bootstrap/Card";

export default function ChiefInstructorCardBis(props) {
    return (
        <div className="galleryInstructorDojo">
            <div className="d-flex justify-content-around">
                <Card className="instructorCardCard" id={props.id}>
                    <Card.Img
                        variant="top"
                        src={props.chiefInstructeurPic}
                        className="instructorCardCard-img-top"
                    />
                    <Card.Body>
                        <Card.Title className="instructorCardTitle">
                            {" "}
                            {props.ChiefInstructeurPosition}{" "}
                        </Card.Title>
                        <Card.Text className="">
                            {" "}
                            {props.chiefInstructeurName} <br></br>
                            {props.chiefInstructeurRank}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
