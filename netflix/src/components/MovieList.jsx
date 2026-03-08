import React from "react";
import MovieCards from "./MovieCards";

export default function MovieList({ movies, title }) {
  return (
    <div className="px-4 md:px-10 py-4">
      
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
        {title}
      </h1>

      <div className="flex overflow-x-scroll space-x-3 py-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCards key={movie.id} poster={movie.poster_path} />
        ))}
      </div>

    </div>
  );
}