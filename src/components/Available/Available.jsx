import React, { useEffect, useState } from 'react';
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer';

const Available = () => {
    const [availableData, setAvailableData]= useState([]);
    useEffect(()=>{
        fetch('availablePlayersData.json')
        .then(res => res.json())
        .then (data => setAvailableData(data));

    },[])
    return (
        <div className='grid grid-cols-3 gap-5'>

            {/* <h3>{availableData.length}</h3> */}
            {
                availableData.map( (player,idx) => <AvailablePlayer key={idx} player={player} ></AvailablePlayer>)
            }
            
        </div>
    );
};

export default Available;