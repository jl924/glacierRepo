import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedPhoto: "",
};

const photoModalSlice = createSlice({
  name: "photoModal",
  initialState,
  reducers: {
    setClickedPhoto(state, action) {
      state.clickedPhoto = action.payload.clickedPhoto;
    },
  },
});

export const { setClickedPhoto } = photoModalSlice.actions;
export default photoModalSlice.reducer;
