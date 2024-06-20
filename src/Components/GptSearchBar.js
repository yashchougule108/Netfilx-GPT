import React, { useRef } from 'react'
import lang from '../Utlis/Languageconstants';
import { useDispatch, useSelector } from 'react-redux';


import { API_KEY, API_OPTIONS } from '../Utlis/constant';
import { addMovieResult } from '../Utlis/gptSlice';







const GptSearchBar = () => {
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(API_KEY);
  const lan_code=useSelector(store=>store.config.language)
  const search_txt=useRef(null);
  const dispatch=useDispatch();

  const searchMovie=async(movie)=>{
    
    const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+ "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json= await data.json();
    //console.log(json);
    
    
    return json.results;


  }

 const handleGptSearch= async (search_txt)=>{
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
  const movie_query="Act as a movie  Recommendation system and suggest some movies for the query"+search_txt.current.value+". only give me string of names of 5 movies ,comma seperated like the example given ahead. example result:Gadar, Sholey, Don, Golmaal, Koi Mil gaya";
  //const prompt = search_txt.current.value+"and  give only list of titles which is separated by comma";

  const result = await model.generateContent(movie_query);
  const response = await result.response;
  const text = response.text();
  //console.log(text);
  const array_of_movie_list=text.split(",");
  //console.log(array_of_movie_list);
  //it will search movie in tmdb search api
  const promise_array=array_of_movie_list.map((movie)=>searchMovie(movie));
  // it will return promises
  const tmdbResults= await Promise.all(promise_array);
  // it will return promises after all promises are executed
  //console.log(tmdbResults);
  dispatch(addMovieResult({movieNames:array_of_movie_list,movieList:tmdbResults}));
  
 }



  return (
    <div className='flex justify-center py-[10%]'>
        <form className='bg-black w-1/2 grid grid-cols-12  ' onClick={(e)=>e.preventDefault()} >
        <input ref={search_txt} className='p-4 m-4 col-span-9' type='text' placeholder={lang[lan_code].gptsearchplaceholder}></input>
        <button className='text-white bg-red-700 py-2 px-4 my-6 mx-6 rounded-lg col-span-3' onClick={()=>handleGptSearch(search_txt)}>{lang[lan_code].search}</button>
      </form>
    
      
    </div>
  )
}

export default GptSearchBar;
