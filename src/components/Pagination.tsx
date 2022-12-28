import React from 'react';

export default function Pagination({page, next, prev, total_pages, count, offset, isPreviousData, limit}) {
  console.log(total_pages)
  return (
    <nav
    className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
    aria-label="Pagination"
  >
    <div className="hidden sm:block">
      <p className="text-sm">
        Showing <span className="font-medium">{offset+1}</span> to <span className="font-medium">{limit*page > count ? count : limit*page}</span> of{' '}
        <span className="font-medium">{count}</span> results
      </p>
    </div>
    <div className="flex-1 flex justify-between sm:justify-end">
      <button
      disabled={page === 1}
      onClick={prev}
        className="relative inline-flex items-center rounded-lg px-4 py-1 border-2 border-white justify-center cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 font-medium lg:text-lg text-sm disabled:opacity-40"
      >
        Previous
      </button>
      <div className="block sm:hidden">
      <p className="text-sm">
        <span className="font-medium">{offset+1}</span> to <span className="font-medium">{20*page > count ? count : 20*page}</span> of{' '}
        <span className="font-medium">{count}</span>
      </p>
    </div>
      <button
      onClick={next}
        className="ml-3 relative inline-flex items-center rounded-lg px-4 py-1 border-2 border-white justify-center cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 font-medium lg:text-lg text-sm disabled:opacity-40"
        disabled={isPreviousData || total_pages < page}
      >
        Next
      </button>
    </div>
  </nav>
  )
}