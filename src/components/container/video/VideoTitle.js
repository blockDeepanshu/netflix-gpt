import React from "react";
import { PlayCircle } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-12  absolute w-screen  aspect-video bg-gradient-to-r from-black ">
      <h1 className="text-3xl font-bold text-white w-1/3">{title}</h1>
      <p className="mt-2 text-md text-white w-1/3">{overview}</p>
      <div className="mt-4 flex">
        <button className="px-12 py-2 flex bg-white ">
          <PlayCircle className="text-black" /> Play
        </button>
        <button className="px-12 bg-gray-500 text-white mx-2">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
