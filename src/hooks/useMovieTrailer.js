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
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
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
