import React from 'react'
//import CalendarDatePicker from '../CALENDAR/CalendarDatePicker';
import DojoData from '../DATAS/DojoData';
import { useParams } from 'react-router-dom';



export default function Test() {
  const { id } = useParams();
  const dojoClub = DojoData.findIndex((obj) => obj.id === id);

  return (
  

<div>

</div>
    
  );
}



