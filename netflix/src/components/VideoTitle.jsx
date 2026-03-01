import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center bg-gradient-to-r from-black">
      <div className="px-16 max-w-2xl text-white">
        <h1 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          {title}
        </h1>

        <p className="text-sm text-gray-300 leading-relaxed mb-6 line-clamp-4">
          {overview}
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-md bg-white px-6 py-2 text-black font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>

          <button className="rounded-md bg-gray-500/70 px-6 py-2 text-white font-semibold hover:bg-gray-500 transition">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;