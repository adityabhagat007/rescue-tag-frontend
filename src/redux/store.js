import { configureStore } from "@reduxjs/toolkit";
import msgSlice from "./reducers/msgSlice";
import userSlice from "./reducers/userSlice";



export const Store = configureStore({
    reducer:{
        notification:msgSlice,
        userState:userSlice,
    }
})
