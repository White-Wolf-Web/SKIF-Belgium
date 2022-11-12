import React from 'react'
import CalendarDatePicker from '../CALENDAR/CalendarDatePicker'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import InstructorCard from '../DOJOS/DojoCard/InstructorCard';
import InstructorsData from '../DATAS/InstructorsData';
import { useParams } from 'react-router-dom';

export default function Test() {
  const { id } = useParams();                                           // on "déstructure l'ID" on retourne un useParams       
  const instructorCardId = InstructorsData.findIndex((obj) => obj.id === id); 
  return (
    <div className="d-flex justify-content-around">
  
  {InstructorsData.map((InstructorsData) => (
  <InstructorCard pic={InstructorsData[instructorCardId].pic} name={InstructorsData.name}   />


  ))}

    </div>
  );
}



