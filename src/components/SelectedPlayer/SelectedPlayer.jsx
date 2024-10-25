import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({ player }) => {
    console.log('Ok:', player);
    const { player_img, name, role, price } = player;
    return (
        <div className=' flex justify-between border border-gray-200 rounded-xl p-5'>

            <div className='border border-gray-200 rounded-xl p-5'>
            <div className='flex justify-start mb-3'>
                <img className='w-[200px] bg-player rounded-xl' src={player_img} alt="" />
            </div>
            
            <div className='flex items-center gap-2'>
                {/* <CgProfile /> */}
                <h3 className='font-semibold text-xl'>{name}</h3>
            </div>
              
            <div className='flex justify-between'> 
                {/* <h3 className='flex items-center gap-2'><FaFlag /> India</h3> */}
                <span>{role}</span>
            </div>
            
            
            
            <div className='flex justify-between items-center'>
                <h5 className='font-semibold'>Price: ${price}</h5>
              
            </div>
            </div>

            <RiDeleteBin6Line className='text-5xl text-red-500' />






        </div>
    );
};

export default SelectedPlayer;