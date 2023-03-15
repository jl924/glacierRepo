import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  ratingsReviews: []
};

const ratingsReviewsSlice = createSlice({
  name: 'ratingsReviews',
  initialState,
  reducers: {
    ratingsReviewsRequest(state) {
      state.isLoading = true;
    },
    ratingsReviewsSuccess(state, action) {
      state.ratingsReviews = action.payload.ratingsReviews;
      state.isLoading = false;
    }
  }
});

export default ratingsReviewsSlice;