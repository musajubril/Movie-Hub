import { getRequest } from "api/apiCall";
import {
  AllSeries,
  TodaySeries,
  PopularSeries,
  TopRatedSeries,
} from "api/apiurl";
import HorizontalScrolling from "components/HorizontalScrolling";
import Layout from "components/Layout";
import React from "react";
import { useQuery } from "react-query";
import ScrollingMovieCard from "../components/ScrollingMovieCard";

export default function Series() {
  const { data: allSeries } = useQuery(
    [AllSeries.key],
    async () => await getRequest({ url: AllSeries.url(1) }),
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
  const { data: popularSeries } = useQuery(
    [PopularSeries.key],
    async () => await getRequest({ url: PopularSeries.url(1) }),
    {
      retry: 2,
    }
  );
  const { data: topRatedSeries } = useQuery(
    [TopRatedSeries.key],
    async () => await getRequest({ url: TopRatedSeries.url(1) }),
    {
      retry: 2,
    }
  );
  const [allSerie, setAllSeries] = React.useState(allSeries?.results);
  const [todaySerie, setTodaySeries] = React.useState(todaySeries?.results);
  const [popularSerie, setPopularSeries] = React.useState(
    popularSeries?.results
  );
  const [topRatedSerie, setTopRatedSeries] = React.useState(
    topRatedSeries?.results
  );
  React.useEffect(() => {
    setAllSeries(allSeries?.results);
  }, [allSeries?.results]);
  React.useEffect(() => {
    setTodaySeries(todaySeries?.results);
  }, [todaySeries?.results]);
  React.useEffect(() => {
    setPopularSeries(popularSeries?.results);
  }, [popularSeries?.results]);
  React.useEffect(() => {
    setTopRatedSeries(topRatedSeries?.results);
  }, [topRatedSeries?.results]);
  const SeriesCategories = [
    {
      url: "/series/discover_series",
      speed: 2800,
      name: "Discover Series",
      data: allSerie,
    },
    {
      url: "/series/popular_series",
      speed: 3100,
      name: "Popular Series",
      data: popularSerie,
    },
    {
      url: "/series/top_rated_series",
      speed: 2900,
      name: "Top Rated Series",
      data: topRatedSerie,
    },
    {
      url: "/series/airing_today",
      speed: 3200,
      name: "Currently Showing",
      data: todaySerie,
    },
  ];
  return (
    <Layout data={allSerie?.concat(popularSerie, topRatedSerie, todaySerie)} type="series" title="Series">
      {SeriesCategories?.map((mv, i) => {
        return (
          <HorizontalScrolling title={mv.name} speed={mv.speed} url={mv.url}>
            {mv?.data?.map((data, i) => (
              <ScrollingMovieCard data={data} type={"series"} i={i} />
            ))}
          </HorizontalScrolling>
        );
      })}
    </Layout>
  );
}
