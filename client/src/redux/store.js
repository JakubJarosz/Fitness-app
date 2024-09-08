import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/auth";

export const store = configureStore({
    reducer: {
        authuser: authSlice,
    }
})