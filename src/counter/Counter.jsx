import React, { useState } from 'react'

const  Counter= () => {
    const[value,setValue]=useState(0);
  return (
    <div className='h-screen w-screen bg-gray-500 flex items-center justify-center'>
        <div className='h-100 w-120 bg-white flex justify-center items-center flex-col'>
            <div className=' h-20 text-5xl'>Counter App</div>
            <div className='h-20 text-5xl'>{value}</div>
            
            <div className='flex gap-6 '>
                <button onClick={()=>setValue(value+1)} className='px-5 py-3 rounded-sm bg-green-400'>Increment</button>
                <button onClick={()=>setValue(value-1)} className='px-5 py-3 rounded-sm bg-red-400'>Decrement</button>
                <button onClick={()=>setValue(0)} className='px-5 py-3 rounded-sm bg-blue-400'>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter