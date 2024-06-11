import { configureStore } from "@reduxjs/toolkit";
import compteurReducer from "../Components/CompteurSlice";

export const store = configureStore({
    reducer : {
        compteur : compteurReducer
    }
})