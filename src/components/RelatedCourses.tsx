"use client"

import React, { useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion'
import { CourseCard } from '.';

type CoursesProps = { id: string; image: StaticImageData; category: string; title: string; users: number; rating: number; description: string; duration: string; featured: boolean; requisite: string[]; contents: string[]; }

export default function RelatedCourses({ courses }: { courses: CoursesProps[] }) {
    const [width, setWidth] = useState<number>(0)
    const sliderRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        setWidth(sliderRef?.current?.scrollWidth! - sliderRef?.current?.offsetWidth!)
    }, [])
    // <div >

    return (
        <div className="container relative mx-auto py-10 flex flex-col overflow-hidden">
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="col-span-1 md:col-span-3 pt-6 pb-4 grid course__wrap gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                {
                    courses.map(course => <CourseCard key={course.id.toString()} {...course} />)
                }

            </motion.div>
        </div>
    )
}
