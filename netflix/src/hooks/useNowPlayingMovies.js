import { useDispatch} from 'react-redux';
import { options,url } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

export const useNowPlayingMovies = () => {
     const dispatch = useDispatch();
     
      async function getNowPlayingMovies(){
      try {
        const response = await fetch(url,options);
        if(!response.ok){
      throw new Error("Failed to fetch movies");
        }
    
        const data = await response.json();
        console.log("omdb data",data);
        dispatch(addNowPlayingMovies(data.results));
    
        
      } catch(error){
        console.error("Error:", error);
      }
    }
    
         useEffect(()=>{
          getNowPlayingMovies();
         },[])
}