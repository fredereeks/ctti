import Image, { StaticImageData } from 'next/image'
import React from 'react'

type PartnersCardProps = {
  id?: string
  direction?: boolean
  background: string
  image: StaticImageData
  title: string
  text: string
}

function PartnersCard({background, image, title, text, direction}: PartnersCardProps) {
  return (
    <aside className={`group transition-all duration-500 py-8 px-4 flex flex-col gap-3 md:gap-5 md:items-center ${direction ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="relative mx-auto h-[250px] md:h-full w-[250px] md:flex-1 flex-shrink-0 group-hover:shad bg-white rounded-md">
            <Image src={image} alt={title} className="h-full w-full object-contain" />
        </div>
        <div className="flex flex-col gap-2 py-4 flex-1 md:flex-2">
            <h4 className={`text-xl md:text-3xl text-transparent font-bold ${background}`}>{title}</h4>
            <p style={{lineHeight: 2}} className="text-sitetext text-justify font-medium text-md md:text-base leading-loose py-2 pr-2">{text}</p>
        </div>
    </aside>
  )
}

export default PartnersCard