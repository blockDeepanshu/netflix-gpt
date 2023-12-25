import React from "react";
import VideoTitle from "./video/VideoTitle";
import VideoBackground from "./video/VideoBackground";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const { original_title, overview, id } =
    movies[Math.floor(Math.random() * 20)];

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default VideoContainer;
