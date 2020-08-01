import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calender = ({setFilterDate}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const splitDate = selectedDate ? String(selectedDate).split(' ') : null;
        const filterDate = splitDate ? `${splitDate[1]} ${parseInt(splitDate[2])} ${splitDate[3]}` : null;
        setFilterDate(filterDate);
    },[selectedDate, setFilterDate])

    const handleChange = (e) => {
        setSelectedDate(e);
    };

    return (
        <div className='calender'>
            <DatePicker selected={selectedDate} onChange={handleChange} placeholderText='Filter By Date' isClearable />
            <span className='note'>*Clear to see all the working shifts</span>
        </div>
    )
}

export default Calender;