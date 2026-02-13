import React, { useState } from 'react'



const Loginpage = () => {
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
        const[repeatpassword, setrepeatPassword]= useState("");

        const[errors,setErrors] =useState({});
     
       const handleSubmit = (e) => {
  e.preventDefault();

  let error = {};

  if (!name.trim()) {
    error.name = "name is required*";
  }

  if (!email.trim()) {
    error.email = "email is required*";
  }

  if (password.length < 5) {
    error.password = "password must be at least 5 characters*";
  }

  if (repeatpassword.length < 5) {
    error.repeatPassword = "password must be at least 5 characters*";
  }

  if (password !== repeatpassword) {
    error.repeatPassword = "Passwords do not match";
  }

  setErrors(error);
  console.log(errors);

  if (Object.keys(error).length === 0) {
    alert("Validation passed");
  }
};

    
  return (
    <div className='bg-blue-400 h-screen w-screen flex justify-center items-center '>
        <form onSubmit={handleSubmit} className='min-h-160 w-160 bg-white rounded-2xl flex flex-col justify-center items-center '>
            <div className='flex justify-center'><h1 className='text-2xl font-bold '>CREATE ACCOUNT</h1></div>
            <div className='flex flex-col  justify-center mt-'>
                <span>Name</span>
                <p className='text-red-500'>{
                    errors?.name?errors.name:""
                    }</p>
            <input value={name} type='text' onChange={(e) => setName(e.target.value)} className='px-3  w-120 h-13 rounded-xl  border-2 text-xl' placeholder='  Your Name'></input></div>
            <div className='flex flex-col  justify-center mt-4'><span>Email</span>
            <p className='text-red-500' >{
                errors?.email?errors.email:""
            }</p>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='px-3 rounded-xl  w-120 h-13  border-2 text-xl' placeholder='  Your Email'></input></div>
            <div className='flex flex-col  justify-center mt-4'><span>Password</span>
            <p className='text-red-500'>{
                errors?.password?errors.password:""
            }</p>
            <input value={password} onChange={(e) => setPassword (e.target.value)} type='password' className='px-3 rounded-xl w-120 h-13  border-2 text-xl' placeholder='  Password'></input></div>
            <div className='flex flex-col  justify-center mt-4'><span>Password</span> 
                <p className='text-red-500'>{
                    errors?.repeatPassword?errors.repeatPassword:""
                    }</p>
                
                <input  value={repeatpassword} onChange={(e) => setrepeatPassword(e.target.value)}type='password' className='px-3  rounded-xl w-120 h-13  border-2 text-xl' placeholder='  Repeat Your Password'></input></div>
            <div className='flex gap-1 mt-2 mr-43'>
                <input type='checkbox' className='flex mt-0.5'/>
                <p>I agree all statements in
                    <span className='underline cursor-pointer text-gray-600 hover:text-gray-900'> terms of service</span>
                </p>
                </div>
            <div className='flex justify-center mt-3'><input type='submit'value="Sign Up" className='w-120 h-12 rounded-2xl cursor-pointer hover:bg-blue-600 text-white font-bold text-2xl bg-blue-500'/></div>
            <div className='flex justify-center mt-4'><p>Have already an account ?
                <span className='underline cursor-pointer text-gray-600 font-bold hover:text-gray-900'> Login here</span>
                </p></div>
        </form>
      
    </div>
  )
}

export default Loginpage