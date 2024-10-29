import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ coin }) => {

    const [open, isOpen] = useState(true);

    return (
        <div className='flex md:justify-between items-center '>



            <div className=" flex gap-3 items-center">
                <div 
                  onClick={
                    
                    
                    ()=>{
                        isOpen(!open);
                        
                        
                    } 
                  
                }
                 className='block md:hidden'>

                    {
                       
                        open ? <AiOutlineMenu className='text-3xl font-bold text-yellow-600'></AiOutlineMenu > :  
                        
                        <IoMdClose className='text-3xl font-bold text-yellow-600' />
                    }
                    

                </div>
                <img className='w-[70px] h-[60px]' src="https://i.ibb.co.com/tCDBHJ3/logo.png" alt="" />
            </div>
            <menu className='md:flex md:gap-5 md:items-center'>
                <div className='hidden md:flex gap-5'>

                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>

                </div>

                <div className='flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-2'>
                    <p className='text-2xl md:text-base font-semibold'>{coin} Coin</p>
                    <img src="https://i.ibb.co.com/86822T7/coin.png" alt="" />
                </div>
            </menu>

        </div>
    );
};

export default Navbar;