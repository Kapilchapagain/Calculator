import React, { useState } from 'react'

const Todolist = () => {

    const [todos,setTodos]=useState([]);
    const [val,setval]=useState('');
    console.log(val);


    const addTodo=(e)=>{
        console.log("Function triggered")
        e.preventDefault();
        if(!val.trim()) return;

         
           const newTodo = {id:1,text:val}
        

         setTodos([...todos,newTodo]);
    }
    const deleteTodo=(id)=>{
        setTodos(todos.filter(ind=>ind.id !=id));
    }
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-blue-300 '>
        <div className='h-100 w-100 justify-center items-center bg-white rounded-xl'>
            <div className='h-20 w-100 bg-blue-500 flex flex-col text-white rounded-t-xl'>
                <p className='m-2 font-bold text-2xl'>Task Master</p>
                <p className='ml-2 '>Organize your day</p>
            </div>
            <div>
                <form onSubmit={addTodo} className='mt-5 ml-4 gap-2 flex'>
                    <input className='bg-gray-200 h-10 w-70 rounded-sm mt-0.5' type="text"
                     placeholder=' Enter the tasks you want to do'
                     onChange={(e)=>setval(e.target.value)}
                    />
                    <button type='submit' className='h-5 w-20 bg-blue-500 border-2 p-5 py-5 rounded-sm text-white flex items-center'>Add</button>
                </form>
            </div>
            <div className='flex mt-40 ml-5 gap-1 justify-center items-center'>
                <div>
                    {todos.length===0?
                    <p className='p-10 text-center text-gray-400'>No task added yet</p>
                    :
                    todos.map((e)=>
                        <p>{e.text}</p>
                    )
                    }
                </div>

                <button onClick={deleteTodo} className='h-5 w-20  bg-blue-500 border-2 p-5 rounded-sm text-white flex items-center justify-center'>Delete</button>
                
            </div>
        </div>


    </div>
  )
}

export default Todolist