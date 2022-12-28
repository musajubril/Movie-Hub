import React from 'react'
import { HomeIcon, FilmIcon, DeviceTabletIcon, StarIcon, SearchIcon } from "@heroicons/react/outline"
import { HomeIcon as SHomeIcon, FilmIcon as SFilmIcon, DeviceTabletIcon as SDeviceTabletIcon, StarIcon as SStarIcon } from "@heroicons/react/solid"
import { Link } from 'react-router-dom'
export default function SideBar() {
    const navs = [
        {icon: HomeIcon, url: "/"},
        {icon: FilmIcon, url: "/movies"},
        {icon: DeviceTabletIcon, url: "/series"},
        {icon: SearchIcon, url: "/search"},
        {icon: StarIcon, url: "/"},
    ]
  return (
    <div className="bg-[#1d1d1d]/50 lg:h-screen fixed lg:left-0 bottom-0 flex lg:flex-col lg:w-14 w-full justify-center lg:justify-start z-50">
        <div className="lg:pt-10 lg:pb-16 hidden lg:block">
            <img src={require("../images/logo.png")} />
        </div>
        <div className="flex lg:flex-col px-3 lg:gap-16 gap-5 text-white items-center justify-center py-2">
            {
                navs.map((nav,i)=>(
                    <Link to={nav.url} className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    {/* <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full"> */}
                    <nav.icon className="w-6 h-6" />
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
