import React from "react";
import "./InstructorCard.css";
import Card from "react-bootstrap/Card";
//import DojoData from "../../DATAS/DojoData";

export default function InstructorCard(props) {
   // const instructors = DojoData.instructeurs
    //const instructor = DojoData.instructeurs.instructor

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
                        <Card.Title className="instructorCardTitle"> {props.instructeurPosition} </Card.Title>
                        <Card.Text className="">
                            {" "}
                            {props.instructeurName} <br></br>
                            {"Grade: " + props.instructeurRank}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
