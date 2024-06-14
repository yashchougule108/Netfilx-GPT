import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTrendingMovies from '../Hooks/useTrendingMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  const showGpt=useSelector(store=>store.gpt.toggleGpt);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
   
  return (
    <div>
      <Header/>
      {showGpt?<GptSearch/>:<><MainContainer/><SecondaryContainer/></>

      }
      
    </div>
  )
}

export default Browse
