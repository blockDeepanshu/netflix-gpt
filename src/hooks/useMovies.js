/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addNowPlaingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/store/slices/movieSlice";

export const getOptions = (url) => {
  const options = {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
    },
  };

  return options;
};

export const usePlayingMoviesNow = () => {
  const dispatch = useDispatch();

  const nowPlayingMoviesOptions = getOptions(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

  const getPlayingNowMovies = async () => {
    const { data } = await axios.request(nowPlayingMoviesOptions);

    dispatch(addNowPlaingMovies(data.results));
  };

  useEffect(() => {
    getPlayingNowMovies();
  }, []);
};

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMoviesOptions = getOptions(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );

  const getPopularMovies = async () => {
    const { data } = await axios.request(popularMoviesOptions);

    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMoviesOptions = getOptions(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );

  const getTopRatedMovies = async () => {
    const { data } = await axios.request(topRatedMoviesOptions);

    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingOptions = getOptions(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );

  const getUpcomingMovies = async () => {
    const { data } = await axios.request(upcomingOptions);

    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
