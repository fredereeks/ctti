import React from 'react'
import Link from 'next/link'

export const BreadCrumb = ({page, extra}: BCProps) => {
    return (
      <section className="bg-gray-100 pt-14 px-4">
        <div className="container relative mx-auto container flex flex-col">
          <div className="flex flex-wrap gap-2 items-center pt-5 pb-7 text-slate-400">
            <Link href="/" className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">Home</Link>
            /
            {extra && <><Link href={extra?.link} className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600">{extra?.name}</Link>
            /</>}
            <div className="font-normal hover:text-slate-500 px-2 text-md md:text-lg text-slate-500">{page}</div>
          </div>
        </div>
      </section>
  )
}
