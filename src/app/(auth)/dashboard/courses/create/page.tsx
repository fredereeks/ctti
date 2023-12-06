import CourseForm from '@/app/(auth)/ui/CourseForm'
import React from 'react'

export default function NewCourse() {
  return (
    <main className="flex flex-col gap-4 px-2 sm:px-0 pt-5 pb-10">
      <section className="relative flex flex-col gap-2 p-4 bg-white  dark:bg-[#dbf0f724] dark:shadow-black shadow-slate-200 shadow-md rounded-lg">
        <CourseForm />
      </section>
    </main>
  )
}
