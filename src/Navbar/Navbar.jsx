import React from 'react'
import Hinata from "../assets/photos/Hinata.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    //parent screen
    <div className='w-full bg-gray-500 h-screen flex'>
        <nav className='h-16 bg-amber-50 w-full flex justify-between items-center'>
            {/* left section */}
            <div className=''>
                
                <img src={Hinata} alt=""
                className='w-18 h-16' />
            </div>
            {/* middle section */}
            <div className='flex justify-center gap-x-3'>
                <div className='cursor-pointer border-2 px-5 hover:text-blue-800 font-semibold underline bg-blue-300 rounded-lg '>Home</div>
                <div className='cursor-pointer hover:text-orange-800 font-semibold underline'>Gallery</div>
                <div className='cursor-pointer hover:text-red-800 font-semibold underline'>Contacts</div>
                <div className='cursor-pointer hover:text-green-800 font-semibold underline'>About Us</div>
            </div>
            {/* right section */}
            <div className='cursor-pointer hover:'>
                <Link to="https://www.google.com/"><button className='bg-blue-500 px-5 py-2 text-white font-semibold rounded-lg mr-5'>Google</button> 
                </Link>
                
            </div>

        </nav>
        
    </div>
  )
}

export default Navbar