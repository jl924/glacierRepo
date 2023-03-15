import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  questionsAnswers: []
};

const questionsAnswersSlice = createSlice({
  name: 'questionsAnswers',
  initialState,
  reducers: {
    questionsAnswersRequest(state) {
      state.isLoading = true;
    },
    questionsAnswersRequestSuccess(state, action) {
      state.questionsAnswers = action.payload.questionsAnswers;
      state.isLoading = false;
    }
  }
});

export default questionsAnswersSlice;