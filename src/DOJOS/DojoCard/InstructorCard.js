import React from "react";
import "./InstructorCard.css";
import Card from "react-bootstrap/Card";
export default function InstructorCard(props) {
    return (
        <div className="galleryInstructorDojo">
            <div className="d-flex justify-content-around">
                <Card className="instructorCardCard">
                    <Card.Img
                        variant="top"
                        src={props.pic}
                        className="instructorCardCard-img-top"
                    />
                    <Card.Body>
                        <Card.Title className="instructorCardTitle"> {props.position} </Card.Title>
                        <Card.Text className="">
                            {" "}
                            {props.name} <br></br>
                            {"Grade: " + props.rank}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
