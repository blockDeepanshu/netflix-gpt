import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import movieSlice from "./slices/movieSlice";
import gptSlice from "./slices/gptSlice";
import configSlice from "./slices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gpt: gptSlice,
    appConfig: configSlice,
  },
});

export default appStore;
