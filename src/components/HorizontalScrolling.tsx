import { ChevronRightIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function HorizontalScrolling({ children, title, speed, url }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: speed
      };
  return (
    <>
    <div className="flex justify-between py-6 px-3 w-full items-center text-white font-medium text-lg">
        <div className="flex gap-2 items-center lg:px-[108px]">
          {title}{" "}
          <span>
            <ChevronRightIcon className="h-4" />
          </span>{" "}
        </div>
        <Link to={url} className="flex gap-2 items-center rounded-lg px-4 py-1 border-2 border-white justify-center cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 font-medium lg:text-lg text-sm">
          View More{" "}
          <span>
            <ExternalLinkIcon className="h-4" />
          </span>{" "}
        </Link>
        </div>
    <div className="overflow-hidden h-[380px]">
      <div className=" overflow-x-scroll w-full h-[400px] overflow-y-hidden whitespace-nowrap lg:pl-[56px] pl-6">
        <div className="flex w-[3000px] gap-4">
        <Slider {...settings} className="flex w-[1248px] gap-4">
            {children}
            </Slider>
        </div>
      </div>
    </div>
    </>
  );
}
