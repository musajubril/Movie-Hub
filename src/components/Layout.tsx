import React from "react";
import Hero from "./Hero";
import SideBar from "./SideBar";
import { motion } from "framer-motion"

export default function Layout({ children, data, type, title }) {
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
            transition={{ type: 'linear' }} className="pb-10">
        <Hero data={data} type={type} title={title} />
        {children}
      </motion.div>
    </div>
  );
}
