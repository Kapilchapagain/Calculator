import React from 'react'

const Todolist = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-blue-300 '>
        <div className='h-100 w-100 justify-center items-center bg-white rounded-xl'>
            <div className='h-20 w-100 bg-blue-500 flex flex-col text-white rounded-t-xl'>
                <p className='m-2 font-bold text-2xl'>Task Master</p>
                <p className='ml-2 '>Organize your day</p>
            </div>
            <div>
                <div className='mt-5 ml-4 gap-2 flex'>
                    <input className='bg-gray-200 h-10 w-70 rounded-sm mt-0.5' type="text" placeholder='Enter the tasks you want to do'/>
                    <button className='h-5 w-20 bg-blue-500 border-2 p-5 py-5 rounded-sm text-white flex items-center'>Add</button>
                </div>
            </div>
            <div className='flex mt-40 ml-5 gap-1'>
                <div className='h-10 w-70 bg-gray-200 rounded-sm mt-0.5'>Hello World </div>
                <button className='h-5 w-20  bg-blue-500 border-2 p-5 rounded-sm text-white flex items-center'>Delete</button>
                
            </div>
        </div>


    </div>
  )
}

export default Todolist