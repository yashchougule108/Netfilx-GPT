import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utlis/constant";
import { addTrendingMovies } from "../Utlis/movieSlice";
import { useEffect } from "react";

const useTrendingMovies=()=>{
    const dispatch=useDispatch();
    const getTrendingMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        dispatch(addTrendingMovies(json.results));

    }
    useEffect(()=>{
        getTrendingMovies();
    },[])
};

export default useTrendingMovies;