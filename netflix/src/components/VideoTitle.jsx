import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center bg-gradient-to-r from-black/90 via-black/60 to-transparent">
      <div
        className="
        px-4
        sm:px-8
        md:px-16
        max-w-xl
        md:max-w-2xl
        text-white
        -mt-150
        "
      >
        {/* Title */}
        <h1
          className="
          text-2xl
          sm:text-3xl
          md:text-5xl
          font-extrabold
          leading-tight
          mb-3
          md:mb-4
          drop-shadow-lg
          "
        >
          {title}
        </h1>

        {/* Overview */}
        <p
          className="
          text-xs
          sm:text-sm
          md:text-base
          text-gray-300
          leading-relaxed
          mb-4
          md:mb-6
          line-clamp-2
          sm:line-clamp-3
          md:line-clamp-4
          "
        >
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            className="
            flex items-center justify-center
            gap-2
            rounded-md
            bg-white
            px-4
            md:px-6
            py-2
            text-black
            text-sm
            md:text-base
            font-semibold
            hover:bg-gray-200
            transition
            "
          >
            ▶ Play
          </button>

          <button
            className="
            rounded-md
            bg-gray-500/70
            px-4
            md:px-6
            py-2
            text-white
            text-sm
            md:text-base
            font-semibold
            hover:bg-gray-500
            transition
            "
          >
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
