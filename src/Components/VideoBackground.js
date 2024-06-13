
import { useSelector } from "react-redux";
import  useMovieTrailer  from "../Hooks/useMovieTrailer";


const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
    
  return (
    <div>
        <iframe  src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=EmhUUDJ3nP_eYLZb"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      
    </div>
  )
}

export default VideoBackground
