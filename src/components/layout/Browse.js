import React from "react";
import Navbar from "./Navbar";
import VideoContainer from "../container/VideoContainer";
import MoviesListContainer from "../container/MoviesListContainer";
import {
  usePlayingMoviesNow,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../../hooks/useMovies";
import GptSearchContainer from "../container/GptSearchContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  usePlayingMoviesNow();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  const isGptPage = useSelector((store) => store.gpt.isGptPage);

  return (
    <div>
      <Navbar />
      {isGptPage ? (
        <GptSearchContainer />
      ) : (
        <>
          <VideoContainer />
          <MoviesListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
