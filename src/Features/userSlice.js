import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../axios";
import requests from "../request";
export const getBanner = createAsyncThunk('getbanner',async (thunk)=>{
    const response = await axios.get(requests.fetchNetflixOrginals);
    console.log("response",response.data.results)
    return response.data.results
})   
export const userSlice = createSlice(
{
    name:"user",
    initialState:{
        user:[],
        banner:[],
        loading:false,
        error:""
    },
    reducers:{
        login: (state,action)=>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user= false;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getBanner.pending,(state,payload)=>{
            state.loading=true
        })
        builder.addCase(getBanner.fulfilled,(state,payload)=>{
            state.banner=payload.payload;
            state.loading=false;
        })
        builder.addCase(getBanner.rejected,(state,payload)=>{
            state.loading=false;
            state.error="data fetch unsuccessful"
        })
    }

});
export const {login,logout} = userSlice.actions;

export default userSlice.reducer;

