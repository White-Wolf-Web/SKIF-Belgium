import React, { useState } from "react";
import "./CalendarDatePicker.css";
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CalendarDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    console.log(setStartDate);

    return (
        <div>
            <DatePicker selected={startDate} />
        </div>
    );
}
