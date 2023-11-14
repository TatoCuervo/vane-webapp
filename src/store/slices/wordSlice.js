import { createSlice } from "@reduxjs/toolkit";

// NOTE: sample Redux store slice config. Just a mutable array of words (string).

const wordSlice = createSlice({
  name: "word",
  initialState: [],
  reducers: {
    addWord(state, action) {
      state.push(action.payload);
    },
    removeWord(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    //TODO: add a 'reset words' reducer
  },
});

export const { addWord, removeWord } = wordSlice.actions;
export const wordReducer = wordSlice.reducer;
