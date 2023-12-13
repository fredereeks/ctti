"use client"

import React, { useRef } from 'react'
import { IoMdCart, IoMdHeadset } from 'react-icons/io';
import EnquiryForm from './EnquiryForm';
import { StaticImageData } from 'next/image';
import { Modal } from '@/app/(auth)/ui';

type CoursesProps = { id: string; image: StaticImageData; category: string; title: string; users: number; rating: number; description: string; duration: string; featured: boolean; requisite: string[]; contents: string[]; }

export default function CourseEnquiryForm({ title, courses }: { title: string, courses: [CoursesProps] }) {
    const modalRef = useRef<HTMLDialogElement | null>(null)
    return (
        <>
            <div onClick={() => modalRef?.current?.showModal()} className="flex-1 flex">
                <button type="submit" className="flex-1 min-w-[3rem] bg-primary hover:bg-primary/90 p-2 rounded-lg flex items-center justify-center gap-1">
                    <IoMdCart className='text-md md:text-base text-white flex-shrink-0' />
                    <p className="text-white text-sm md:text-md whitespace-nowrap">Pay for Course</p>
                </button>
            </div>
            <div onClick={() => modalRef?.current?.showModal()} className="cursor-pointer bg-white hover:bg-primary/10 flex-1 min-w-[3rem] border-[1px] border-primary p-2 rounded-lg flex items-center justify-center gap-2">
                <IoMdHeadset className='text-sm md:text-md text-gray-500 flex-shrink-0' />
                <p className="text-gray-500 text-sm md:text-md whitespace-nowrap">Make Enquiry</p>
            </div>
            <Modal modalRef={modalRef}>
                <div className="relative">
                    <div className="py-3 mb-2 flex flex-col gap-1 bg-gray-500 px-3">
                        <h3 className="text-xl md:text-2xl font-light text-white text-center capitalize">Make Enquiry on {title}</h3>
                        <p className="text-white text-center leading-loose text-sm">Fill out your details in the form below and we would get back to you as soon as possible.</p>
                    </div>
                    <EnquiryForm courses={courses} />
                </div>
            </Modal>
        </>
    )
}
