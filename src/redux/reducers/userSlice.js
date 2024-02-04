import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:{
        email:"",
        name:""
    }
}
const userSlice = createSlice({
    initialState,
    name:"userState",
    reducers:{
        setUserData:(state,action)=>{
            state.userInfo = {...state.userInfo , ...action.payload}
        },
        cleanUserData:(state,action)=>{
            state.userInfo = {}
        }
    }
})

export const  {setUserData,cleanUserData} = userSlice.actions;
export default userSlice.reducer;