import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./list";

export const store = configureStore({
    reducer: {
        product: productReducer,
    }
});