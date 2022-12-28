import { getRequest } from 'api/apiCall';
import { GetMovie } from 'api/apiurl';
import Layout from 'components/Layout';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router'
import { motion } from "framer-motion"
import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as SolidStar } from '@heroicons/react/solid';
import SideBar from 'components/SideBar';
import CheckGenre from 'utils/CheckGenre';
import GenerateStars from 'utils/GenerateStars';
import moment from 'moment';
import { useLocation } from 'react-router';

export default function MovieData() {
    const params = useParams()
    const { id } = params
    const { data: movie, isPreviousData, status, isFetching } = useQuery(
        ["Movie Data", id],
        async () => await getRequest({ url: GetMovie(id) }),
        {
          retry: 2,
        }
      );
      const [data, setData] = React.useState(movie);
      React.useEffect(() => {
        setData(movie);
      }, [movie]);
      const variants = {
        hidden: { opacity: 0, x: -200, y: 5000 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -5000 },
    }
  return (
    <div className="bg-[#1D1D1D] min-h-screen text-white">
      <SideBar />
      <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }} className="">
         <div
          className="w-full bg-cover bg-center bg-no-repeat min-h-screen bg-fixed bg-[#1D1D1D] "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
            backgroundPosition: "center",
          }}
        >
          <div
            className="min-h-screen w-full  bg-gradient-to-b from-[#1D1D1D]/80 to-[#1d1d1d]/90 pb-20"
          >
            <div className="pt-[100px] lg:pl-[236px] px-6 flex flex-col md:flex-row items-center gap-4 text-white min-h-screen">
                <div className="md:h-[400px] h-[70vh]  bg-cover bg-center bg-no-repeat shadow-lg w-[300px] rounded-lg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`}}></div>
                <div className=" flex flex-col items-start gap-4 lg:w-[632px] w-full">

              <div className="gap-2 flex w-[250px] flex-wrap">
                {data &&
                  data?.genres?.map((genre) => (
                    <div className="text-[#0FEFFD] bg-[#1d1d1d]/50 rounded-[8px] py-1 px-2 flex">
                      {genre?.name}
                    </div>
                  ))}
              </div>
              <div className="flex">
                {data &&
                  data?.vote_average &&
                  GenerateStars(Math.round(data?.vote_average / 2))?.map(
                    (star, i) => <SolidStar className="h-4" />
                  )}
                {data &&
                  data?.vote_average &&
                  GenerateStars(5 - Math.round(data?.vote_average / 2))?.map(
                    (star, i) => <StarIcon className="h-4" />
                  )}
              </div>
              <div className="lg:text-[56px] lg:text-6xl text-5xl font-medium">
                {data?.title ? data?.title : data?.name}
              </div>
              <div className=" font-bold text-base italic">{data?.tagline}</div>
              <div className=" font-normal text-base">{data?.overview}</div>
              <div className=" font-normal text-lg flex gap-5 items-center">Release Date: <span> {moment(data?.release_date).format("LL")}</span></div>
              <div className=" font-normal text-lg flex gap-5 items-center">Status: <span> {data?.status}</span></div>
              <div className=" font-normal text-lg flex gap-5 items-center">Votes Average: <span> {data?.vote_average+" "}/ 10</span></div>
              <div className=" font-normal text-lg flex gap-5 items-center">Total Votes: <span> {data?.vote_count}</span></div>
                </div>
            </div>
          </div>
        </div>
      <div className="lg:px-[108px] py-6"></div>
      </motion.div>
    </div>
  )
}
