import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  const videoData = movies[0];
  const { title, overview, id } = videoData;

  if (!videoData) return <div>No video id</div>;

  return (
    <div className="relative w-full">

      {/* Video Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">

        {/* Background Video */}
        <VideoBackground videoId={id} />

        {/* Title Overlay */}
        <div className="
          absolute 
          bottom-10 
          left-4 
          sm:left-10 
          md:left-20 
          w-[90%] 
          sm:w-[70%] 
          md:w-[40%]
        ">
          <VideoTitle title={title} overview={overview} />
        </div>

      </div>

      {/* Movie Lists */}
      <SecondaryContainer />

    </div>
  );
};

export default MainContainer;