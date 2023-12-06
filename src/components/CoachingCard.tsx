import React from 'react'
import { FaCheck } from 'react-icons/fa'

function CoachingCard({title, contents, state} : CorporateAndCoachingProps) {
  return (
    <aside className="bg-white rounded-md p-4 shadow-lg flex flex-col gap-2 m-2">
        <h3 className={`${state ? 'text-primary' : 'text-primary'} text-lg md:text-xl font-bold p-2`}>{title}</h3>
        <div className="flex flex-col gap-2 py-2 divide-y divide-slate-300 border-t border-t-slate-300 pb-0">
          {
            contents.map((req,i) => (<p key={i} className="text-sitetext/80 py-1 leading-loose text-sm flex items-center gap-2"><FaCheck className='bg-primary text-white h-[15px] w-[15px] flex-shrink-0 text-xs p-1 grid place-items-center rounded-full' /> {req}</p>))
          }
        </div>
    </aside>
  )
}

export default CoachingCard