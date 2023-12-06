import React from 'react'
import CoursesList from './CoursesList'
import { Metadata } from 'next';
import { StaticImageData } from 'next/image';
import { courses } from '@/data';

export const metadata: Metadata = {
  title: 'CTTI e-learning Centre :: Messages',
  description: 'Contact Us at CTTI. We are an e-Learning Course Centre is an Online Platform devoted to bringing quality, standard and professional courses to your need wherever and whenever you need it',
}


type CourseProps = { id: string; image: StaticImageData; category: string; title: string; users: number; rating: number; description: string; duration: string; featured: boolean; requisite: string[]; contents: string[]; }

const fetchCourses = async() => {
    // const courses = await prisma.course.findMany()
    const coursesData = await courses
    return coursesData as CourseProps[]
}


export default async function Messages() {
  const coursesData: CourseProps[] = await fetchCourses();
  return (
    <main className="flex flex-col gap-4 px-2 sm:px-0 pt-5 pb-10">
      <section className="relative flex flex-col gap-2 p-4 bg-white  dark:bg-[#dbf0f724] dark:shadow-black shadow-slate-200 shadow-md rounded-lg">
        <CoursesList key={'92720'} coursesData={coursesData} />
      </section>
    </main>
  )
}
