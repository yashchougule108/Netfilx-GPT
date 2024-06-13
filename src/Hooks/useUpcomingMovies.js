import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utlis/constant"
import { addUpcomingMovies } from "../Utlis/movieSlice";
import { useEffect } from "react";

const UpcomingMovies=()=>{
    const dispatch=useDispatch();
    const getUpcomingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default UpcomingMovies;