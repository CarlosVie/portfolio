export const BASE_URL = 'https://api.themoviedb.org/3';
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original'; // poster_path || backdrop_path
export const MOVIE_DETAILS = '/movie'; // /:id
export const DISCOVERY = '/discover/movie';
export const MOVIES_POPULAR = '/movie/popular';
export const MOVIES_SIMILAR = '/similar';
export const MOVIES_GENRE = '/genre/movie/list';
export const mm = 'https://api.themoviedb.org/3/genre/tv/list';
export const API_KEY = 'dec1430dea397117976757d045cef9ef';

// https://api.themoviedb.org/3/discover/movie?api_key=dec1430dea397117976757d045cef9ef&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

/*
 https://api.themoviedb.org/3/movie/2/similar?api_key=dec1430dea397117976757d045cef9ef&language=en-US&page=1 -> similar movies
 https://api.themoviedb.org/3/movie/2?api_key=dec1430dea397117976757d045cef9ef&language=en-US -> DETAILS OF A MOVIE

 https://api.themoviedb.org/3/movie/419704?api_key=dec1430dea397117976757d045cef9ef -> movie details by id
 https://image.tmdb.org/t/p/original/5BwqwxMEjemFtdknRV792Svo0K1v.jpg -> IMAGES URL
 https://api.themoviedb.org/3/genre/movie/list?api_key=dec1430dea397117976757d045cef9ef&language=en-US -> get all genred from movies
 https://api.themoviedb.org/3/genre/tv/list?api_key=dec1430dea397117976757d045cef9ef -> get all genred from TV
 https://api.themoviedb.org/3/movie/popular?api_key=dec1430dea397117976757d045cef9ef&page=1 -> POPULAR MOVIES
 https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US -> video from a movie id
 {
 id: "533ec651c3a3685448000010",
 iso_639_1: "en",
 iso_3166_1: "US",
 key: "SPHfeNgogVs",
 name: "Finding Nemo 3D Trailer",
 site: "YouTube",
 size: 720,
 type: "Trailer"
 }
 https://www.youtube.com/watch?v=<key-from-video-api> ->
 PAGES

    PARSER
 {
    "id": integer,
    "poster_path": string,
    "backdrop_path": string,
    "original_title": string,
    "genre_ids": [integers] -> get genre by id
    "vote_average": number,
    "overview": string,
    "release_date": string
 }

 {
    "popularity": 538.99,
    "vote_count": 3109,
    "video": false,
    "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg", -> card image
    "id": 419704,
    "adult": false,
    "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg", -> backgroundImage
    "original_language": "en",
    "original_title": "Ad Astra",
    "genre_ids": [
    18,
    878
],
    "title": "Ad Astra",
    "vote_average": 6,
    "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
    "release_date": "2019-09-17"
},*/
