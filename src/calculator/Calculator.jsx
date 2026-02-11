import React, { useState } from 'react'

const Calculator = () => {
    const[input,setInput]=useState("");
    const[result,setResult]=useState("");
    

    const handleClick = (value)=> setInput((prev)=>prev + value);
    console.log(input);
    const deleteLast=()=>setInput(input.slice(0,-1));
    const clear=()=>{
        setInput("");
        setResult("")};

   console.log(result);
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-blue-500'>
        <div className='h-135 w-110 bg-black flex flex-col items-center rounded-2xl border-20 '>
            <div className=' flex bg-gray-400 rounded-2xl h-30 w-100 justify-end items-end m-3 overflow-x-hidden'>
                <div className=' h-22 flex'>{input ||0}</div>
                <div className=' h-15 text-5xl '>{result||0}</div>
            </div>
            <div className='flex flex-col justify-center items-center m-2 bg-amber-950 rounded-xl w-100'>
                <div className='flex gap-3 m-2 items-start'>
                    <button onClick={clear} className=' bg-gray-500 rounded-xl w-47 h-14 font-semibold  text-2xl cursor-pointer hover:bg-green-500'>Ac</button>
                    <button onClick={deleteLast} className='bg-gray-500 rounded-xl w-22 h-14  font-semibold  cursor-pointer hover:bg-green-500'>Del</button>
                    <button onClick={()=>handleClick("/")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  cursor-pointer  hover:bg-amber-500'>/</button>
                </div>
                <div className='flex gap-3 m-2 items-start'>
                    <button onClick={()=>handleClick("7")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>7</button>
                    <button onClick={()=>handleClick("8")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>8</button>
                    <button onClick={()=>handleClick("9")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>9</button>
                    <button onClick={()=>handleClick("*")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold text-2xl cursor-pointer hover:bg-amber-500'>x</button>
                </div>
                <div className='flex gap-3 m-2 items-start'>
                    <button onClick={()=>handleClick("4")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>4</button>
                    <button onClick={()=>handleClick("5")} className='bg-gray-500 rounded-xl w-22  h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>5</button>
                    <button onClick={()=>handleClick("6")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>6</button>
                    <button onClick={()=>handleClick("-")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-amber-500'>-</button>
                </div>
                <div className='flex gap-3 m-2 items-start'>
                    <button onClick={()=>handleClick("1")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>1</button>
                    <button onClick={()=>handleClick("2")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>2</button>
                    <button onClick={()=>handleClick("3")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>3</button>
                    <button onClick={()=>handleClick("+")} className='bg-gray-500 rounded-xl w-22 h-14  font-semibold text-2xl cursor-pointer hover:bg-amber-500'>+</button>
                </div>
                <div className='flex gap-3 m-3 items-start'>
                    <button onClick={()=>handleClick("0")} className='bg-gray-500 rounded-xl w-47 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>0</button>
                    <button onClick={()=>handleClick(".")} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-white'>.</button>
                    <button onClick={()=>setResult(eval(input).toString())} className='bg-gray-500 rounded-xl w-22 h-14 font-semibold  text-2xl cursor-pointer hover:bg-amber-500'>=</button>
                </div>
            </div>
        </div>

        

    </div>
  )
}

export default Calculator