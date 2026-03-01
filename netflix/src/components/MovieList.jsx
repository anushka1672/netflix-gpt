import React from 'react'
import MovieCards from './MovieCards';

export default function MovieList({movies,title}) {
  console.log(movies);
  return (
    <div className='px-4 py-2 '>
        <h1 className='text-2xl font-bold text-amber-50'>{title}</h1>
        <div className='flex overflow-x-auto py-4'>
        {movies?.map((movie)=>{
            return <div key={movie.id}>
                <MovieCards poster={movie.poster_path}/>
            </div>
        })}
        </div>
    </div>
  )
}
