import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const containerRef = useRef(null);
  const cardWidthRef = useRef(0);
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      cardWidthRef.current = container.scrollWidth / movies?.length;
    }

    const scrollInterval = setInterval(() => {
      if (container) {
        const nextScrollLeft = container.scrollLeft + cardWidthRef.current;

        container.scrollTo({
          left: nextScrollLeft,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [movies?.length]);

  return (
    <div className="p-6 w-screen">
      <h1 className="text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll" ref={containerRef}>
        <div className="flex justify-evenly">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
