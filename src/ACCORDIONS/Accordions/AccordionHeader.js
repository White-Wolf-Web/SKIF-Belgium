import React from "react";
import CalendarData from "../../CALENDAR/CalendarData";


export default function AccordionHeader(props) {

    return (
        <div>
           
            {CalendarData.title} &emsp;{" "}
            {CalendarData.startDay +
                "/" +
                CalendarData.startMonth +
                "/" +
                CalendarData.startYear}{" "}
        </div>
    );
}
