import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='w-11/12 mx-auto pt-4'>
            
             <Navbar></Navbar>
      </header>
    </>
  )
}

export default App
