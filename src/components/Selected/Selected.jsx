import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Selected = ({selectedPlayers}) => {
    console.log(selectedPlayers);
    // for (const player of selectedPlayers) {

    //     console.log(player);
        
    // }
    return (
        <div className='grid grid-cols-1 gap-5 '> 
            {
                selectedPlayers.map((player,idx)=> <SelectedPlayer key={idx} player={player} ></SelectedPlayer> )
            }
            
        </div>
    );
};

export default Selected;