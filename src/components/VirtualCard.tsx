import React from 'react'

function VirtualCard({icon, title, text} : VirtualCardProps) {
  return (
    <aside className={`group p-5 border-3 border-transparent hover:border-primary transition-all duration-300 rounded-md shad hover:drop-shadow-2xl bg-white flex flex-col gap-2`}>
        <div className="relative mx-3 mt-3 h-[50px] w-[50px] md:h-[80px] md:w-[80px] flex-shrink-0 group-hover:shad bg-primary/10 group-hover:bg-primary rounded-full grid place-items-center overflow-hidden">
          {icon}
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 flex-shrink-0">
            <h4 className={`heading text-xl text-primary`}>{title}</h4>
            <p className="text-sm md:text-base text-sitetext/80 font-medium text-justify leading-loose py-2 pr-2">{text}</p>
        </div>
    </aside>
  )
}

export default VirtualCard