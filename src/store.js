import productsSlice from './reducers/productsSlice.js';
import cartSlice from './reducers/cartSlice.js';
import questionsAnswersSlice from './reducers/questionsAnswersSlice.js';
import ratingsReviewsSlice from './reducers/ratingsReviewsSlice.js';
import selectedProductSlice from './reducers/selectedProductSlice.js';
import { configureStore } from '@reduxjs/toolkit';

const productsReducer = productsSlice.reducer;
const cartReducer = cartSlice.reducer;
const questionsAnswersReducer = questionsAnswersSlice.reducer;
const ratingsReviewsReducer = ratingsReviewsSlice.reducer;
const selectedProductReducer = selectedProductSlice.reducer;

const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer,
    questionsAnswersReducer,
    ratingsReviewsReducer,
    selectedProductReducer
  },
  devTools: true,
})

export {
  store
}