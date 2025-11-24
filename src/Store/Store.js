import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/cards/cardSlice";

export default configureStore({
    reducer:reducer
})