import React from 'react'

import lang from '../Utlis/Languageconstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const lan_code=useSelector(store=>store.config.language)
  return (
    <div className='flex justify-center py-[10%]'>
        <form className='bg-black w-1/2 grid grid-cols-12  ' >
        <input className='p-4 m-4 col-span-9' type='text' placeholder={lang[lan_code].gptsearchplaceholder}></input>
        <button className='text-white bg-red-700 py-2 px-4 my-6 mx-6 rounded-lg col-span-3'>{lang[lan_code].search}</button>
      </form>
      
    </div>
  )
}

export default GptSearchBar;
