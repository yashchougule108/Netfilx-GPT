import React, { useEffect } from 'react'
import { setToggleGpt } from '../Utlis/gptSlice';
import { changeLanguage } from '../Utlis/configSlice';
import { addUser, removeUser } from '../Utlis/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utlis/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { LOGO, SUPPORTED_LANGUAGES } from '../Utlis/constant';



const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const usernew=useSelector(store=>store.user);
  const showGpt=useSelector(store=>store.gpt.toggleGpt);
  //console.log(usernew.photoURL);
  const handleNetflixGpt=()=>{
  dispatch(setToggleGpt());
  }
  const handleLogout=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
});
}
const handleChangeLang=(e)=>{
   dispatch(changeLanguage(e.target.value));
}
useEffect(()=>{
 const unsuscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
        
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      
      }
    });
    //unsuscibe when component unmounts
  return ()=>unsuscribe();
},[])
  return (
    <div className=' w-full px-8 py-2 absolute z-10 bg-gradient-to-b from-black flex justify-between'>
      <img src={LOGO} alt='logo'></img>
      {usernew&&<div className='flex'>
       {showGpt&& <select className='my-6 p-2 bg-black text-white'onChange={handleChangeLang}>
      {
        SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
      }
        </select>
      }
        <button className='py-2 my-7 mx-4  px-2 rounded-md text-white bg-purple-700' onClick={handleNetflixGpt}>{showGpt?"Homepage":"NetflixGPT→"}</button>
        <img className='w-8 h-8 my-8' src={usernew?.photoURL} alt='logo'></img>
        <button className='text-white m-2' onClick={handleLogout}>Logout</button>
      </div>
      }
    </div>

  )
}

export default Header
