import React, { useState } from 'react';

const Navbar = ({coin}) => {
    
    return (
        <div className='flex justify-between '>

            <div className="">
                <img className='w-[70px] h-[60px]' src="https://i.ibb.co.com/tCDBHJ3/logo.png" alt="" />
            </div>
            <menu className='flex gap-5 items-center'>
                <div className='flex gap-5'>

                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>

                </div>

                <div className='flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-2'>
                    <p className='font-semibold'>{coin} Coin</p>
                    <img src="https://i.ibb.co.com/86822T7/coin.png" alt="" />
                </div>
            </menu>

        </div>
    );
};

export default Navbar;