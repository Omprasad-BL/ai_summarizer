import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { config } from "dotenv";
import { articleApi } from "./Article";

export const store = configureStore({
    reducer:{
            [articleApi.reducerPath]:articleApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(articleApi.middleware)
})