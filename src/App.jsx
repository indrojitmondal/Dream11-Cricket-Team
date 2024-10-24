import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Available from './components/Available/Available'
import Selected from './components/Selected/Selected'

function App() {
  const [coin, setCoin] = useState(0);
  const [available, setAvailable] = useState(true);
  const [selected, setSelected] = useState(false);

  const handleCoin = (x)=>{
    setCoin(coin+x);
    console.log('Add coin:',x);
  }

  const handleIsAvailable = status => {
    if (status) {
      setAvailable(true);
      setSelected(false);
    }
    console.log(status);
  }
  const handleIsSelected = status => {
    if (status) {

      setSelected(true);
      setAvailable(false);
    }
    console.log(status);
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
              available ? <h2 className='text-2xl font-bold'>Available Players</h2> : <h2 className='text-2xl font-bold'>Selected Players</h2>
            }
          </div>

          <div className=' flex gap-5 items-center'>
            <button
              onClick={() => {
                handleIsAvailable(true);
              }}
              className='btn'>Available</button>
            <button

              onClick={() => {
                handleIsSelected(true);
              }}


              className='btn'>Selected(0)</button>
          </div>
        </div>

        {
          available ? <Available></Available> : <Selected></Selected>
        }

      </main>
    </>
  )
}

export default App
