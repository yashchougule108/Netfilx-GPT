
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";



const MainContainer=()=>{
    const movies=useSelector(store=>store.movies?.nowPlaying);
    if(!movies) return;
    const trend=movies[0];
    //console.log(trend);

    const {original_title,overview,id}=trend;
   

    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>

        </div>
    )
}

export default MainContainer;