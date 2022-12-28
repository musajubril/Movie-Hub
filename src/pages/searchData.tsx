import { getRequest } from 'api/apiCall';
import { FindById } from 'api/apiurl';
import React from 'react'
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router';
import { Ripple } from 'react-load-animations';

export default function SearchData() {
    const params = useParams()
    const navigate = useNavigate()
    const { id } = params
    const { data, isPreviousData, status, isFetching } = useQuery(
        ["Search Data", id],
        async () => await getRequest({ url: FindById(id) }),
        {
          retry: 2,
        }
      );
      React.useEffect(()=>{
        console.log(data)
        if(data?.movie_results.length){
            navigate(`/movie/${data?.movie_results[0]?.id}`, { replace: true })
        }
        if(data?.tv_results.length){
            navigate(`/tv/${data?.tv_results[0]?.id}`, { replace: true })
        }
      },[data])
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1d1d1d] text-white">
          <Ripple width={100} height={100} />
        </div>
  )
}
