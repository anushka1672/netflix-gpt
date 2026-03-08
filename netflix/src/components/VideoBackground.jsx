import React from "react";
import { useGetBackgroundVideo } from "../hooks/useGetBackgroundVideo";
import { useSelector } from "react-redux";

export default function VideoBackground({ videoId }) {

  const movieTrailer = useSelector((store) => store.movies.trailerId);

  useGetBackgroundVideo(videoId);

  if (!movieTrailer) return null;

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">

      <iframe
        className="
        w-full
        h-full
        scale-125
        pointer-events-none
        "
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          movieTrailer?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

    </div>
  );
}