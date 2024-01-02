import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptPage: false,
    movieResults: null,
    loading: false,
  },
  reducers: {
    toggleGptPage: (state, action) => {
      state.isGptPage = !state.isGptPage;
    },
    addGptMovies: (state, action) => {
      state.movieResults = action.payload;
    },
    toggleLoading: (state, action) => {
      state.loading = !state.loading;
    },
  },
});

export const { toggleGptPage, addGptMovies, toggleLoading } = gptSlice.actions;

export default gptSlice.reducer;
