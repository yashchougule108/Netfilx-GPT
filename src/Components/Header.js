import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utlis/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
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
  return (
    <div className=' w-full px-8 py-2 absolute z-10 bg-gradient-to-b from-black flex justify-between'>
      <img src='https://imgs.search.brave.com/wgBHIIfgssVBtfwYC227BBTnm530qhqvzVGm1YSiFgg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw' alt='logo'></img>
      {usernew&&<div className='flex'>
        <img className='w-8 h-8 my-8' src={usernew?.photoURL} alt='logo'></img>
        <button className='text-white m-2' onClick={handleLogout}>Logout</button>
      </div>
      }
    </div>

  )
}

export default Header
