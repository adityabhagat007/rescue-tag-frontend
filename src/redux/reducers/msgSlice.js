import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show:false,
    type:"",
    msg:"",
    statusCode:null
}

const msgSlice = createSlice({
    initialState,
    name:"msgState",
    reducers:{
        setMessage:(state,action)=>{
            const {type,msg,statusCode} = action.payload;
            state.show = true;
            state.type = type;
            state.msg = msg;
            state.statusCode = statusCode
        },
        cleanMessage:(state,action)=>{
            state.show = false;
        }
    }
})

export const  {setMessage,cleanMessage} = msgSlice.actions;
export default msgSlice.reducer;