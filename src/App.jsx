import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='w-11/12 mx-auto pt-4'>
             <h1 className='text-xl font-bold'>Welcome Dream11 Cricket Team</h1>
             <button className='btn'>Lets Start</button>
      </header>
    </>
  )
}

export default App
