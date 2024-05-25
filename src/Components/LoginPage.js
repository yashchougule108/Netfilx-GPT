import React, { useState } from 'react'
import Header from './Header.js'

const LoginPage = () => {
  const [isSignIn ,setIsSignIn]=useState(true);
  const handleState=()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bg-img'></img>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='text-center text-3xl py-4'>{isSignIn?"SIGN IN":"SIGN UP"}</h1>
        {!isSignIn?<input className='p-3 m-4 w-full bg-gray-600 rounded-md' type='email' placeholder='Enter your email'></input>:""}
        <input className='p-3 m-4 w-full bg-gray-600 rounded-md' type='email' placeholder='Enter your email'></input>
        <input className='p-3 m-4 w-full bg-gray-600 rounded-md' type='password' placeholder='password'></input>
        <button type='submit' className='text-white bg-red-500 p-3 my-6 mx-4 w-full rounded-md'>{isSignIn?"SIGN IN":"SIGN UP"}</button>
        <p className='p-3 m-4 cursor-pointer' onClick={handleState} >{isSignIn?"New to netflix ? Signup Now":"Allready Registered? Sign In"}</p>
      </form>
    </div>
  )
}

export default LoginPage
