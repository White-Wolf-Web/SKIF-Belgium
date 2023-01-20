import React from "react";
import "./InstructorCard.css";
import Card from "react-bootstrap/Card";

export default function InstructorCard(props) {
    return (
        <div className="galleryInstructorDojo">
            <div className="d-flex justify-content-around">
                <Card className="instructorCardCard" id={props.id}>
                    <Card.Img
                        variant="top"
                        src={props.instructeurPic}
                        className="instructorCardCard-img-top"
                    />
                    <Card.Body>
                        <Card.Title className="instructorCardTitle">
                            {" "}
                            {props.instructeurPosition}{" "}
                        </Card.Title>
                        <Card.Text className="">
                            {" "}
                            {props.instructeurName} <br></br>
                            {props.instructeurRank}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
