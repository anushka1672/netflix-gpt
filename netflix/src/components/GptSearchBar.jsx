import React, { useRef, useState } from 'react';
import {  language } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './MovieList';
import { AddSearchedMovies } from '../utils/gptSlice';
// import { ai } from '../utils/geminiAi';

const GptSearchBar = () => {
  const[title,setTitle] = useState("")
  const dispatch = useDispatch();
    const userSelectedLang = useSelector((state)=>state.config.Lang)
    const searchedMovies = useSelector((state)=>state.gpt.searchedMovies)
    console.log("store se li h movies",searchedMovies);
    
    console.log("userSelectedLang",userSelectedLang)
    
    const currentLang = language[userSelectedLang] 
    console.log("currentLang ",currentLang );

    const SearchText = useRef(null);
    // const [recommendations, setRecommendations] = useState([]);
    
const TMDB_TOKEN = import.meta.env.VITE_TMDB_KEY;

const handleSmartSearch = async (e) => {
  e.preventDefault();
  const query = SearchText.current?.value?.trim();
  if (!query) {
    // setRecommendations([]);
    console.log('empty query');
    return;
  }

  console.log('search query:', query);
  setTitle(query)

  try {
    // run movie search
    const searchRes = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
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
      // setRecommendations([]);
      return;
    }
      console.log('searchData',searchData);
      
    const firstMovie = searchData.results[0];
    console.log("Best match:", firstMovie.title);

    // fetch similar movies
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
    console.log('similarData',similarData);
    
    dispatch( AddSearchedMovies(similarData.results))
    // setRecommendations(similarData.results );
    return similarData.results ;
  } catch (err) {
    console.error(err);
    // setRecommendations([]);
  }
};
    
  return (
    <div className='w-screen h-screen pt-20'>
      <div className="pt-[2%] flex justify-center">
        <form onSubmit={handleSmartSearch} className="w-1/2 bg-black grid grid-cols-12">
          <input
            ref={SearchText}
            type="text"
            className="p-4 m-4 col-span-9 text-white bg-gray-800 rounded-l-lg"
            placeholder={currentLang.input}
          />
          <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" type='submit'>
            {currentLang.lang}
          </button>
        </form>
      </div>

      {/* render recommendation list
      {recommendations.length > 0 && (
        <div className="mt-6 w-1/2 mx-auto bg-gray-900 p-4 text-white rounded">
          <h2 className="text-xl mb-2">Recommendations</h2>
          <ul>
            {recommendations.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
          
        </div>
      )} */}
      { searchedMovies?(<MovieList title={title} movies = {searchedMovies}/>):null }
    </div>
  );
};

export default GptSearchBar;