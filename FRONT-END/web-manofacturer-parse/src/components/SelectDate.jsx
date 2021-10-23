
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const SelectDate = ({setSelectedDate}) => {
    const [startDate, setStartDate] = useState(new Date());
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    useEffect(() => {
     let day= startDate.toLocaleDateString("es-US", options);
      setSelectedDate(day);
      
    }, [startDate])


    return (
      <DatePicker selected={startDate}    onChange={(date) => setStartDate(date)} />
    );
}

export default SelectDate
