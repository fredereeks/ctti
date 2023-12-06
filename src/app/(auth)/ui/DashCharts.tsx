"use client"

import { courses } from '@/data';
import { onlyUnique } from '@/utils/findUnique';
import React, { ReactElement } from 'react'
import { useEffect } from 'react';
import { Chart } from "react-google-charts";

export const options = {
    chart: {
        title: "Course Performance",
        subtitle: `Course Enquiry Record: 2023 - ${new Date().getFullYear()}`,
    },
};


export default function DashCharts({ enquiry }: { enquiry: EnquiryProps[] }) {
    
    // const categories: (string)[] = []
    // const courseRecords = enquiry.map(enquiry => (courses.find(course => course.id === enquiry.courseId)))
    const courseCategories = courses.map(course => course.category).filter(onlyUnique)
    const totalEnquiries = enquiry.map(enquire => {
        const course = courses.find(course => course.id === enquire.courseId)
        return {enquireId: enquire?.id, category: course?.category, total: enquiry.filter(el => el.courseId === course?.id).length}
    })
    
    
    const data = [
        ["Products", "Label", "Total"],
        ["Category", "Category", courseCategories.length],
        ["Enquiries", "Enquiries", enquiry.length],
        ["Courses", "Courses", courses.length],
    ];
    // console.log({totalEnquiries, data})
    
    return (
        <>
            <aside className="my-5 p-4 bg-white dark:bg-[#dbf0f724] dark:shadow-black shadow-slate-200 shadow-md rounded-lg relative grid gap-4">
                <div className="flex flex-wrap gap-4">
                    <div className="relative flex-1">
                        <Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />
                    </div>
                    <div className="w-2/5 sm:p-4 bg-primary dark:bg-success/40 flex flex-col justify-center rounded-md">
                        <div className="grid text-slate-700 place-items-center px-4">
                            <div className="stat-title text-sm text-slate-200">Enquiries</div>
                            <div className="font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter text-slate-50 dark:text-slate-200">{enquiry.length}</div>
                            {/* <div className="stat-desc text-xs dark:text-slate-200 text-slate-100 whitespace-pre-wrap text-center">{enquiry.map(enquire => enquire.email).filter(onlyUnique).length}</div> */}
                        </div>
                        {/* <div className="py-5 mx-2 border-t border-t-slate-200/90 grid place-items-center">
                            <div className="stat-title text-sm text-slate-200">Total Enquiries</div>
                            <div className="stat-value text-xl sm:text-3xl md:text-2xl lg:text-3xl tracking-tighter text-slate-50 dark:text-slate-200">&#8358;68,820</div>
                        </div> */}
                    </div>
                </div>
            </aside>

        </>
    )
}
