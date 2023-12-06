"use client"
import Image, { StaticImageData } from 'next/image';
import React from 'react'

type SkillCardProps = {
  id: string;
  image: StaticImageData;
  title: string;
  text: string;
  direction?: boolean;
}
function SkillCard({image, title, text, direction} : SkillCardProps) {
  return (
    <aside className={`group transition-all duration-300 py-8 px-4 flex flex-col items-stretch gap-3 md:gap-5 ${direction ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="relative flex-1 mx-auto flex transition-all duration-300 h-full py-4 flex-shrink-0 group-hover:shad bg-white rounded-md overflow-hidden">
            <Image src={image} alt={title} className="transition-all duration-300 h-full w-full rounded-md hover:shadow-xl shadow-lg object-cover scale-100 group-hover:scale-150" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 py-4 flex-shrink-0 ">
            <h4 className={`heading text-2xl text-primary`}>{title}</h4>
            <p style={{lineHeight: 2}} className="text-sitetext/80 text-justify text-md md:text-lg leading-loose py-2 pr-2">{text}</p>
        </div>
    </aside>
  )
}

export default SkillCard