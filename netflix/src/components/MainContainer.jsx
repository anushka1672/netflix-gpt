import React from "react";
import VideoTitle from "./VideoTitle";

import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground ";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
//  console.log("movies:", movies);

  // 🔥 sabse pehle strong guard lagao
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const videoId = movies?.[0];
  const { title, overview,id } = videoId
  // console.log("MainContainer mai singlemovie",videoId);
  

  if (!videoId) return <div>No video id</div>;

  return (
    <div className="flex flex-col">
      <VideoBackground videoId={id}/>
      <VideoTitle  title =  { title} overview={ overview }/>
      <SecondaryContainer/>
    </div>
  );
};

export default MainContainer;