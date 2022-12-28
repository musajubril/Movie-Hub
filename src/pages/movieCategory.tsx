import { getRequest } from 'api/apiCall'
import { AllRoutes, FindById, GetMovie, GetSeries } from 'api/apiurl'
import GridMovieCard from 'components/GridMovieCard'
import Layout from 'components/Layout'
import MovieGrid from 'components/MovieGrid'
import Pagination from 'components/Pagination'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Ripple } from 'react-load-animations';
import axios from 'axios'

export default function MovieCategory() {
    const params = useParams()
    const { slug } = params
    const Category = AllRoutes.find(cat=> cat.slug===slug)
    
  const [offset, setOffset] = React.useState(0)
  const [page, setPage] = React.useState(1)
    const { data: movies, isPreviousData, status, isFetching } = useQuery(
        [Category.key, page],
        async () => await getRequest({ url: Category.url(page) }),
        {
          retry: 2,
        }
      );
      const [data, setData] = React.useState(movies?.results);
      React.useEffect(() => {
        setData(movies?.results);
      }, [movies?.results]);
      React.useEffect(()=>{
  setOffset((page-1)*10)
},[page])
      const handlePrevious = () => {
        setPage(old => Math.max(old - 1, 1))
    }
    const handleNext = () => {
      if (!isPreviousData && page < movies?.total_pages) {
        setPage(old => old + 1)
      }
    }
    const [search, setSearch] = React.useState(false)
    React.useEffect(()=>{
      if(data) {
        if(data[0]?.id){
          setSearch(true)
          axios.get(GetMovie(data && data[0]?.id))
          .then(res=>{
            console.log(res.data)
          })
        }
      }
    },[data])
    const { data: singleMovie } = useQuery(
        ["findById", data && data[0]?.id, search],
        async () => await getRequest({ url: GetSeries(data && data[0]?.id) }),
        {
          retry: 2,
          enabled: !(data && data[0]?.id) && search
        }
      );
      console.log(singleMovie)
  return (
    <Layout data={data}
      type={Category.type}
      title={Category.title}>
        {
            (!isFetching && status==="success") &&
            <>
        <MovieGrid title={Category.title}>
            {
                data?.map((movie, index) => (
                    <GridMovieCard data={movie} key={index} type={Category.type} />
                    ))
            }
        </MovieGrid>
        <Pagination
        limit={20}
        page={page}
        next={handleNext}
        prev={handlePrevious}
        total_pages={movies?.total_pages}
        count={movies?.total_results}
        offset={offset}
        isPreviousData={isPreviousData}
        />
            </>
        }
        {
        (status==="loading" || isFetching) &&
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <Ripple width={100} height={100} />
        </div>
      }
    </Layout>
  )
}
