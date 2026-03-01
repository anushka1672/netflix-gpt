import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        trailerId:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
           state.nowPlayingMovies = action.payload
        },
        addTrailerId:(state,action)=>{
           state.trailerId = action.payload
        }

    }
    
})


export const{ addNowPlayingMovies,addTrailerId} = movieSlice.actions;
export default movieSlice.reducer;