import { useDispatch } from "react-redux";
import { addNowPlaying } from "../Utlis/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utlis/constant";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
  const movieList = async ()=> {
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
    const json=await data.json();
    dispatch(addNowPlaying(json.results));
    
  }
  useEffect(()=>{
    movieList();
  },[])
}

export default useNowPlayingMovies;