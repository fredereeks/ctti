'use client'

import React from 'react'
import Link from 'next/link'

function DiffCard({id, icon, background, tag, title, text, full} : DiffCardProps) {

   const bg = [
    {
        id: 234,
        background: "bg-gradient-to-br shadow-md shadow-purple-500 from-purple-500 to-purple-600",
    },
    {
        id: 235,
        background: "bg-gradient-to-br shadow-md shadow-yellow-400 from-yellow-400 to-orange-400",
    },
    {
        id: 236,
        background: "bg-gradient-to-br shadow-md shadow-primary from-primary to-primary",
    },
    {
        id: 237,
        background: "bg-gradient-to-br shadow-md shadow-pink-500 from-pink-500 to-pink-600",
    },
]
const targetBg = bg.find(el => el.id === id)?.background

  const handleClick = (e: React.MouseEvent) => {
    if(full) {
      e.preventDefault();
      return false;
    }
    else{
      return true;
    }
  }

  return (
    <Link data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" href={`${full ? `` : `/about#${tag}`}`} onClick={handleClick} key={id} className={`bg-white flex flex-col items-start gap-2 py-6 sm:p-6 sm:py-8 ${full ? 'w-full px-6 cursor-text' : 'cursor-pointer w-full px-4'} shad hover:shadow-lg rounded-base transition-all duration-300`} id={tag}>
        <div className={`${full ? 'h-[55px] w-[55px]' : 'h-[50px] w-[50px]'} mb-2 rounded-md grid place-items-center ${targetBg}`}>
          <span className={`${full ? 'scale-150' : 'scale-125'}`}>
            {icon}
          </span>
        </div>
        <h4 className={`${full ? 'text-lg md:text-xl' : 'text-xl'} font-bold text-slate-500 capitalize`}>{title}</h4>
        <p className={`text-justify leading-loose ${full ? 'thin-text' : 'normal-text overflow-hidden text-ellipsis line-clamp-3'}`}>{text}</p>
    </Link>
  )
}

export default DiffCard