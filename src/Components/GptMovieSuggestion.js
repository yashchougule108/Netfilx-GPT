import React from 'react'
import { useSelector } from 'react-redux'


import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const {movieNames,gpt_moviesList}=useSelector(store=>store.gpt) ;
  if(!movieNames) return null;
  
  return (
    <div className='bg-black text-white bg-opacity-90'>

      <div>
      {movieNames.map((movieNames,index)=><MovieList key={movieNames} title={movieNames} movies={gpt_moviesList[index]}/>)
      }
      </div>
     
    </div>
  )
}

export default GptMovieSuggestion
