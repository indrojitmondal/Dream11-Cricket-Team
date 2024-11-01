import React, { useState } from 'react';
import { CiFlag1 } from "react-icons/ci";
import { FaFlag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { toast } from 'react-toastify';
import { RiQqLine } from 'react-icons/ri';

const AvailablePlayer = ({player,handleSelectedPlayers,coin,handleReduceCoin,availableCopyData,selectedPlayers}) => {
    

   
    const {player_img, name, role, batting_type, bowling_type, price} = player;
    // console.log('Coin: ',coin,'Price: ',price);
    function addCoin() {
        // toast("Please Add Coin")
        
        window.innerWidth < 768 ?  toast.info("Please Add Coin!", {
          position: 'bottom-center',
        // position: window.innerWidth < 768 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
            
          autoClose: 2000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }): 
        toast.info("Please Add Coin!", {
            position: 'top-right',
           
            autoClose: 2000, // Close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })

      }
      function allReadySelected() {
       
        //    toast.warn("The player already selected!", {
            window.innerWidth < 768 ?  toast.warn("The player already selected!", {
                position: 'bottom-center',
              // position: window.innerWidth < 768 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                  
                autoClose: 2000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }): 
              toast.warn("The player already selected!", {
                  position: 'top-right',
                 
                  autoClose: 2000, // Close after 3 seconds
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })
      }
      function allPlayerSelected() {

        indow.innerWidth < 768 ? 
         toast.warn("Total 6 player is already selected!",{
            position: 'bottom-center',
            // position: window.innerWidth < 768 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                
              autoClose: 2000, // Close after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }): 
            toast.warn("Total 6 player is already selected!", {
                position: 'top-right',
               
                autoClose: 2000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })

        
     }
     function success() {

        // toast.success("Congratulations! The total 6 player is selected.",
       
        indow.innerWidth < 768 ? 
        toast.success("Congratulations! The total 6 player is selected.",{
            position: 'bottom-center',
            // position: window.innerWidth < 768 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                
              autoClose: 2000, // Close after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }): 
            toast.success("Congratulations! The total 6 player is selected.", {
                position: 'top-right',
               
                autoClose: 2000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
    
     }
    
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


                    
                    coin >=player.price &&(selectedPlayers.find( x=> x.player_id ==player.player_id)==undefined ) && selectedPlayers.length<6?()=>{
                    handleSelectedPlayers(player);
                    // console.log('Selected: ',selectedPlayers.length);
                    // player.selected_status=true;
                    handleReduceCoin(player.price);
                    } : (selectedPlayers.find( x=> x.player_id ==player.player_id)!=undefined ) ? 
                    ()=>  allReadySelected() : selectedPlayers.length>=6? ()=>allPlayerSelected():
                     ()=>  addCoin()

    
                     



                    
                } 
                
                 className='btn'>Choose Player</button>

               
            </div>
        </div>
    );
};

export default AvailablePlayer;
