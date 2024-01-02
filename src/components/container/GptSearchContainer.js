import React from "react";
import { BACKGROUND_IMAGE_URL } from "../../utils/constants";
import GptSearchBar from "./gpt/GptSearchBar";
import GptMovieSuggestion from "./gpt/GptMovieSuggestion";

const GptSearchContainer = () => {
  return (
    <div className="absolute w-screen h-screen overflow-hidden">
      <img
        className="absolute -z-10"
        alt="background"
        src={BACKGROUND_IMAGE_URL}
      />

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchContainer;
