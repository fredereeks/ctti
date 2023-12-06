import Image, { StaticImageData } from 'next/image'
import React from 'react'

type PartnersCardProps = {
  id?: string
  direction?: boolean
  image: StaticImageData
  title: string
  text: string
}

function PartnersCard({ image, title, text, direction }: PartnersCardProps) {
  return (
    <aside className={`group transition-all duration-500 py-8 px-4 flex flex-col gap-3 md:gap-5 md:items-center ${direction ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="relative mx-auto h-full md:h-full w-[250px] p-4 md:flex-1 flex-shrink-0  rounded-md">
            <Image src={image} alt={title} className="h-auto max-h-[300px] max-w-full object-contain" />
        </div>
        <div className="flex flex-col gap-2 py-4 flex-1 md:flex-2">
            <h4 className={`text-xl md:text-3xl font-bold text-primary`}>{title}</h4>
            <p style={{lineHeight: 2}} className="text-sitetext/80 text-justify font-medium text-md md:text-base leading-loose py-2 pr-2">{text}</p>
        </div>
    </aside>
  )
}

export default PartnersCard