import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Title({setQ, setS, search, query}) {
  return (
    <form className="pb-5 border-b border-white flex sm:flex-row flex-col gap-5 sm:flex sm:items-center sm:justify-between" onSubmit={(e)=>{
        e.preventDefault()
        setS(true)}}>
        <h3 className="text-lg font-medium leading-6 text-white">
        <div className="text-5xl">Search Movie</div>
        </h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <label htmlFor="search_candidate" className="sr-only">
            Search
          </label>
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="search"
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setS(false)
                    setQ(e.target.value)
                }}
                name="search_movie "
                id="search_movie"
                className="block w-full pl-10 border-white border-2 py-2 rounded-none focus:ring-white focus:border-white bg-transparent rounded-l-md sm:hidden"
                placeholder="Search"
              />
              <input
                type="search"
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setS(false)
                    setQ(e.target.value)
                }}
                name="search_movie"
                id="search_movie"
                className="hidden w-full pl-10 border-white border-2 py-2 rounded-none focus:ring-white focus:border-white bg-transparent rounded-l-md sm:block sm:text-sm"
                placeholder="Search Movie"
              />
            </div>
            <button
              type="submit"
              className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium border border-gray-300 rounded-r-md hover:bg-transparent hover:text-white font-bold bg-white text-[#1d1d1d] focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              
            >
              Search
            </button>
          </div>
        </div>
      </form>
  )
}
