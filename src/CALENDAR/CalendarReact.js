import React, { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarReact.css";

export default function CalendarReact(props) {
    //const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(new Date());
    

    return (
        <div className="calendar-container">
            <Calendar
                onChange={setDate}
                value={date}
                selectRange={false}
                goToRangeStartOnSelect={false}
                defaultValue={date}
                nextLabel=">"
                nextAriaLabel="Go to next month"
                next2Label=">>"
                next2AriaLabel="Go to next year"
                prevLabel="<"
                prevAriaLabel="Go to prev month"
                prev2Label="<<"
                prev2AriaLabel="Go to prev year"
                returnValue="range"
                onClickDay={(value) => console.log("New date is: ", value)}
                minDate ={ new Date ( 2022 , 10 , 1 )}
                competitionDate={ new Date ( 2022 , 10 , 19 )}
            />
        </div>
    );
}

/*
onClickDay={console.log('Clicked day is: ', "on verra ")}
 tileContent=
  tileClassName="class1 class2"
*/
