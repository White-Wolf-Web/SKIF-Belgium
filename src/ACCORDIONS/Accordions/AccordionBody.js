import React from 'react'
import CalendarData from '../../CALENDAR/CalendarData'

import { Link } from 'react-router-dom';

export default function AccordionBody() {
 
  return (
    <>
    <div>{"Horaire de"} {CalendarData.startHours} {"à"} {CalendarData.endHours + "."}</div>
<div>{"Lieu : "} {CalendarData.club + "."}</div>
<div>{"Adresse :"} {CalendarData.addressStreet} {CalendarData.addressNumber} {CalendarData.addressCity} {CalendarData.addressPostalCode} {CalendarData.addressCountry + "."}</div>
<div>{CalendarData.description}</div>
<div>{CalendarData.linkSubscription}</div>
<div><Link to={CalendarData.linkPdf} />PDF</div>

    </>
  )
}
