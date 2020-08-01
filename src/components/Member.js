import React, { useState } from 'react';
import TimeRangeModel from './TimeRangeModal';

const Member = ({member}) => {
    const [showModal, setModalState] = useState(false);

    const toggleModal = (e) => {
        setModalState(!showModal);
    }

    return (
        <>
            <div className='member-block' onClick={toggleModal}>
                <span className='member-name'>
                    {member.real_name}
                </span>
                <span className='member-area'>
                    {member.tz}
                </span>
            </div>
            {showModal && <TimeRangeModel activityPeriods={member.activity_periods} name={member.real_name} toggleModal={toggleModal} />}
        </>
    );
}

export default Member;