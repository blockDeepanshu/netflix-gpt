import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaingMovies } from "../utils/store/slices/movieSlice";

export const usePlayingMoviesNow = () => {
  const dispatch = useDispatch();

  const getPlayingNowMovies = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWJlMGE4MDQ4MjcxZjgyNjM3MWE4ZTMwMjNiYTU4NCIsInN1YiI6IjY1ODdkZmFkNGZkMTQxNzJkODVmYmE4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0bgtSCkR84g3R091eJo3uMB5Q0OjRC1dND1aNa6QHg",
      },
    };

    const { data } = await axios.request(options);
    dispatch(addNowPlaingMovies(data.results));
  };

  useEffect(() => {
    getPlayingNowMovies();
  }, []);
};
