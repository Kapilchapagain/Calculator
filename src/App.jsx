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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginpage from './todolist/loginform/Loginform'

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
      <BrowserRouter>
      <Routes>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/todolist' element={<Todolist/>}/>
        <Route path='/' element={<Loginpage/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Navbar/>
      <Counter/>
      <Calculator/>
      <Todolist/> */}
    </>
  )
}

export default App
