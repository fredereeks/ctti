"use client"

import React, { ChangeEvent, HTMLInputTypeAttribute, useRef, useState } from 'react'
import 'react-phone-number-input/style.css'
import toast from 'react-hot-toast';
import Parser from 'html-react-parser'
import { createCourse } from '@/actions';
import { FaCheck } from 'react-icons/fa';
import { MdBrowseGallery, MdImage } from 'react-icons/md';
import Image from 'next/image';
import { categories } from '@/data';




export default function CourseForm() {
    const formRef = useRef<HTMLFormElement | null>(null)
    const requirementRef = useRef<HTMLTextAreaElement | null>(null)
    const contentRef = useRef<HTMLTextAreaElement | null>(null)
    const [pending, setPending] = useState<boolean>(false)
    const [requirements, setRequirements] = useState<string[]>([
        "Basic Computer Appreciation",
        "Quality Laptop",
        "Unwavering Dedication to the Cause",
    ])
    const [contents, setContents] = useState<string[]>([
        "Introduction",
        "Package Installation",
        "Getting Started",
    ])

    const removeRequirement = (index: number) => {
        const currentRequirements = requirements;
        const firstPart = currentRequirements.splice(index, 1)
        setRequirements(currentRequirements)
    }

    const handleTextarea = (type: string) => {
        if (type === "contents") {
            const data = contentRef?.current?.value;
            if (!data) return;
            const separate = data.split("\n")
            setContents(prev => [...prev, ...separate])
            console.log({ data, separate })
            // contentRef!.current!.innerText = "";
        }
        else if(type === "requirements") {
            const data = requirementRef?.current?.value;
            if (!data) return;
            const separate = data.split("\n")
            setRequirements(prev => [...prev, ...separate])
            console.log({ data, separate })
            // requirementRef!.current!.innerText = "";
        }
    }

    console.log("Forced a global re-render")

    async function handleClientSubmit(e: React.FormEvent) {
        e.preventDefault()
        const formData = new FormData(formRef.current!);
        formData.append("allRequirements", JSON.stringify(requirements))
        formData.append("allContents", JSON.stringify(contents))
        try {
            const data = await createCourse(formData);
            if (data?.error) {
                toast.error(data?.message, { id: "86249", duration: 5000 }) 
                formRef?.current?.reset();
            } else {
                toast.success(data?.message || "Message Sent", { id: "86249", duration: 5000 }) 
                formRef?.current?.reset();
            }
        } catch (error) {
            toast.error("Something went wrong. Please, try again", { id: "86249", duration: 5000 }) 
        }
        setPending(false)
    }

    return (
        <form ref={formRef} onSubmit={handleClientSubmit} className="w-full flex flex-col gap-5 p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <h4 className="heading scale-90 text-center py-2 lg:col-span-2">Create a New Course for the CTTI Community</h4>
                {/* <label htmlFor={'image'} data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className="cursor-pointer flex gap-4 items-center lg:col-span-1">
                    <div className="h-14 w-14 rounded-sm bg-primary grid place-items-center font-2xl text-white relative">
                        {upload ? <Image src={upload} alt="Course Image Preview" />  : <MdImage className="text-inherit" />}
                    </div>
                    <div className="flex-1 flex flex-col">
                        <p className="text-gray-600 text-sm">Course Image</p>
                        <input type="file" id="image" accept='.jpg,.jpeg,.png' name="image" placeholder="Enter Course image" className='hidden' required />
                    </div>
                </label> */}
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`flex flex-col gap-1`}>
                    <label htmlFor={'title'} className="text-gray-600 text-sm">Course Title</label>
                    <input type="text" name="title" placeholder="Enter Course Title" className='w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4' required />
                </div>
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`flex flex-col gap-1`}>
                    <label htmlFor={'title'} className="text-gray-600 text-sm">Course Image</label>
                    <input type="file" name="image" placeholder="Enter Course Title" className='w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4' required />
                </div>
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`flex flex-col gap-1`}>
                    <label htmlFor={'price'} className="text-gray-600 text-sm">Course Price</label>
                    <input type="number" name="price" min={20000} placeholder="Enter Course Price (numbers only)" className='w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4' required />
                </div>
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`flex flex-col gap-1`}>
                    <label htmlFor={'duration'} className="text-gray-600 text-sm">Course Duration</label>
                    <input type="text" name="duration" placeholder="Enter Course duration" className='w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4' required />
                </div>
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`flex flex-col gap-1`}>
                    <label htmlFor={'category'} className="text-gray-600 text-sm">Select Course Category</label>
                    <select required id='course' name={'course'} className='w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4'>
                        {
                            categories.map(category => <option className='normal-text text-sm bg-white font-sans' key={category.id} value={category.id}>{category.title}</option>)
                        }
                    </select>
                </div>
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`flex flex-col gap-1`}>
                    <label htmlFor={'instructors'} className="text-gray-600 text-sm">Course instructors</label>
                    <input type="text" name="instructors" placeholder="Enter Course instructors" className='w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4' />
                </div>
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`lg:col-span-2 flex flex-col gap-1`}>
                    <label htmlFor={'requisite'} className="text-gray-600 text-sm flex justify-between items-center border-b border-b-slate-300"><span>Course Requirements</span>  <button type='button' className="p-2 bg-primary/20 text-primary rounded-md mb-2 w-max px-4 text-center text-xs" onClick={() => handleTextarea("requirements")}>Add Requirements</button></label>
                    <div className="flex flex-wrap gap-x-4 py-2">
                        {
                            requirements.map((el, i) => <p onDoubleClick={() => removeRequirement(i)} title='Double-click to Remove' key={Math.random().toString().slice(3, 9)} className="text-slate-800  leading-loose text-sm flex items-center gap-2 cursor-pointer"><FaCheck className='bg-green-400 hover:bg-danger text-white h-[15px] w-[15px] flex-shrink-0 text-xs p-1 grid place-items-center rounded-full' /> {el}</p>)
                        }
                    </div>
                    <div className="px-2 py-1 bg-primary/10 text-primary rounded-md text-center text-xs">Write each requirements on a new line and click on the &apos;Add Requirements&apos; button to Save</div>
                </div>
                <textarea ref={contentRef} required placeholder='Course Requirements' name='requisite' id='requisite' className="w-full outline-none placeholder-opacity-70 -my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[6rem] lg:col-span-2 resize-y" ></textarea>
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`lg:col-span-2 flex flex-col gap-1`}>
                    <label htmlFor={'contents'} className="text-gray-600 text-sm flex justify-between items-center border-b border-b-slate-300"><span>Course Contents</span>  <button type='button' className="p-2 bg-primary/20 text-primary rounded-md mb-2 w-max px-4 text-center text-xs" onClick={() => handleTextarea("contents")}>Add Contents</button></label>
                    <div className="flex flex-wrap gap-x-4 py-2">
                        {
                            contents.map((el, i) => <p onDoubleClick={() => removeRequirement(i)} title='Double-click to Remove' key={Math.random().toString().slice(3, 9)} className="text-slate-800  leading-loose text-sm flex items-center gap-2 cursor-pointer"><FaCheck className='bg-green-400 hover:bg-danger text-white h-[15px] w-[15px] flex-shrink-0 text-xs p-1 grid place-items-center rounded-full' /> {el}</p>)
                        }
                    </div>
                    <div className="px-2 py-1 bg-primary/10 text-primary rounded-md text-center text-xs">Write each requirements on a new line and click on the &apos;Add Requirements&apos; button to Save</div>
                </div>
                <textarea ref={contentRef} required placeholder='Course Contents' name='contents' className="w-full outline-none placeholder-opacity-70 -my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[6rem] lg:col-span-2 resize-y" ></textarea>
                <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`lg:col-span-2 flex flex-col gap-1`}>
                    <label htmlFor={'description'} className="text-gray-600 text-sm">Course Description</label>
                    <textarea required placeholder='Enter Course description' name='description' id='description' className="w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[12rem] resize-y" defaultValue={`We provide you with guides, instructors, materials and resources to propel you into becoming a programming-and-development professional beyond the periphery while splitting the learning process easily consumable bits for a smooth and progressive understanding. By the end of the course, students will be able to boast a solid knowledge of [write course name here]`}></textarea>
                </div>
                <button type="submit" disabled={pending} className="text-gray-50 bg-[#1c6fec] rounded-[2rem] w-max px-8 py-2 text-sm md:text-md shadow-lg cursor-pointer shadow-[#1c6fec]">{pending ? 'Processing...' : 'Create Course'}</button>
            </div>
        </form>
    )
}
