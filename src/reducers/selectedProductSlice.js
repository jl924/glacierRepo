import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  selectedProduct: {}
};

const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    selectedProductRequest(state) {
      state.isLoading = true;
    },
    selectedProductRequestSuccess(state, action) {
      state.selectedProduct = action.payload.selectedProduct;
      state.isLoading = false;
    }
  }
});

export default selectedProductSlice;