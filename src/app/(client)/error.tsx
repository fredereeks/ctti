"use client"

import Image from 'next/image'
import Link from 'next/link'
import { error500 } from '@/assets/images'
import { FaArrowLeft } from 'react-icons/fa'
import { BreadCrumb } from '@/components'


export default function ErrorPage() {
  return (
    <main className='flex flex-col justify-center bg-white min-h-[60vh]'>
      <BreadCrumb page={"Error Page"} />
      <section className="flex-1 flex flex-col gap-2 justify-center container mx-auto py-20">
        <div className="flex flex-col text-white items-center">
          <h3 className="heading text-3xl md:text-5x text-center px-4">Houston, we have a Problem!</h3>
          <p className="normal-text text-center px-4">The request you made returned an error...ouch!</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="relative h-[200px] w-[200px] translate-x-[3.5rem] flex-shrink-0">
            <Image src={error500} alt="Error 404" fill={true} className="h-15 w-15 object-contain" />
          </div>
          <Link href="/" className="transition-all duration-300 hover:scale-100 scale-[.95]  flex items-center group gap-2"><FaArrowLeft className='pr-0 text-md pt-0 text-gray-200' /> <p className="text-md text-gray-200">Back to Home</p></Link>
        </div>
      </section>
    </main>
  )
}
