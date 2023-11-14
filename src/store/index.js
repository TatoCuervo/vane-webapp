import { configureStore } from "@reduxjs/toolkit";
import { wordReducer, addWord, removeWord } from "./slices/wordSlice";

// NOTE: Creates the store with combined reducers
// and use it as a centralized export point for store related stuff to components.

const store = configureStore({
  reducer: {
    words: wordReducer,
  },
});

export { store };
export { addWord, removeWord };
