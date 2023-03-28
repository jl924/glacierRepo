import productsSlice from "./reducers/productsSlice.js";
import cartSlice from "./reducers/cartSlice.js";
import questionsAnswersSlice from "./reducers/questionsAnswersSlice.js";
import ratingsReviewsReducer from "./reducers/ratingsReviewsSlice.js";
import selectedProductSlice from "./reducers/selectedProductSlice.js";
import reviewListReducer from "./reducers/reviewListSlice.js";
import clickSlice from "./reducers/clickSlice.js";
import photoModalReducer from "./reducers/photoModalSlice";
import { configureStore } from "@reduxjs/toolkit";

const clickReducer = clickSlice.reducer;
const productsReducer = productsSlice.reducer;
const cartReducer = cartSlice.reducer;
const questionsAnswersReducer = questionsAnswersSlice.reducer;
const selectedProductReducer = selectedProductSlice.reducer;
const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer,
    questionsAnswersReducer,
    ratingsReviewsReducer,
    selectedProductReducer,
    reviewListReducer,
    clickReducer,
    photoModalReducer,
  },
  devTools: true,
});

export { store };
