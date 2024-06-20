import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        toggleGpt:false,
        gpt_moviesList:null,
        movieNames:null,
    },
    reducers:{
        setToggleGpt:(state)=>{
            state.toggleGpt=!state.toggleGpt;
        },
        addMovieResult:(state,action)=>{
            const{movieNames,movieList}=action.payload;
            state.gpt_moviesList=movieList;
            state.movieNames=movieNames;
        },
        clearMovieSlice:(state)=>{
            state.gpt_moviesList.length=0;
        }
    }
});

export const{setToggleGpt,addMovieResult ,clearMovieSlice}=gptSlice.actions;
export default gptSlice.reducer;