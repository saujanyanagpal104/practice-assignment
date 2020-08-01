import React, { useState } from 'react';
import ModalPortal from './ModalPortal';
import Calender from './Calender';

const TimeRangeModel = ({activityPeriods, name, toggleModal}) => {
    const [filterDate, setFilterDate] = useState(null);

    const dateSplit = (date) => {
        const split = date.split(' ');
        const splittedDate = `${split[0]} ${split[1]} ${split[2]}`;
        return splittedDate; 
    };

    const filterShifts = () => (
        activityPeriods.filter((shift) => dateSplit(shift.start_time) === filterDate)
    );

    const activityShifts = filterDate ? filterShifts() : activityPeriods;

    return (
    <ModalPortal>
        <div className='modal-container'>
            <div className='modal-window'>
                <span className='close-button' onClick={toggleModal}>Close(X)</span>
                <span className='modal-window-heading'>Activity Time's of <span className='modal-window-name'>{name}</span></span>
                <Calender setFilterDate={setFilterDate} />
                <div className='activity-shifts'>
                    {activityShifts.length ? activityShifts.map((shift, index) => (
                        <span key={index} className='shift-range'>
                            {shift.start_time} - {shift.end_time}
                        </span>
                    )) : <span className='no-shifts'>No Shifts!</span>}
                </div>
            </div>
        </div>
    </ModalPortal>
)};

export default TimeRangeModel;