import React from "react";
import DropdownClub from "./DropdownClub";
import DropdownProvince from "./DropdownProvince";
import DropdownCategory from "./DropdownCategory";


export default function CalendarFilter() {
    return (
        <div className="calendarFilterContainer">
          <DropdownClub />
          <DropdownProvince />
          <DropdownCategory />
        </div>
      );
    }
