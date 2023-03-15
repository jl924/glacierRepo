import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartRequest(state) {
      state.isLoading = true;
    },
    cartRequestSuccess(state, action) {
      state.cart = action.payload.cart;
      state.isLoading = false;
    }
  }
});

export default cartSlice;