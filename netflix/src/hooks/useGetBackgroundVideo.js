import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerId } from '../utils/movieSlice';

export const useGetBackgroundVideo= (videoId)=>{
    // console.log("this si a useGetBackgroundVideo",videoId);
    const dispatch = useDispatch();
    
      const movies = useSelector((store) => store.movies.nowPlayingMovies);
     
     if (!movies || movies.length === 0) return null;
    
      async function getMoveVedioById(){
        const res = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos`,options)
        const data = await res.json();
        // console.log("ye VideoBackground ka data h jisme v h",data);
        const moviesVideos = data.results;
        console.log(moviesVideos);
       const trailerData =  moviesVideos.filter((movie)=>movie.type === "Trailer")
       const trailer = trailerData[0]
       dispatch(addTrailerId(trailer))
      }
    
     useEffect(() => {
      if (!videoId) return;
      getMoveVedioById();
    }, [videoId]);
  
}