import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

export default function MovieGrid({children, title}) {
  return (
    <>
        <div className="flex gap-2 items-center lg:px-[108px] py-6">
          {title}{" "}
          <span>
            <ChevronRightIcon className="h-4" />
          </span>{" "}
        </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5  lg:pl-[56px] pl-6'>
        {children}
    </div>
    </>
  )
}
