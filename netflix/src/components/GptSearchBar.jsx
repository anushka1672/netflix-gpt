import React, { useRef, useState } from "react";
import { language } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { AddSearchedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const userSelectedLang = useSelector((state) => state.config.Lang);
  const searchedMovies = useSelector((state) => state.gpt.searchedMovies);

  const currentLang = language[userSelectedLang];

  const SearchText = useRef(null);

  const TMDB_TOKEN = import.meta.env.VITE_TMDB_KEY;

  const handleSmartSearch = async (e) => {
    e.preventDefault();

    const query = SearchText.current?.value?.trim();

    if (!query) {
      console.log("empty query");
      return;
    }

    setTitle(query);

    try {
      const searchRes = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          query
        )}`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const searchData = await searchRes.json();

      if (!searchData.results || !searchData.results.length) {
        console.log("No movie found");
        return;
      }

      const firstMovie = searchData.results[0];

      const similarRes = await fetch(
        `https://api.themoviedb.org/3/movie/${firstMovie.id}/similar`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const similarData = await similarRes.json();

      dispatch(AddSearchedMovies(similarData.results));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full min-h-screen pt-20 px-4">

      {/* Search Bar */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSmartSearch}
          className="
          w-full 
          sm:w-[90%] 
          md:w-2/3 
          lg:w-1/2
          bg-black 
          grid 
          grid-cols-1 
          sm:grid-cols-12 
          rounded-lg
          "
        >
          <input
            ref={SearchText}
            type="text"
            className="
            p-3 
            sm:p-4 
            m-2 
            sm:m-4 
            sm:col-span-9 
            text-white 
            bg-gray-800 
            rounded-lg 
            sm:rounded-l-lg
            "
            placeholder={currentLang.input}
          />

          <button
            className="
            sm:col-span-3 
            m-2 
            sm:m-4 
            py-2 
            px-4 
            bg-red-700 
            text-white 
            rounded-lg
            hover:bg-red-800
            "
            type="submit"
          >
            {currentLang.lang}
          </button>
        </form>
      </div>

      {/* Movie Results */}
      <div className="mt-6">
        {searchedMovies ? (
          <MovieList title={title} movies={searchedMovies} />
        ) : null}
      </div>
    </div>
  );
};

export default GptSearchBar;