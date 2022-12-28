import React from "react";
import { getRequest } from "../api/apiCall";
import { useQuery } from "react-query";
import { CinemaMovies, TodaySeries } from "../api/apiurl";
import HorizontalScrolling from "../components/HorizontalScrolling";
import Layout from "../components/Layout";
import ScrollingMovieCard from "../components/ScrollingMovieCard";
export default function Home() {

  
  const { data: cinemaMovies } = useQuery(
    [CinemaMovies.key],
    async () => await getRequest({ url: CinemaMovies.url(1) }),
    {
      retry: 2,
    }
  );
  const { data: todaySeries } = useQuery(
    [TodaySeries.key],
    async () => await getRequest({ url: TodaySeries.url(1) }),
    {
      retry: 2,
    }
  );
  const [movies, setMovies] = React.useState(
    cinemaMovies?.results
  );
  const [series, setSeries] = React.useState(
    todaySeries?.results
  );
  React.useEffect(() => {
    setMovies(cinemaMovies?.results);
  }, [cinemaMovies?.results]);
  React.useEffect(() => {
    setSeries(todaySeries?.results);
  }, [todaySeries?.results]);

  return (
    <Layout
      data={movies?.concat(
        series,      )}
      type="movie"
      title="Movie Hub"
    >
     
          <HorizontalScrolling title={"Showing In Cinemas"} speed={2800} url="/movies/cinema_movies">
            {movies?.map((data, i) => (
              <ScrollingMovieCard data={data} type={"movie"} i={i} />
            ))}
          </HorizontalScrolling>
          <HorizontalScrolling title={"Airing Today"} speed={3100} url="/series/airing_today">
            {series?.map((data, i) => (
              <ScrollingMovieCard data={data} type={"series"} i={i} />
            ))}
          </HorizontalScrolling>
    </Layout>
  );
}
