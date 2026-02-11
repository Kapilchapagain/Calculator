import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Navbar1 from './Navbar/Navbar1'
import Navbar2 from './Navbar/Navbar2'
import Counter from './counter/counter'
import Calculator from './calculator/Calculator'
import Todolist from './todolist/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <div className='w-screen h-screen bg-blue-600 flex justify-center items-center  gap-x-5'>
        <div className='bg-amber-100 h-[10%] w-[10%]'>

        </div>
          <div className='bg-amber-100 h-[10%] w-[10%]'>

        </div>
          <div className='bg-amber-100 h-[10%] w-[10%]'>

        </div>
          <div className='bg-amber-100 h-[10%] w-[10%]'>

        </div>
          <div className='bg-amber-100 h-[10%] w-[10%]'>

        </div>

      </div> */}
      {/* <Calculator/> */}
      <Todolist/>
    </>
  )
}

export default App
