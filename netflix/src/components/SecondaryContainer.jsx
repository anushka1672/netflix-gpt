import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

export default function SecondaryContainer() {
      const movies = useSelector((store) => store.movies?.nowPlayingMovies);
      console.log("second movies",movies);
      
  return (
    <div className='bg-black'>
        <div className='z-20 -mt-2'>
        <MovieList title={"Now Playing"} movies = {movies}/>
        <MovieList title={"Trending"} movies = {movies}/>
        <MovieList title={"Populer"} movies = {movies}/>
        <MovieList title={"upcoming"} movies = {movies}/>
        <MovieList title={"Horrer"} movies = {movies}/>
        </div>   
    </div>
  )
}