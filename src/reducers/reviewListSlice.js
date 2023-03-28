import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollFromTop: 0,
  reviewListScrolling: false,
};

const reviewListSlice = createSlice({
  name: "reviewList",
  initialState,
  reducers: {
    scrollFromTopSet(state, action) {
      state.scrollFromTop = action.payload.scrollFromTop;
    },
    reviewListScrollingSet(state, action) {
      state.reviewListScrolling = action.payload.scrolling;
    },
  },
});

export const { scrollFromTopSet, reviewListScrollingSet } =
  reviewListSlice.actions;
export default reviewListSlice.reducer;
