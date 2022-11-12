import React from 'react'
import Card from "react-bootstrap/Card";
import "./DojoClub.css"

export default function DojoContact(props) {
  return (
    <Card>
    <Card.Body>
        <Card.Text > <div className='dojoContactH3'>Email</div>{props.contactMail} </Card.Text>
        <Card.Text><div className='dojoContactH3'>Téléphone</div>{props.phone}</Card.Text>
        <Card.Text><div  className='dojoContactH3'>Site Web</div>{props.website}</Card.Text>
    </Card.Body>
</Card>
  )
}
