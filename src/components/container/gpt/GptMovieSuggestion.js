import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movie/MovieCard";

const GptMovieSuggestion = () => {
  const movies = useSelector((store) => store.gpt.movieResults);
  const isLoading = useSelector((store) => store.gpt.loading);
  if (!movies) return null;

  return (
    <div className="bg-black flex justify-evenly p-8  mt-[10%] m-auto bg-opacity-70 flex-wrap w-full h-80">
      {!isLoading ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))
      ) : (
        <h1 className="text-white text-2xl font-bold">loading...</h1>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
