import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sorting: "relevant",
  showMore: false,
  reRender: false,
  reviewsLoading: false,
  metaLoading: false,
  filteredResultsNum: 0,
  textFilter: "",
  ratingFilter: [],
  filteredReviews: [],
  meta: {},
  characteristicLabels: {
    Size: ["Too small", "Perfect", "Too large"],
    Width: ["Too narrow", "Perfect", "Too wide"],
    Comfort: ["Uncomfortable", "Perfect"],
    Quality: ["Poor", "Great"],
    Length: ["Runs short", "Perfect", "Runs long"],
    Fit: ["Runs tight", "Perfect", "Runs baggy"],
  },
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
    sortingSet(state, action) {
      state.sorting = action.payload.sorting;
    },
    reRenderRequest(state) {
      state.reRender = true;
    },
    reRenderSuccess(state) {
      state.reRender = false;
    },
    toggleShowMore(state) {
      state.showMore = !state.showMore;
    },
    incrementHelpfulness(state, action) {
      var i;
      const review = state.ratingsReviews.filter((review, index) => {
        if (review.review_id === action.payload.review_id) {
          i = index;
          return true;
        }
      })[0];
      review.helpfulness++;
      state.ratingsReviews.splice(i, 1, JSON.parse(JSON.stringify(review)));
    },
    removeResult(state, action) {
      var i;
      state.ratingsReviews.forEach((review, index) => {
        if (review.review_id === action.payload.review_id) {
          i = index;
        }
      });
      state.ratingsReviews.splice(i, 1);
    },
    addRatingFilter(state, action) {
      state.ratingFilter.push(action.payload.rating);
    },
    removeRatingFilter(state, action) {
      const index = state.ratingFilter.indexOf(action.payload.rating);
      if (index !== -1) state.ratingFilter.splice(index, 1);
    },
    resetRatingFilter(state, action) {
      state.ratingFilter = [];
    },
    setTextFilter(state, action) {
      state.textFilter = action.payload.textFilter;
    },
    setFilteredResultsNum(state, action) {
      state.filteredResultsNum = action.payload.filteredResultsNum;
    },
    setFilteredReviews(state, action) {
      state.filteredReviews = action.payload.filteredReviews;
    },
  },
});

export const {
  ratingsReviewsRequest,
  ratingsReviewsSuccess,
  metaRequest,
  metaSuccess,
  sortingSet,
  reRenderSuccess,
  reRenderRequest,
  incrementHelpfulness,
  removeResult,
  toggleShowMore,
  addRatingFilter,
  removeRatingFilter,
  resetRatingFilter,
  setTextFilter,
  setFilteredResultsNum,
  setFilteredReviews,
} = ratingsReviewsSlice.actions;
export default ratingsReviewsSlice.reducer;
