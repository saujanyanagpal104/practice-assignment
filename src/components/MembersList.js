import React from 'react';
import Member from './Member';

const MembersList = ({members}) => (
    <div className='members-list'>
        <h1>Members List</h1>
        {members.map((member) => <Member key={member.id} member={member} />)}
    </div>
);

export default MembersList;