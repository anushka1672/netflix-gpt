import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        searchedMovies:[]
    },
    reducers:{
        ToggleGptButton:(state)=>{
           state.showGptSearch = !state.showGptSearch 
        },
        AddSearchedMovies:(state,action)=>{
          state.searchedMovies = action.payload
        }
    }
})


export const {ToggleGptButton, AddSearchedMovies} = gptSlice.actions;
export default gptSlice.reducer;