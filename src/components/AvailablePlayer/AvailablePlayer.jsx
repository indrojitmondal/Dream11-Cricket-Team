import React from 'react';

const AvailablePlayer = ({player}) => {
    const {player_img,name,role,batting_type,bowling_type,price}=player;
    return (
        <div className='border border-gray-200 rounded-xl p-5'>
            <div className='flex justify-start mb-3'>
               <img className='w-full bg-player rounded-xl' src={player_img} alt="" />
            </div>
            
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p className='flex justify-between'> <h3>India</h3>
                <span>{role}</span>
            </p>
            <h4 className='font-bold'>Rating</h4>
            <p className='flex justify-between'>
                <h5>{batting_type}</h5>
                <h5>{bowling_type}</h5>
            </p>
            <p className='flex justify-between'>
                <h5 className='font-semibold'>{price}</h5>
                <button className='btn'>Choose Player</button>
            </p>

        </div>
    );
};

export default AvailablePlayer;