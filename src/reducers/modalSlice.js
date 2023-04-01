import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  support: { isShown: false, message: "" },
  newReview: { isShown: false },
  photo: { clickedPhoto: "" },
  theme: { theme: "", isShown: false },
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
      } else if (state.theme.isShown) {
        state.theme.isShown = false;
      }
    },
    setThemeShown(state, action) {
      state.theme.isShown = action.payload;
    },
    setTheme(state, action) {
      state.theme.theme = action.payload.theme;
    },
  },
});

export const {
  setSupportMessage,
  setSupportShown,
  toggleReviewModal,
  setClickedPhoto,
  closeTopMostModal,
  setThemeShown,
  setTheme,
} = modalSlice.actions;
export default modalSlice.reducer;
