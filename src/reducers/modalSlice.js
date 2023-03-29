import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  support: { isShown: false, message: "" },
  newReview: { isShown: false },
  photo: { clickedPhoto: "" },
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setSupportMessage(state, action) {
      state.support.message = action.payload.message;
    },
    setSupportShown(state, action) {
      state.support.isShown = action.payload;
    },
    setClickedPhoto(state, action) {
      state.photo.clickedPhoto = action.payload.clickedPhoto;
    },
    toggleReviewModal(state) {
      state.newReview.isShown = !state.newReview.isShown;
    },
    closeTopMostModal(state) {
      console.log(JSON.stringify(state));
      if (state.support.isShown) {
        state.support.isShown = false;
      } else if (state.newReview.isShown) {
        state.newReview.isShown = false;
      } else if (state.photo.clickedPhoto !== "") {
        state.photo.clickedPhoto = "";
      }
    },
  },
});

export const {
  setSupportMessage,
  setSupportShown,
  toggleReviewModal,
  setClickedPhoto,
  closeTopMostModal,
} = modalSlice.actions;
export default modalSlice.reducer;
