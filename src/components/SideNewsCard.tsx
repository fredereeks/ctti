import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

function SideNewsCard({images,title,createdAt, category,text,_id}: SideNewsCardProps) {
    return (<Link href={`/post/${_id}`} className="flex flex-row md:flex-col border border-slate-100 w-full bg-white gap-2 p-3 rounded-md shadow-md">
        <Image src={images[0]} alt={title} className="h-[120px] md:max-h-[180px] w-[128px] md:w-full md:w-50 object-cover bg-gradient-to-r from-slate-400 to-slate-300 rounded-md" />
        <div className="flex-1 flex flex-col justify-between">
            <>
                <h3 className="text-base pt-2 pb-1 text-slate-600 font-bold md:text-xs">{title}</h3>
                <div className="py-1 w-max px-2 text-[.6rem] md:text-xs text-slate-600 rounded-[2rem] bg-slate-100">Posted {moment(createdAt).fromNow()}</div>
            </>
            <button className="py-2 px-4 mb-1 w-max text-slate-600 text-xs border border-transparent hover:border-slate-600 rounded-sm">Read More</button>
        </div>
    </Link>)
}

export default SideNewsCard