import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:'movies',
        initialState:{
            nowPlaying:null,
            popularMovies:null,
            trailerVideo:null,
            trendingMovies:null,
            upcomingMovies:null,
        },
        reducers:{
            addNowPlaying:(state,action)=>{
                state.nowPlaying=action.payload;

            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies=action.payload;

            },
            addTrendingMovies:(state,action)=>{
                state.trendingMovies=action.payload;

            },
            addUpcomingMovies:(state,action)=>{
                state.upcomingMovies=action.payload;
            }
        }


})

export const {addNowPlaying,addTrailerVideo,addPopularMovies,addTrendingMovies,addUpcomingMovies} =movieSlice.actions;
export default movieSlice.reducer;