
export const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
  }
};


export const img_CND = "https://image.tmdb.org/t/p/w500"