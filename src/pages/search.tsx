import { motion } from "framer-motion"
import SideBar from "components/SideBar";
import Title from "components/Search/Title";
import { getRequest } from "api/apiCall";
import GridMovieCard from "components/GridMovieCard";
import MovieGrid from "components/MovieGrid";
import Pagination from "components/Pagination";
import React from "react";
import { useQuery } from "react-query";
import { MovieSearch } from "api/apiurl";
import { Ripple } from "react-load-animations"
import { Link } from "react-router-dom";
export default function Search() {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 5000 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -5000 },
    }
    const [offset, setOffset] = React.useState(0)
    const [search, setSearch] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [query, setQuery] = React.useState()
    const { data: movies, isPreviousData, status, isFetching } = useQuery(
        ["search", query, page, search],
        async () => await getRequest({ url: MovieSearch(query, page) }),
        {
          retry: 2,
          enabled: search,
        }
      );
      const [data, setData] = React.useState(movies?.Search);
      React.useEffect(() => {
        setData(movies?.Search);
      }, [movies?.Search]);
      React.useEffect(()=>{
  setOffset((page-1)*10)
},[page])
      const handlePrevious = () => {
        setPage(old => Math.max(old - 1, 1))
    }
    const handleNext = () => {
      if (!isPreviousData && page < Math.round(Number(movies?.totalResults)/10)) {
        setPage(old => old + 1)
      }
    }
    console.log(data)
  return (
    <div className="bg-[#1D1D1D] min-h-screen text-white">
      <SideBar />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="pb-10 max-w-7xl lg:px-[108px] py-6"
      >
        <Title setQ={setQuery} setS={setSearch} search={search} query={query} />
        {
            (!isFetching && status==="success") &&
            <>
        <MovieGrid title={query+" Movies And Tv Shows"}>
            {
                data?.map((movie, index) => (
                    <Link to={`/search/${movie.imdbID}`} className="bg-cover bg-no-repeat bg-center md:h-[400px] h-[70vh] rounded shadow" style={{
                        backgroundImage: `url(${movie.Poster})`
                    }}>
                        <div className=" bg-gradient-to-b from-[#1D1D1D]/5 to-[#1d1d1d]/80 h-full w-full flex flex-col justify-end px-6 pb-8 gap-4 items-start">
                            <div className='gap-2 flex w-full flex-wrap'>
                                        <div className="text-[#0FEFFD] bg-[#1d1d1d]/50 rounded-[8px] py-1 px-2 flex">{movie.Type}</div>
                            </div>
                            <div className=" font-medium text-2xl w-full truncate">{movie?.Title}</div>
                        </div>
                    </Link>
                    ))
            }
        </MovieGrid>
        <Pagination
        page={page}
        next={handleNext}
        prev={handlePrevious}
        total_pages={Math.round(Number(movies?.totalResults)/10)}
        count={movies?.totalResults}
        offset={offset}
        isPreviousData={isPreviousData}
        limit={10}
        />
            </>
        } 
        {
        (status==="loading" || isFetching) &&
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <Ripple width={100} height={100} />
        </div>
      }
      </motion.div>
    </div>
  );
}
