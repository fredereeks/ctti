"use client"
import React, { useRef, useState } from 'react'
import { Modal, TableSearch } from '@/app/(auth)/ui'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { courses } from '@/data'
import { CourseCard } from '@/components'
import { StaticImageData } from 'next/image'

type CourseProps = { id: string; image: StaticImageData; category: string; title: string; users: number; rating: number; description: string; duration: string; featured: boolean; requisite: string[]; contents: string[]; }


export default function CourseList({ coursesData }: {coursesData: CourseProps[]}) {
    const [allTableData, setAllTableData] = useState<CourseProps[]>(coursesData)
    const [tableData, setTableData] = useState<CourseProps[]>(coursesData)
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const replyRef = useRef<HTMLDialogElement | null>(null)
    const formRef = useRef<HTMLFormElement | null>(null)
    const subjectRef = useRef<HTMLInputElement | null>(null)
    const messageRef = useRef<HTMLTextAreaElement | null>(null)
    const [selectedMessage, setSelectedMessage] = useState<CourseProps>()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [loading, setLoading] = useState<boolean>(false)


    const handleClick = (id: string) => {
        try {
            // make request to get user details
            const targetMessage = coursesData?.find(message => message.id.toString() === id.toString())
            if (targetMessage) {
                setSelectedMessage(prev => ({ ...targetMessage }))
            }
            modalRef.current?.showModal()
        }
        catch (err) {
            toast.error(`Could not Show this Message. Check your Internet connection and try again`, { id: "86249", duration: 5000 })
        }
    }

    const handleReply = (id: number | string) => {
        try {
            // make request to get user details
            const targetMessage = coursesData?.find(message => message.id.toString() === id.toString())
            if (targetMessage) {
                setSelectedMessage(prev => ({ ...targetMessage }))
            }
            // replyRef.current?.showModal()
        }
        catch (err) {
            toast.error(`Could not Send your reply. Check your Internet connection and try again`, { id: "86249", duration: 5000 }) 
        }
    }

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setLoading(true)
    //     try {
    //         const formData = new FormData(formRef?.current!)
    //         const res = await sendMessage(formData)
    //         res.error ?  toast.error(res.message) : toast.success(res.message)
    //         formRef.current?.reset()
    //         replyRef.current?.close()
    //     }
    //     catch (err) {
    //         toast.error(`Sorry, we could not send your message. Please, check your network and try again`)
    //     }
    //     setLoading(false)
    // }

    // const handleSearch = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     let keyword = inputRef.current?.value.toLowerCase() || ''
    //     if (!keyword || keyword === '') {
    //         setTableData(allTableData)
    //     }
    //     else {
    //         const result = tableData.filter(el => el.firstname.toLowerCase().includes(keyword) || el.middlename?.toLowerCase().includes(keyword) || el.lastname.toLowerCase().includes(keyword) || el.email.toString().toLowerCase().includes(keyword) || el.createdAt?.toString().toLowerCase().includes(keyword) || el.phone?.toLowerCase().includes(keyword) || el.state?.toString().toLowerCase().includes(keyword) || el.country?.toString().toLowerCase().includes(keyword) || el.message?.toString().toLowerCase().includes(keyword))
    //         setTableData(prev => [...result])
    //     }
    // }

    return (
        <>
        <div className="container relative mx-auto py-10 flex flex-col gap-6 overflow-hidden">
        <div className="flex justify-between items-center gap-4">
          <h3 className="py-2 px-3 text-primary border-0 border-l-[3px] border-l-primary font-bold text-lg md:text-xl">All Courses ({coursesData.length})</h3>
          {/* <Link href={`/dashboard/courses/create`} className='text-gray-50 bg-primary rounded-[2rem] w-max px-8 py-2 text-sm md:text-md shadow-lg cursor-pointer shadow-primary'>Add New Course</Link> */}
        </div>
          <div className="col-span-1 md:col-span-3 grid course__wrap gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {
              courses.map(course => <CourseCard key={course.id} {...course} />)
            }
          </div>
        </div>
        </>
    )
}
