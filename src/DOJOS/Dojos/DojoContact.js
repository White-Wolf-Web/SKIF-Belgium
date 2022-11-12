import React from 'react'
import Card from "react-bootstrap/Card";

export default function DojoContact(props) {
  return (
    <Card>
    <Card.Body>
        <Card.Text>{props.contactMail} </Card.Text>
        <Card.Text>{props.phone}</Card.Text>
        <Card.Text>{props.website}</Card.Text>
    </Card.Body>
</Card>
  )
}
