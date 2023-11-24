"use client"

import { categories } from '@/data';
import { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { CourseCard } from '.';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type CoursesProps = { id: string; image: StaticImageData; category: string; title: string; users: number; rating: number; description: string; duration: string; featured: boolean; requisite: string[]; contents: string[]; }

export default function CourseClient({ courses, categories }: { courses: CoursesProps[], categories: { id: string, title: string }[] }) {
    const [active, setActive] = useState(categories[0].title)
    const [selectedCourse, setSelectedCourse] = useState(courses)
    const [allCategories, setAllCategories] = useState(categories)

    const changeSelectedCourse = (title: string) => {
        setActive(title);
        title === "All" ? setSelectedCourse(courses.filter(course => course.category !== title)) : setSelectedCourse(courses.filter(course => course.category === title))
    }
    return (
        <>
            <div className="flex flex-row py-5 px-4 bg-slate-100">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={6}
                    // grid={{rows: 6}}
                >
                    {
                        allCategories.map(category => (
                            <SwiperSlide key={category.id}>
                                <button onClick={() => changeSelectedCourse(category.title)} className={`py-2 px-4 w-full flex flex-nowrap mx-2 hover:text-white whitespace-nowrap ${active === category.title ? 'bg-gradient-to-l from-blue-500 to-primary-500 text-white' : 'hover:bg-primary-500 hover:text-white'} rounded-sm md:rounded-br-full md:rounded-tr-full text-slate-600 text-xs md:text-sm text-center md:text-left`}>{category.title}</button>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="relative col-span-2 md:col-span-4">
                <div className="h-max col-span-1 md:col-span-3 px-4 grid bg-white gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                    {
                        selectedCourse.map(course => (<CourseCard key={course.id} {...course} />))
                    }
                </div>
            </div>
        </>
    )
}
