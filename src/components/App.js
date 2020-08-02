import React, { useState, useEffect } from 'react';
import MembersList from './MembersList';
import '../styles/index.css';

const App = () => {
    const [isFetched, setIsFetched] = useState(false);
    const [membersData, setMembersData] = useState([]);

    useEffect(() => {
        fetchMembers()
    }, []);

    const fetchMembers = async () => {
        const fetchData = await fetch('https://fast-tundra-66711.herokuapp.com/').then((res) => res.json());
        if(fetchData.ok) {
            setMembersData(fetchData.members);
            setIsFetched(true);
        }
    }

    return (
        <div className='container'>
            {isFetched ?
                <>
                    <MembersList members={membersData} />
                </>
            : <>
                <div className='load'><div className='loader'></div><span className='loading'>LOADING...</span></div>
            </>}
        </div>
    );
}

export default App;