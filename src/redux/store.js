import { configureStore } from "@reduxjs/toolkit";
import msgSlice from "./reducers/msgSlice";



export const Store = configureStore({
    reducer:{
        notification:msgSlice
    }
})
