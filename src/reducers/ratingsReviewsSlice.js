import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewsLoading: false,
  metaLoading: false,
  meta: [],
  ratingsReviews: [
    {
      review_id: 1277405,
      rating: 5,
      summary: "If this doesn't work we're up a creek.",
      recommend: false,
      response: null,
      body: "If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.If this doesn't work we're up a creek.",
      date: "2022-10-28T00:00:00.000Z",
      reviewer_name: "Jack",
      helpfulness: 10,
      photos: [],
    },
    {
      review_id: 1277713,
      rating: 3,
      summary: "forArtur",
      recommend: true,
      response: null,
      body: "Hawkwing's armies ride across the land again reclaiming the lands which are rightfully belonging to the Empress and preparation for the final battle",
      date: "2022-12-08T00:00:00.000Z",
      reviewer_name: "da'morat",
      helpfulness: 2,
      photos: [],
    },
    {
      review_id: 1277925,
      rating: 3,
      summary: "test",
      recommend: true,
      response: null,
      body: "test test test test test test test test test test test test ",
      date: "2022-12-13T00:00:00.000Z",
      reviewer_name: "test",
      helpfulness: 2,
      photos: [
        {
          id: 2456868,
          url: "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670966521/qzzbo01sjmgrbnyu0qhi.jpg",
        },
      ],
    },
    {
      review_id: 1277691,
      rating: 4,
      summary: "this is an amazing product ",
      recommend: false,
      response: null,
      body: "Why it no update the newest one when I do a pull request plz let me fill a review :( ahhhhhhhh",
      date: "2022-12-06T00:00:00.000Z",
      reviewer_name: "calvin testing",
      helpfulness: 1,
      photos: [
        {
          id: 2456761,
          url: "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
        },
      ],
    },
    {
      review_id: 1277452,
      rating: 3,
      summary: "best purchase",
      recommend: true,
      response: null,
      body: "testing this out to see what the data is like that is being posted",
      date: "2022-11-03T00:00:00.000Z",
      reviewer_name: "brian11",
      helpfulness: 0,
      photos: [
        {
          id: 2456666,
          url: "http://res.cloudinary.com/dmmzqckuu/image/upload/v1667506778/mwsvroray4fie6rakkqj.jpg",
        },
      ],
    },
    ,
  ],
};

const ratingsReviewsSlice = createSlice({
  name: "ratingsReviews",
  initialState,
  reducers: {
    ratingsReviewsRequest(state) {
      state.reviewsLoading = true;
    },
    ratingsReviewsSuccess(state, action) {
      state.ratingsReviews = action.payload.ratingsReviews;
      state.reviewsLoading = false;
    },
    metaRequest(state) {
      state.metaLoading = true;
    },
    metaSuccess(state, action) {
      state.metaLoading = true;
      state.meta = action.payload.meta;
    },
  },
});

export const {
  ratingsReviewsRequest,
  ratingsReviewsSuccess,
  metaRequest,
  metaSuccess,
} = ratingsReviewsSlice.actions;
export default ratingsReviewsSlice.reducer;
