import { useEffect } from "react";
import { addTrailerVideo } from "../Utlis/movieSlice";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../Utlis/constant"

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const getTrailerVideo=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
        const  json =await data.json();
        //console.log(json);
        const filter=json.results.filter((video)=>video.type==="Trailer");
        const trailer=filter.length?filter[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getTrailerVideo();
    },[])
};
export default useMovieTrailer;