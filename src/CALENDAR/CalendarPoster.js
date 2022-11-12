import React from 'react'
import Image from 'react-bootstrap/Image'


export default function CalendarPoster(props) {
  return (
    
    <div>
    
   <Image src={props.poster} alt="Affiche de l'evenement" width={226} height={320} className="" /> 
    </div> 
  )
}