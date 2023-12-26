import React from "react";
import Navbar from "./Navbar";
import VideoContainer from "../container/video/VideoContainer";
import MoviesListContainer from "../container/MoviesListContainer";
import {
  usePlayingMoviesNow,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../../hooks/useMovies";

const Browse = () => {
  usePlayingMoviesNow();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Navbar />
      <VideoContainer />
      <MoviesListContainer />
    </div>
  );
};

export default Browse;
