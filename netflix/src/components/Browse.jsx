import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";

export default function Browse() {
  useNowPlayingMovies();

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  return (
    <div>
      <Header />

      <MainContainer/>

     
    </div>
  );
}






// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { API_Options } from "../utils/constant";
// import { addNowPlayingMovies } from "../utils/movieSlice";
// import Header from "./Header";

// const Browser = () => {
//   const navigate = useNavigate();
//    const user = useSelector((state)=>state.user);
//   const gptToggle = useSelector((store) => store.gptSearch.show);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     const getNowPlayingMovies = async () => {
//       const res = await fetch(URL, API_Options);
//       const json = await res.json();
//       console.log(json.results + " ");
//       dispatch(addNowPlayingMovies(json.results));
//     };
//     getNowPlayingMovies();
//   }, []);
//   // console.log(import.meta.env.VITE_GEMINI_AI_KEY);

//   useEffect(()=>{
//       if(!user){
//         navigate("/")
//       }})

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />
//       {!gptToggle ? (
//         <div className="flex flex-col">
//           <MainContainer />
//           <SecondaryContainer />
//         </div>
//       ) : (
//         <GptSearchPage />
//       )}
//     </div>
//   );
// };

// export default Browser;
