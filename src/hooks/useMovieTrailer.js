import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/store/slices/movieSlice";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWJlMGE4MDQ4MjcxZjgyNjM3MWE4ZTMwMjNiYTU4NCIsInN1YiI6IjY1ODdkZmFkNGZkMTQxNzJkODVmYmE4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0bgtSCkR84g3R091eJo3uMB5Q0OjRC1dND1aNa6QHg",
      },
    };

    const { data } = await axios.request(options);

    const filterVideos = data?.results.filter((item) => {
      return item.type === "Trailer";
    });

    dispatch(addMovieTrailer(filterVideos[0]));
  };

  useEffect(() => {
    getMovieTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
