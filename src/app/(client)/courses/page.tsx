export const dynamic = 'force-static', revalidate = 'force-cache'

import { BreadCrumb } from '@/components'
import CourseClient from '@/components/CourseClient'
import { categories, courses } from '@/data'
// import db from '@/utils/db'
import { randomNumber } from '@/utils/randomNumber'
import { StaticImageData } from 'next/image'

const fetchCourses = async () => {
    const coursesData = await courses;
    return coursesData;
}

const fetchCategories = async () => {
    const res: CategoryProps[] = await categories;
    const courseCategories = res.map((category, i) => ({id: category.id.toString(), title: category.title}))
    const allCategories = [{id: randomNumber(2834, 89034).toString(), title: "All"}, ...courseCategories]
    return allCategories;
}

type CoursesProps = { id: string; image: StaticImageData; category: string; title: string; users: number; rating: number; description: string; duration: string; featured: boolean; requisite: string[]; contents: string[]; }

const fetchCourse = async() => {
    // const courses = db.query(`SELECT * FROM `)
}

export default async function CoursesPage() {
    const coursesData: CoursesProps[] = await fetchCourses();
    const categoryData: {id: string, title: string}[] = await fetchCategories()
    return (
        <main className='flex flex-col justify-center bg-white'>
            <BreadCrumb key={8923} page={"Courses"} />
            <section className="container bg-white relative mx-auto flex flex-col gap-5 py-20">
                <div className="flex flex-col gap-2 pb-10 justify-center items-center">
                    {/* <h3 className="text-2xl md:text-2xl font-bold text-blue-600 mx-auto max-w-[90%] sm:max-w-[300px] text-center capitalize">We are equipped with<span className ="text-cyan-400">Expert Trainers</span> in the following courses </h3> */}
                    <h3 className="heading text-center leading-tight">We are equipped with Expert Trainers in the following courses </h3>
                    <p className="text-sitetext/80 py-2 px-4 text-center">Taking a course with us gives you access and guarantees a slew of benefits and resources during and after course</p>
                </div>
                <div className="flex flex-col gap-4">
                    <CourseClient courses={coursesData} categories={categoryData}/>
                </div>
            </section>
        </main>
    )
}
