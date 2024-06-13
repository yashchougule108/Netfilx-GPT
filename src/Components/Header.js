import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utlis/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utlis/userSlice';
import { LOGO } from '../Utlis/constant';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const usernew=useSelector(store=>store.user);
  //console.log(usernew.photoURL);
  const handleLogout=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
});
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
        <img className='w-8 h-8 my-8' src={usernew?.photoURL} alt='logo'></img>
        <button className='text-white m-2' onClick={handleLogout}>Logout</button>
      </div>
      }
    </div>

  )
}

export default Header
