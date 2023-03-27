import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  clicks: {},
};

const clickSlice = createSlice({
  name: "click",
  initialState,
  reducers: {
    addClick(state, action) {
      if(state.clicks[action.payload.element]) {
        state.clicks[action.payload.element] += 1
      } else {
        state.clicks[action.payload.element] = 1
      }
    },
  },
});

export const { addClick } = clickSlice.actions;
export default clickSlice;
