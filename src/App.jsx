
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Available from './components/Available/Available'
import Selected from './components/Selected/Selected'
import Footer from './components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  const [coin, setCoin] = useState(0);
  const [available, setAvailable] = useState(true);
  const [selected, setSelected] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
    const handleSelectedPlayers = (player)=>{

        
        // console.log('Hello...');
        
        // player.selected_status=true;
        
        // console.log('Player id:',player.player_id);
        const newS= [...selectedPlayers];
        const check= newS.find( x=> x.player_id ==player.player_id);
        const newSelectedPlayers= [...selectedPlayers, player];
        console.log(newS);
        console.log('check:',check);
        if(check==undefined){
          console.log('Yes, done');
          setSelectedPlayers(newSelectedPlayers);
        }
        
      

    }
    // useEffect( ()=>{

    //   const players= [...selectedPlayers];
        
    //   console.log('Length:',players.length);
    //   const newSelectedPlayers= [...selectedPlayers];
    //     // setSelectedPlayers(newSelectedPlayers);



    // },[selectedPlayers])

    const handleRemovedPlayers = (player_id)=>{

        
      // console.log('Hello Remove...');
      const allSelectedPlayers= [...selectedPlayers];
      // console.log(allSelectedPlayers);
      const newSelectedPlayers= allSelectedPlayers.filter( player => player.player_id !== player_id );
      // setSelectedPlayers(newSelectedPlayers);
      setSelectedPlayers(newSelectedPlayers);
    

  }
    
  

  

  const handleCoin = (x) => {
    setCoin(coin + x);
    // console.log('Add coin:', x);
  }
  const handleReduceCoin = (x) =>{
    setCoin(coin - x);
    // console.log('Reduce coin:', x);
  }

  const handleIsAvailable = status => {
    if (status) {
      setAvailable(true);
      setSelected(false);
    }
    // console.log(status);
  }
  const handleIsSelected = status => {
    if (status) {

      setSelected(true);
      setAvailable(false);
    }
    // console.log(status);
  }

  return (
    <>
      <header className='w-11/12 mx-auto pt-4'>

        <div className='fixed w-11/12 mx-auto pt-4 pb-4 top-0 z-50 bg-white'>
          <Navbar coin={coin}></Navbar>
        </div>


        <Banner handleCoin={handleCoin}></Banner>
      </header>
      <main className='w-11/12 mx-auto pt-12'>

        <div className='flex justify-between items-center'>
          <div>
            {
              available ? <h2 className='text-2xl font-bold'>Available Players</h2> : <h2 className='text-2xl font-bold'>Selected Player ({selectedPlayers.length}/6) </h2>
            }
          </div>

          <div className='border border-gray-200 rounded-xl '>
            <button
              onClick={() => {
                handleIsAvailable(true);
              }}
              className={`border border-gray-200 rounded-l-xl  px-6 py-3  ${available ? 'bg-credit' : 'bg-white'}`}>Available</button>
            <button

              onClick={() => {
                handleIsSelected(true);
              }}


              className={`border border-gray-200 rounded-r-xl px-6 py-3  ${selected ? 'bg-credit' : 'bg-white'}`}>Selected ({selectedPlayers.length})</button>
          </div>
        </div>
        <div className='mt-4'>
          {
            available ? <Available coin={coin}  
            handleReduceCoin={handleReduceCoin} selectedPlayers={selectedPlayers}
             handleSelectedPlayers={handleSelectedPlayers}></Available> : <Selected  handleRemovedPlayers={handleRemovedPlayers} selectedPlayers={selectedPlayers}></Selected>
          }
        </div>
        <div className='mt-4'>
          {
             !available? <button
              onClick={()=> {
                setAvailable(true);
                setSelected(false);
              } 
                } 
              className='border border-add px-6 py-3 rounded-xl bg-credit '>Add More Player</button>  : ""
          }

        </div>

      </main>

      <Footer></Footer>

      <ToastContainer />

      






    </>
  )
}

export default App
