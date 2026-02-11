import React from 'react'

const Navbar1 = () => {
  return (
    <div className='w-full h-screen flex '>
        <nav className='h-16 bg-black w-full flex justify-between items-center'>
            <div>
                <p>Logo</p>
                <img src="" alt="" />
            </div>

            <div className='text-white flex justify-center gap-12'>
                <div className='cursor-pointer hover:bg-red-500 rounded-sm px-3 py-2'>Home</div>
                <div className='cursor-pointer hover:bg-red-500 rounded-sm px-3 py-2'>Templates</div>
                <div className='cursor-pointer hover:bg-red-500 rounded-sm px-3 py-2'>Pages</div>
                <div className='cursor-pointer hover:bg-red-500 rounded-sm px-3 py-2'>Elements</div>
            </div>

            <div className='flex gap-6'>
                <button className='text-green-500 bg-white rounded-sm mr-5 px-3 py-2'>Buy Now</button>
                <button className='text-white bg-red-500 rounded-sm mr-5 px-3 py-2'>Discover</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar1