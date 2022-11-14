import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./DojoCard.css"

export default function DojoCard(props) {
 
    return (
        <div className="d-flex justify-content-around">
          <Card className='dojosCard'>
            <Card.Img variant="top" src={props.cover} />
            <Card.Body>
              <Card.Title className='dojoCardTitle'>{props.club}</Card.Title>
              <Card.Text className='dojoCardInstructeur' > {"Instructeur:"}  {props.chiefInstructeur} <br></br>
               {props.addressCity} <br></br> {props.province} 
              
              
              </Card.Text>
              <Button variant="primary">Notre Dojo</Button>
            </Card.Body>
          </Card>
    
      
          
        </div>
      );
    }
