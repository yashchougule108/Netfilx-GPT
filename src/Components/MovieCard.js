import React from 'react'
import { IMG_CDN_URL } from '../Utlis/constant';

const MovieCard = ({PosterPath}) => {
    //console.log(poster_path);
    if(!PosterPath) return null;
  return (
    <div className='pr-2 w-48'>
        <img src={IMG_CDN_URL+PosterPath} alt='poster'></img>
      
    </div>
  )
}

export default MovieCard;
