import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  products: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsRequest(state) {
      state.isLoading = true;
    },
    productsRequestSuccess(state, action) {
      state.products = action.payload.products;
      state.isLoading = false;
    }
  }
});

export default productsSlice;