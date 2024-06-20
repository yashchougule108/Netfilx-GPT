import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../Utlis/constant';

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10 ' >
        <img className='h-screen md:h-full object-cover' src={BG_URL} alt='bg-img'></img>
      </div>
    <div className='pt-[30%] md:pt-0' >
      
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch;
