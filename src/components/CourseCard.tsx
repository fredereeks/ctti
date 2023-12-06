'use client'

import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { IoMdStarOutline } from 'react-icons/io'
import Link from 'next/link'
import { randomNumber } from '../utils'
import { IoTimeOutline } from 'react-icons/io5'
import Image from 'next/image'

function CourseCard({id, image, title, rating, duration, users, category} : CourseCardProps) {
  const delay = randomNumber(2, 5) >= 3 ? "600" : "800";
return (
    <Link data-aos-duration="1000" data-aos-delay={delay} data-aos={"fade-up"} href={`/courses/${category.toLowerCase().replaceAll(" ", "-")}/${id.toString()}`} className="bg-white flex flex-col gap-2 max-w-[25rem] group shadow-lg hover:shadow-2xl rounded-base transition-all duration-300">
        <div className={`relative h-[130px] sm:h-[200px] w-full hover:rounded-none rounded-md rounded-br-none rounded-bl-none grid place-items-center overflow-hidden bg-primary`}>
            <Image src={image} alt={title} className="absolute w-full h-full top-0 left-0 object-cover" />
        </div>
        <div className="flex flex-1 flex-col p-3 pt-0 justify-between items-start">
            <div className="flex flex-col">
              <p className="text-[.5rem] sm:text-[.6rem] px-3 bg-primary/20 w-max text-primary py-[.2rem] rounded-[2rem] my-1">{category}</p>
              <h4 className="text-sm sm:text-md md:text-base font-bold text-slate-500 capitalize">{title}</h4>
            </div>
            <div className="flex gap-1 sm:gap-3 items-end pt-4 pb-2">
              <div className="flex items-center text-slate-600 gap-1 sm:gap-2 text-[.6rem] sm:text-xs">
                <p className="gap-1 sm:gap-2 items-center bg-green-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center"><FaUserAlt className='text-green-300 text-[.5rem]' /></p>{users}+
              </div>
              <div className="flex items-center text-slate-600 gap-2 text-[.6rem] sm:text-xs">
                <p className="gap-1 sm:gap-2 items-center bg-yellow-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center"><IoMdStarOutline className='text-yellow-300 text-[.5rem]' /></p>{rating.toFixed(1)}
              </div>
              <div className="flex items-center text-slate-600 gap-2 text-[.6rem] sm:text-xs">
                <p className="gap-1 sm:gap-2 items-center bg-primary-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center"><IoTimeOutline className='text-primary text-[.5rem]' /></p>{duration}
              </div>
              {/* <div className="flex items-center text-slate-600 gap-1 text-[.6rem] sm:text-xs">
                <p className="gap-1 sm:gap-2 items-center text-pink-400 bg-pink-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center">&#8358;</p>Inside
              </div> */}
            </div>
        </div>
    </Link>
  )
}

export default CourseCard