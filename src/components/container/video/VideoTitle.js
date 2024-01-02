import { useSelector } from "react-redux";
import { lang } from "../../../utils/languageConstant";

const VideoTitle = ({ title, overview }) => {
  const selectedLang = useSelector((store) => store.appConfig.lang);

  return (
    <div className="w-screen aspect-video pt-24 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ {lang[selectedLang]?.playButton}
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          {lang[selectedLang]?.moreInfoButton}
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
