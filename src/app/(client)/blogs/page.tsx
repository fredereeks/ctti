import { BreadCrumb } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CTTI e-learning Centre :: Blog',
    description: 'At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys',
  }
// import {prisma} from "@/lib/prisma"

// const fetchCourse = async() => {
//     const course = await prisma.course.findMany({
//         include: {
//             _count: {
//                 select: {
//                     rating: {},
//                     batches: {},
//                 }
//             },
//         }
//     })
//     return course
// }


export default async function BlogsPage() {
    return (
        <main className='flex flex-col justify-center bg-white min-h-[60vh]'>
            <BreadCrumb page={"Blogs"} />
            <div className="flex-1 flex flex-col gap-2 justify-center container mx-auto py-20">
                <h3 className="heading text-3xl md:text-5x text-center px-4">Coming Soon!</h3>
                <p className="normal-text text-center px-4">This page is currently being developed</p>
            </div>
        </main>
    )
}
