import { configureStore } from "@reduxjs/toolkit";
import verseSlice from "../features/verse/verseSlice";

const store = configureStore({
    reducer:{
        verse: verseSlice
    }
})


export default store;
