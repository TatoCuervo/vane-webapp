import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/actions";

// NOTE: sample Redux store slice config. Just a mutable array of words (string).
// 'extraReducers' is used to listen to external actions (global or from another reducer)

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
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },
  },
});

export const { addWord, removeWord } = wordSlice.actions;
export const wordReducer = wordSlice.reducer;
