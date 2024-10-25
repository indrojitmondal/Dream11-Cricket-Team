import React, { useState } from 'react';
import { CiFlag1 } from "react-icons/ci";
import { FaFlag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const AvailablePlayer = ({player,handleSelectedPlayers,coin,handleReduceCoin,availableCopyData,selectedPlayers}) => {
    

   
    const {player_img, name, role, batting_type, bowling_type, price} = player;
    // console.log('Coin: ',coin,'Price: ',price);
    return (
        <div className='border border-gray-200 rounded-xl p-5'>
            <div className='flex justify-start mb-3'>
                <img className='w-full bg-player rounded-xl' src={player_img} alt="" />
            </div>
            
            <div className='flex items-center gap-2'>
                <CgProfile />
                <h3 className='font-semibold text-xl'>{name}</h3>
            </div>
              
            <div className='flex justify-between'> 
                <h3 className='flex items-center gap-2'><FaFlag /> India</h3>
                <span>{role}</span>
            </div>
            
            <h4 className='font-bold'>Rating</h4>
            
            <div className='flex justify-between'>
                <h5>{batting_type}</h5>
                <h5>{bowling_type}</h5>
            </div>
            
            <div className='flex justify-between items-center'>
                <h5 className='font-semibold'>Price: ${price}</h5>
                <button
                 onClick={
                    
                    coin >=player.price && !player.selected_status && selectedPlayers.length<6?()=>{
                    handleSelectedPlayers(player);
                    player.selected_status=true;
                    handleReduceCoin(player.price);
                    } : player.selected_status? 
                    ()=> alert("player already selected"): selectedPlayers.length>=6? ()=>alert("6 player already selected"):
                     ()=> alert("Please Add Coin")

    
                     



                    
                } 
                
                 className='btn'>Choose Player</button>
            </div>
        </div>
    );
};

export default AvailablePlayer;
