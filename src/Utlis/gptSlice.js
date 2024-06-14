import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        toggleGpt:false,
    },
    reducers:{
        setToggleGpt:(state)=>{
            state.toggleGpt=!state.toggleGpt;
        }
    }
});

export const{setToggleGpt}=gptSlice.actions;
export default gptSlice.reducer;