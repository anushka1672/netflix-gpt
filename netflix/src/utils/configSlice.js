import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        Lang: "en"
    },
    reducers:{
      setSelectedLang:(state,action)=>{
           state.Lang=action.payload
      }
    }
})


export const {setSelectedLang} = configSlice.actions;
export default configSlice.reducer;



