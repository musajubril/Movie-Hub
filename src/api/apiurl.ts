const API_URL = "https://api.themoviedb.org/3";
export const APIKEY = "12311fad4d96ced28ffcc86d13d57e4f";
// http://img.omdbapi.com/?apikey=[yourkey]&
export const AllMoviesRoute =(page)=> `${API_URL}/discover/movie?page=${page}&api_key=${APIKEY}`
export const GetMovie =(id)=> `${API_URL}/movie/${id}?api_key=${APIKEY}`
export const GetSeries =(id)=> `${API_URL}/tv/${id}?api_key=${APIKEY}`
export const AllSeriesRoute =(page)=> `${API_URL}/discover/tv?page=${page}&api_key=${APIKEY}`
export const LatestMovieRoute =(page)=> `${API_URL}/movie/latest?page=${page}&api_key=${APIKEY}`
export const LatestSeriesRoute =(page)=> `${API_URL}/tv/latest?page=${page}&api_key=${APIKEY}`
export const TodaySeriesRoute =(page)=> `${API_URL}/tv/airing_today?page=${page}&api_key=${APIKEY}`
export const CinemaMoviesRoute =(page)=> `${API_URL}/movie/now_playing?page=${page}&api_key=${APIKEY}`
export const PopularMoviesRoute =(page)=> `${API_URL}/movie/popular?page=${page}&api_key=${APIKEY}`
export const TopRatedMoviesRoute =(page)=> `${API_URL}/movie/top_rated?page=${page}&api_key=${APIKEY}`
export const PopularSeriesRoute =(page)=> `${API_URL}/tv/popular?page=${page}&api_key=${APIKEY}`
export const TopRatedSeriesRoute =(page)=> `${API_URL}/tv/top_rated?page=${page}&api_key=${APIKEY}`
export const UpcomingMoviesRoute =(page)=> `${API_URL}/movie/upcoming?page=${page}&api_key=${APIKEY}`
export const FindById = (id) => `${API_URL}/find/${id}?api_key=${APIKEY}&external_source=imdb_id`;
export const MovieSearch = (query, page) =>
  `https://www.omdbapi.com/?s=${query}&page=${page}&apikey=9be7d43e`;
export const Trending = (type, time) =>
  `${API_URL}/trending/${type}/${time}?api_key=${APIKEY}`;
export const ImageUrl = (url) => `https://image.tmdb.org/t/p/original${url}`;
//  ID is imdbID
// type: all || movie || tv || person
//  time: day || week

export const AllMovies = {
        url: AllMoviesRoute,
        //   url: `${API_URL}/discover/movie?page=${page}&api_key=${APIKEY}`,
  slug: "discover_movies",
  key: "getMovies",
  type: "Movie",
  title: "Discover Movies",
};
export const AllSeries = {
        url: AllSeriesRoute,
        //   url: `${API_URL}/discover/tv?page=${page}&api_key=${APIKEY}`,
  slug: "discover_series",
  key: "getSeries",
  type: "Series",
  title: "Discover Series",
};
export const LatestMovie = {
        url: LatestMovieRoute,
        //   url: `${API_URL}/movie/latest?api_key=${APIKEY}`,
  slug: "latest_movie",
  key: "latestMovie",
  type: "Movie",
  title: "Latest Movie",
};
export const LatestSeries = {
        url: LatestSeriesRoute,
        //   url: `${API_URL}/tv/latest?api_key=${APIKEY}`,
  slug: "latest_series",
  key: "latestSeries",
  type: "Series",
  title: "Latest Series",
};
export const TodaySeries = {
        url: TodaySeriesRoute,
        //   url: `${API_URL}/tv/airing_today?page=${page}&api_key=${APIKEY}`,
  slug: "airing_today",
  key: "todaySeries",
  type: "Series",
  title: "Airing Today",
};
export const CinemaMovies = {
        url: CinemaMoviesRoute,
        //   url: `${API_URL}/movie/now_playing?page=${page}&api_key=${APIKEY}`,
  slug: "cinema_movies",
  key: "cinemaMovies",
  type: "Movie",
  title: "Showing In Cinemas",
};
export const PopularMovies = {
        url: PopularMoviesRoute,
        //   url: `${API_URL}/movie/popular?page=${page}&api_key=${APIKEY}`,
  slug: "popular_movies",
  key: "popularMovies",
  type: "Movie",
  title: "Popular Movies",
};
export const TopRatedMovies = {
        url: TopRatedMoviesRoute,
        //   url: `${API_URL}/movie/top_rated?page=${page}&api_key=${APIKEY}`,
  slug: "top_rated_movies",
  key: "topRatedMovies",
  type: "Movie",
  title: "Top Rated Movies",
};
export const PopularSeries = {
        url: PopularSeriesRoute,
        //   url: `${API_URL}/tv/popular?page=${page}&api_key=${APIKEY}`,
  slug: "popular_series",
  key: "popularSeries",
  type: "Series",
  title: "Popular Series",
};
export const TopRatedSeries = {
        url: TopRatedSeriesRoute,
        //   url: `${API_URL}/tv/top_rated?page=${page}&api_key=${APIKEY}`,
  slug: "top_rated_series",
  key: "topRatedSeries",
  type: "Series",
  title: "Top Rated Series",
};
export const UpcomingMovies = {
        url: UpcomingMoviesRoute,
        //   url: `${API_URL}/movie/upcoming?page=${page}&api_key=${APIKEY}`,
  slug: "upcoming_movies",
  key: "upcomingMovies",
  type: "Movie",
  title: "New And Upcoming Movies",
};
export const AllRoutes = [
  AllMovies,
  AllSeries,
  LatestMovie,
  LatestSeries,
  TodaySeries,
  CinemaMovies,
  PopularMovies,
  TopRatedMovies,
  PopularSeries,
  TopRatedSeries,
  UpcomingMovies,
];
// export const FindById = (id) => {
//      url: `${API_URL}/find/${id}?page=${page}&api_key=${APIKEY}`,
//     slug: "",
// /
// key: "",/ t
// type: "Movie",itle: ""
// }
// export const Search = (query, page) => `https://www.omdbapi.com/?s=${query}&page=${page}&apikey=9be7d43e`
// export const Trending = (type, time) => `${API_URL}/trending/${type}/${time}?api_key=${APIKEY}`
