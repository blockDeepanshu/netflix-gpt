import React from "react";
import MovieList from "./movie/MovieList";
import { useSelector } from "react-redux";
import { lang } from "../../utils/languageConstant";

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movies);
  const selectedLang = useSelector((store) => store.appConfig.lang);

  return (
    <div className="bg-black w-screen">
      <div className="-mt-80 relative z-20">
        <MovieList
          title={lang[selectedLang]?.movieTypes.nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={lang[selectedLang]?.movieTypes.popuar}
          movies={movies.popularMovies}
        />
        <MovieList
          title={lang[selectedLang]?.movieTypes.topRated}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={lang[selectedLang]?.movieTypes.upcoming}
          movies={movies.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default MoviesListContainer;
