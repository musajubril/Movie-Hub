import { UserIcon, CogIcon, StarIcon } from "@heroicons/react/outline";
import { StarIcon as SolidStar } from "@heroicons/react/outline";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CheckGenre from "utils/CheckGenre";
import GenerateStars from "utils/GenerateStars";

export default function Hero({ data, type, title }) {
  return (
    <Carousel
      animation="fade"
      interval={4000}
      swipe={true}
      cycleNavigation={true}
      fullHeightHover={true}
      indicatorContainerProps={{
        className: "sr-only",
        style: {
          display: "none", // 5
        },
      }}
    >
      {data?.map((hero, i) => (
        <div
          className="w-full bg-cover bg-center bg-no-repeat h-[648px]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${hero?.backdrop_path})`,
            backgroundPosition: "center",
          }}
        >
          <div
            className="h-full min-h-[80vh] w-full"
            style={{
              background:
                "linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%)",
            }}
          >
            <div className="pt-6 flex w-full justify-between lg:pr-16 px-4 items-center text-white">
                <div className="lg:px-[108px] text-5xl">{title}</div>
                <div className="gap-10 flex flex-end items-center">
              <UserIcon className="w-6 h-6" />
              <CogIcon className="w-6 h-6" />
                </div>
            </div>
            <div className="pt-[100px] lg:pl-[236px] px-6 flex flex-col items-start gap-4 text-white lg:w-[632px] w-full">
              <div className="gap-2 flex w-[250px] flex-wrap">
                {hero &&
                  hero?.genre_ids &&
                  CheckGenre(hero?.genre_ids, hero?.title ? "movie": "series")?.map((genre) => (
                    <div className="text-[#0FEFFD] bg-[#1d1d1d]/50 rounded-[8px] py-1 px-2 flex">
                      {genre}
                    </div>
                  ))}
              </div>
              <div className="flex">
                {hero &&
                  hero?.vote_average &&
                  GenerateStars(Math.round(hero?.vote_average / 2))?.map(
                    (star, i) => <SolidStar className="h-4" />
                  )}
                {hero &&
                  hero?.vote_average &&
                  GenerateStars(5 - Math.round(hero?.vote_average / 2))?.map(
                    (star, i) => <StarIcon className="h-4" />
                  )}
              </div>
              <div className="lg:text-[56px] lg:text-6xl text-5xl font-medium">
                {hero?.title ? hero?.title : hero?.name}
              </div>
              <div className=" font-normal text-base">{hero?.overview.slice(0, 300)}.</div>
              <div className=" rounded-[40px] p-4 border-2 border-white lg:w-[200px] max-w-[200px] flex justify-center items-center cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 font-medium lg:text-lg text-sm">
                Watch Now
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
