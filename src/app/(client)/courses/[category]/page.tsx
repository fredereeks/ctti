export const dynamic = 'force-static', revalidate = 'force-cache'

import { CourseCard } from '@/components'
import { courses } from '@/data'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type CourseParams = {
  params: {
    category: string
  }
}

type CoursesProps = { id: string; image: StaticImageData; category: string; title: string; users: number; rating: number; description: string; duration: string; featured: boolean; requisite: string[]; contents: string[]; }

const fetchCourse = async(category: string, type: string) => {
  const course: CoursesProps[] = await courses.filter(course => course.category.toLowerCase() === category.toLowerCase().replaceAll("-", " "))
  return course
}


export const generateStaticParams = async() => {
  const course: CoursesProps[] = await courses
  return course.map(el => ({ category:  el.category.toString() }))
}

export default async function CoursePage({ params: { category } }: CourseParams) {
  const state = await fetchCourse(category, "category")
  // console.log({category, state})

  return (
    <main className='flex flex-col bg-gray-100 pt-14 justify-center'>
      <div className="container relative mx-auto px-4 flex flex-col">
        <div className="flex flex-wrap gap-2 items-center pt-5 pb-7 text-slate-400">
          <Link href="/" className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">Home</Link>
          /
          <Link href="/courses" className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">Courses</Link>
          /
          <div className="font-normal hover:text-slate-500 capitalize px-2 text-md md:text-lg text-slate-500">{category}</div>
        </div>
      </div>
      <section className="relative py-20 px-5 bg-white overflow-hidden">
        <div className="absolute left-[20%] sm:left-[40%] top-[1rem] rotate-[-45deg] rounded-t-[4rem] rounded-b-none bg-gradient-to-br from-primary-400 to-pink-200 overflow-hidden origin-top-left border-[10px] border-primary w-full h-[200%]">
          {/* <div className="relative w-full h-full rotate-[-15deg]"> */}
          <Image src={state[0]?.image} alt={state[0]?.title} className="object-cover w-full h-full opacity-50 -left-[62%] sm:-left-[40%] top-0 rotate-[45deg] absolute" />
          {/* </div> */}
        </div>
        <div className="container relative mx-auto   px-4 flex flex-col">
          <div className="sm:w-[80%] md:w-[65%] lg:w-[50%] bg-white/50 md:bg-transparent pt-6 pr-3 flex flex-col justify-center">
            <p className="text-thin text-sitetext/50 leading-loose">The Best Place to Learn</p>
            <h3 className="text-primary heading text-3xl capitalize">{category.replaceAll("-", " ")}</h3>
            <p className="text-thin text-sitetext/80 leading-loose py-2">We provide you with guides, instructors, materials and resources to propel you into becoming a {category} professional beyond the periphery while spliting the learning process easily consummable bits for a smooth and progressive understanding.</p>
            {/* <Link className="text-gray-200 bg-[#3b1cec] rounded-[2rem] w-max px-3 py-2 text-sm md:text-md shadow-lg cursor-not-allowed shadow-[#ec1c3e]">Learn for Free</Link> */}
            <Link href={`/courses/${category}/#courses`} className="text-white bg-primary rounded-[2rem] w-max px-10 py-2 text-sm md:text-md shadow-lg shadow-primary-200 my-2">See Courses</Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-4">
        <div id="#courses" className="container max-w-screen-md relative mx-auto py-10 flex flex-col overflow-hidden">
          <h3 className="py-2 px-3 border-0 border-l-[3px] border-l-primary-500 capitalize heading">{category.replaceAll("-", " ")} Courses</h3>
          <div className="col-span-1 md:col-span-3 pt-6 pb-4 grid course__wrap gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {
              state.map(course => <CourseCard key={course.id} {...course} />)
            }
          </div>
        </div>
      </section>
    </main>
  )
}
