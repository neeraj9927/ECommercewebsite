import { configureStore } from "@reduxjs/toolkit";
import  cart  from "./feater";


 export const store = configureStore({
    reducer:{
        allCartData:cart,
    },
});