import React from "react";
import Navbar from "./Navbar";
import VideoContainer from "../container/VideoContainer";
import MoviesListContainer from "../container/MoviesListContainer";
import { usePlayingMoviesNow } from "../../hooks/useMoviesPlayingNow";

const Browse = () => {
  usePlayingMoviesNow();
  return (
    <div>
      <Navbar />
      <VideoContainer />
      <MoviesListContainer />
    </div>
  );
};

export default Browse;
