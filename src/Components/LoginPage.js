import React, { useRef, useState } from 'react'
import Header from './Header.js'
import { checkValidation } from '../Utlis/validation.js';

const LoginPage = () => {
  const [isSignIn ,setIsSignIn]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleState=()=>{
    setIsSignIn(!isSignIn);
  }

  const handleButtonClick=()=>{
    //validate the form data
    
    //console.log(email.current.value);
    //console.log(password.current.value );
    const message=checkValidation(email.current.value,password.current.value);
    //console.log(message);
    setErrorMessage(message);


  }



  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bg-img'></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='text-center text-3xl py-4'>{isSignIn?"SIGN IN":"SIGN UP"}</h1>
        {!isSignIn?<input className='p-3 m-4 w-full bg-gray-600 rounded-md' type='email' placeholder='Enter your email'></input>:""}
        <input ref={email} className='p-3 m-4 w-full bg-gray-600 rounded-md' type='email' placeholder='Enter your email'></input>
        <input ref={password} className='p-3 m-4 w-full bg-gray-600 rounded-md' type='password' placeholder='password'></input>
        <p  className='px-4 text-red-700'>{errorMessage}</p>
        <button type='submit' className='text-white bg-red-500 p-3 my-6 mx-4 w-full rounded-md' onClick={handleButtonClick}>{isSignIn?"SIGN IN":"SIGN UP"}</button>
        <p className='p-3 m-4 cursor-pointer' onClick={handleState} >{isSignIn?"New to netflix ? Signup Now":"Allready Registered? Sign In"}</p>
      </form>
    </div>
  )
}

export default LoginPage
