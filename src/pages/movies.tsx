import { getRequest } from "api/apiCall";
import {
  AllMovies,
  CinemaMovies,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from "api/apiurl";
import HorizontalScrolling from "components/HorizontalScrolling";
import Layout from "components/Layout";
import React from "react";
import { useQuery } from "react-query";
import ScrollingMovieCard from "../components/ScrollingMovieCard";

export default function Movies() {
  const { data: allMovies } = useQuery(
    [AllMovies.key],
    async () => await getRequest({ url: AllMovies.url(1) }),
    {
      retry: 2,
    }
  );
  const { data: cinemaMovies } = useQuery(
    [CinemaMovies.key],
    async () => await getRequest({ url: CinemaMovies.url(1) }),
    {
      retry: 2,
    }
  );
  const { data: popularMovies } = useQuery(
    [PopularMovies.key],
    async () => await getRequest({ url: PopularMovies.url(1) }),
    {
      retry: 2,
    }
  );
  const { data: topRatedMovies } = useQuery(
    [TopRatedMovies.key],
    async () => await getRequest({ url: TopRatedMovies.url(1) }),
    {
      retry: 2,
    }
  );
  const { data: upcomingMovies } = useQuery(
    [UpcomingMovies.key],
    async () => await getRequest({ url: UpcomingMovies.url(1) }),
    {
      retry: 2,
    }
  );
  const [allMovie, setAllMovies] = React.useState(allMovies?.results);
  const [cinemaMovie, setCinemaMovies] = React.useState(cinemaMovies?.results);
  const [popularMovie, setPopularMovies] = React.useState(
    popularMovies?.results
  );
  const [topRatedMovie, setTopRatedMovies] = React.useState(
    topRatedMovies?.results
  );
  const [upcomingMovie, setUpcomingMovies] = React.useState(
    upcomingMovies?.results
  );
  React.useEffect(() => {
    setAllMovies(allMovies?.results);
  }, [allMovies?.results]);
  React.useEffect(() => {
    setCinemaMovies(cinemaMovies?.results);
  }, [cinemaMovies?.results]);
  React.useEffect(() => {
    setPopularMovies(popularMovies?.results);
  }, [popularMovies?.results]);
  React.useEffect(() => {
    setTopRatedMovies(topRatedMovies?.results);
  }, [topRatedMovies?.results]);
  React.useEffect(() => {
    setUpcomingMovies(upcomingMovies?.results);
  }, [upcomingMovies?.results]);
  const MoviesCategories = [
    {
      url: "/movies/discover_movies",
      speed: 2800,
      name: "Discover Movies",
      data: allMovie,
    },
    {
      url: "/movies/popular_movies",
      speed: 3100,
      name: "Popular Movies",
      data: popularMovie,
    },
    {
      url: "/movies/top_rated_movies",
      speed: 2900,
      name: "Top Rated Movies",
      data: topRatedMovie,
    },
    {
      url: "/movies/upcoming_movies",
      speed: 3200,
      name: "New And Upcoming Movies",
      data: upcomingMovie,
    },
    {
      url: "/movies/cinema_movies",
      speed: 3000,
      name: "Showing In Cinemas",
      data: cinemaMovie,
    },
  ];
  return (
    <Layout
      data={allMovie?.concat(
        popularMovie,
        topRatedMovie,
        upcomingMovie,
        cinemaMovie
      )}
      type="movie"
      title="Movies"
    >
      {MoviesCategories?.map((mv, i) => {
        return (
          <HorizontalScrolling title={mv.name} speed={mv.speed} url={mv.url}>
            {mv?.data?.map((data, i) => (
              <ScrollingMovieCard data={data} type={"movie"} i={i} />
            ))}
          </HorizontalScrolling>
        );
      })}
    </Layout>
  );
}
