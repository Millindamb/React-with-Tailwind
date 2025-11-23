import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/todo/todoSlice";//importing the reducer form the todoSlice

export const Store=configureStore({
    reducer:reducer
})