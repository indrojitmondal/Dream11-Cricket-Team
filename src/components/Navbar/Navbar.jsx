import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between'>

            <div className="">
                <img className='w-[70px] h-[60px]' src="../../../src/assets/logo.png" alt="" />
            </div>
            <menu className='flex gap-5 items-center'>
                <div className='flex gap-5'>

                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>

                </div>

                <div className='flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-2'>
                    <p className='font-semibold'>0 Coin</p>
                    <img src="../../../src/assets/coin.png" alt="" />
                </div>
            </menu>

        </div>
    );
};

export default Navbar;