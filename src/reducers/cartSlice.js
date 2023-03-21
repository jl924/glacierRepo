import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    }
  }
});

export const { addItem } = cartSlice.actions;
export default cartSlice;


// cartRequest(state) {
//   state.isLoading = true;
// },
// cartRequestSuccess(state, action) {
//   state.cart = action.payload.cart;
//   state.isLoading = false;
// }