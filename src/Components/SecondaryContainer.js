import { useSelector } from "react-redux";
import MovieList from "./MovieList";



const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  //console.log(movies.nowPlaying)
  
  return movies.nowPlaying && (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 px-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies?.nowPlaying}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Trending"} movies={movies?.trendingMovies}/>
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer;
