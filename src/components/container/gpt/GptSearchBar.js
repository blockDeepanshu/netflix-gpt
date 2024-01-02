import React, { useRef } from "react";
import { lang } from "../../../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../../utils/openai";
import {
  addGptMovies,
  toggleLoading,
} from "../../../utils/store/slices/gptSlice";
import axios from "axios";
import { getOptions } from "../../../hooks/useMovies";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.appConfig.lang);

  const inputRef = useRef();

  const dispatch = useDispatch();

  const getMovieDetails = async (title) => {
    const options = getOptions(
      `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`
    );

    const { data } = await axios.request(options);
    return data.results[0];
  };

  const handleClick = async () => {
    dispatch(toggleLoading());

    const gptQuery = `Act as a movie recommendation system and suggest 5 movies for this query : ${inputRef.current.value}. Provide comma separated movie titles .
    
    Note: Do not add any other text apart from the result array in the response.
    `;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const titleArr = gptResults?.choices[0]?.message?.content.split(", ");

    const resultArr = titleArr.map(async (item) => await getMovieDetails(item));

    const movieResults = await Promise.all(resultArr);

    dispatch(addGptMovies(movieResults));
    dispatch(toggleLoading());
  };

  return (
    <div className="pt-[5%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 rounded-2xl bg-opacity-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[selectedLang]?.gptSearchBarPlaceholder}
        />
        <button
          className="bg-red-600 text-white px-8 py-4 col-span-3 m-4"
          onClick={handleClick}
        >
          {lang[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
