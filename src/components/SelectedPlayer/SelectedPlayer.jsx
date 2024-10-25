import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({ player,handleRemovedPlayers }) => {
    // console.log('Ok:', player);
    const { player_img, name, role, price,batting_type,bowling_type } = player;
    return (
        <div className=' flex justify-between   border border-gray-200 rounded-xl p-5'>

            <div className='border flex gap-5  border-gray-200 rounded-xl p-5'>
                <div className='flex justify-start mb-3'>
                    <img className='w-[200px] bg-player rounded-xl' src={player_img} alt="" />
                </div>

                <div className='flex flex-col justify-between'>

                    <h3 className='font-semibold text-xl'>{name}</h3>

                    <h4>{role}</h4> 
                    <h4>{batting_type}</h4> 
                    <h4>{bowling_type}</h4> 
                    <h5 className='font-semibold'>Price: ${price}</h5>

                </div>



            </div>

            <button className='block'
              onClick={ ()=>{
                handleRemovedPlayers(player.player_id);
              }}   
            >
                
                
            <RiDeleteBin6Line className='text-5xl text-red-500' />

            </button>

            






        </div>
    );
};

export default SelectedPlayer;