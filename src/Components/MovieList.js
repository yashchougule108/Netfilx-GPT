import React from 'react'
import MovieCard from './MovieCard';
import '../style.css';

const MovieList = ({title,movies}) => {
    

  return (
    <div className='px-6'>
      <h1 className=' text-lg md:text-3xl text-white py-4'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
      <div className='flex '>
        {movies?.map(movie=><MovieCard key={movie.id} PosterPath={movie.poster_path}/>)}
        
      </div>
      </div>
    </div>
  )
}

export default MovieList;
