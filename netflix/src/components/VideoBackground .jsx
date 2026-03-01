// import React, { useEffect} from "react";
// import { API_Options } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addTrailerId } from "../utils/movieSlice";

// const VideoBackground = ({ videoId }) => {
//   const movies = useSelector((store) => store.movies.nowPlayingMovies);
//   const trailerId = useSelector((store) => store.movies.trailerId);
//   // const [trailer, setTrailer] = useState(null);
//   const dispatch = useDispatch();
//   // console.log(trailerId);
//   useEffect(() => {
//     try {
//       const getVideos = async () => {
//         const data = await fetch(
//           `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
//           API_Options,
//         );
//         const json = await data.json();
//         console.log("Json:", json);

//         const filterData = json.results.filter(
//           (trailer) => trailer.type === "Trailer",
//         );
//         dispatch(addTrailerId(filterData[0].key));
//       };
//       if (movies.length) {
//         getVideos();
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, [movies]);

//   return movies.length ? (
//     <div className="min-h-[100vh] w-full ">
//       {/* <iframe
//         src={`https://www.youtube.com/embed/${Trailer?.key}?si=m6CQNLwy9bPSdvAD`}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerpolicy="strict-origin-when-cross-origin"
//         className="w-full min-h-[100vh]"
//       ></iframe> */}
   
//     </div>
//   ) : (
//     <div>loading...................</div>
//   );
// };

// export default VideoBackground;


import React from 'react'
import { useGetBackgroundVideo } from '../hooks/useGetBackgroundVideo';
import { useSelector } from 'react-redux';


export default function VideoBackground ({ videoId }) {
  // console.log("this is a videobackground container",videoId);
   const  movieTrailor = useSelector((store) => store.movies.trailerId);
   console.log(movieTrailor,"movieTrailor");
   
  

 useGetBackgroundVideo(videoId);

  return (
    <div className='w-screen'>
      
<iframe className='w-screen aspect-video z-0'
src={"https://www.youtube.com/embed/"+movieTrailor?.key+"?&autoplay=1&mute=1"} 
          title="YouTube video player" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
           picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>

       </div>
  )
}
