import React, { useEffect, useState } from 'react';
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer';

const Available = ({handleSelectedPlayers,coin, handleReduceCoin,selectedPlayers}) => {
    const [availableData, setAvailableData] = useState([]);
    const [availableCopyData, setAvailableCopyData] = useState([]);

    
  
   
    useEffect(()=>{
        fetch('availablePlayersData.json')
        .then(res => res.json())
        .then (data => { 

            setAvailableData(data)
            setAvailableCopyData({...data});
        });

    },[])
    // console.log('Copy data:', availableCopyData);
   
    return (
        <div className='grid grid-cols-3 gap-5'>

            {/* <h3>{availableData.length}</h3> */}
            {
                availableData.map( (player,idx) => <AvailablePlayer selectedPlayers={selectedPlayers}
                 coin={coin} handleReduceCoin={handleReduceCoin} availableCopyData={availableCopyData}
                handleSelectedPlayers={handleSelectedPlayers} 
                 key={idx} player={player} ></AvailablePlayer>)
            }
            
        </div>
    );
};

export default Available;