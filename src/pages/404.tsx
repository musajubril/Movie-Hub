import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col gap-5 items-center justify-center bg-[#1d1d1d]'>
        <img src={require("../images/404.gif")} alt="" className="hover:rotate-12 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3" />
        <Link to="/" className="bg-purple-700 text-white border-2 border-purple-700 font-bold shadow hover:scale-105 hover:bg-transparent hover:text-purple-700 transform transition-all duration-500 py-2 px-4 rounded-lg">Back To Home</Link>
    </div>
  )
}
