import { StarIcon } from '@heroicons/react/outline'
import { StarIcon as SolidStar } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import CheckGenre from 'utils/CheckGenre'
import GenerateStars from 'utils/GenerateStars'

export default function GridMovieCard({data, type}) {
  return (
    <Link to={type==="Movie" ? `/movie/${data?.id}` : `/tv/${data?.id}`} className="bg-cover bg-no-repeat bg-center md:h-[400px] h-[70vh] rounded shadow" style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`
    }}>
        <div className=" bg-gradient-to-b from-[#1D1D1D]/5 to-[#1d1d1d]/80 h-full w-full flex flex-col justify-end px-6 pb-8 gap-4 items-start">
            <div className='gap-2 flex w-full flex-wrap'>
                {
                    CheckGenre(data?.genre_ids, data?.title ? "movie" : "series")?.map(genre=>(
                        <div className="text-[#0FEFFD] bg-[#1d1d1d]/50 rounded-[8px] py-1 px-2 flex">{genre}</div>
                    ))
                }
            </div>
            <div className="flex">
        {
            GenerateStars(Math.round((data?.vote_average)/2))?.map((star, i)=>(
                <SolidStar className='h-4' key={i} />
            ))
        }
        {
            GenerateStars(5 - Math.round((data?.vote_average)/2))?.map((star, i)=>(
                <StarIcon className='h-4' key={i} />
            ))
        }
    </div>
            <div className=" font-medium text-2xl w-full truncate">{type==="Movie" ? data?.title : data?.name}</div>
        </div>
    </Link>
  )
}
