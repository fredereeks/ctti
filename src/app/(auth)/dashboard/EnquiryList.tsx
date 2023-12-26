"use client"

import React, { useRef, useState } from 'react'
import { FaCalendarAlt, FaClock, FaEnvelope } from 'react-icons/fa'
import { TableSearch, Modal } from '@/app/(auth)/ui'
import { courses } from '@/data'
import { handleReply } from '@/actions'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { MdQuestionAnswer } from 'react-icons/md'
import moment from 'moment'
import {read, utils, writeFile} from "xlsx"

export default function EnquiryList({ enquiryData }: { enquiryData: StaticEnquiryProps[] }) {
    const [allTableData, setAllTableData] = useState<StaticEnquiryProps[] | []>(enquiryData)
    const [tableData, setTableData] = useState<StaticEnquiryProps[] | []>(enquiryData)
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const replyRef = useRef<HTMLDialogElement | null>(null)
    const formRef = useRef<HTMLFormElement | null>(null)
    const subjectRef = useRef<HTMLInputElement | null>(null)
    const messageRef = useRef<HTMLTextAreaElement | null>(null)
    const previewRef = useRef<HTMLDialogElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [selectedEnquiry, setSelectedEnquiry] = useState<StaticEnquiryProps>()
    const [loading, setLoading] = useState<boolean>(false)

    const showPreview = (id: string) => {
        try {
            const targetEnquiry = tableData?.find(enquiry => enquiry.id === id)
            if (targetEnquiry) {
                setSelectedEnquiry(prev => ({ ...targetEnquiry }))
            }
            previewRef.current?.showModal()
        }
        catch (err) {
            toast.error(`Could not load this preview of this Enquiry`, { id: "86249", duration: 5000 })
        }
    }

    const handleShowReply = (id: number | string) => {
        try {
            // make request to get user details
            const targetMessage = tableData?.find(enquiry => enquiry.id.toString() === id.toString())
            if (targetMessage) {
                setSelectedEnquiry(prev => ({ ...targetMessage }))
            }
            replyRef.current?.showModal()
        }
        catch (err) {
            toast.error(`Could not Send your reply. Check your Internet connection and try again`, { id: "86249", duration: 5000 }) 
        }
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        let keyword = inputRef.current?.value.toLowerCase() || ''
        if (!keyword || keyword === '') {
            setTableData(allTableData)
        }
        else {
            const result = tableData.filter(el => el.firstname.toLowerCase().includes(keyword) || el.middlename?.toLowerCase().includes(keyword) || el.lastname.toLowerCase().includes(keyword) || el.email.toString().toLowerCase().includes(keyword) || (el?.createdAt?.toLocaleString("en-gb", { dateStyle: "short" }))?.toLowerCase().includes(keyword) || el.phone?.toLowerCase().includes(keyword) || el.state?.toString().toLowerCase().includes(keyword) || el.country?.toString().toLowerCase().includes(keyword) || el.course?.toString().toLowerCase().includes(keyword))
            setTableData(prev => [...result])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        try {
            const formData = new FormData(formRef?.current!)
            const res = await handleReply(formData)
            res.error ? toast.error(res.message) : toast.success(res.message)
            formRef.current?.reset()
            replyRef.current?.close()
        }
        catch (err) {
            toast.error(`Sorry, we could not send your message. Please, check your network and try again`, { id: "86249", duration: 5000 }) 
        }
        setLoading(false)
    }

    const handleExport = async(e: React.MouseEvent) => {
        const headings = [[`S/N`, `Full Name`, `Phone`, `Email`, `Course`, `Message`, `Date`]]
        const data = tableData.map(({firstname, middlename, lastname, phone, email, courseId, message, createdAt},i) => {
            return ([
                `${i + 1}`, `${firstname} ${middlename} ${lastname}`, phone, email, courses.find(course => course.id === courseId)?.title, message, moment(createdAt).format("MM-DD-YYYY")])
        })
        const wb = utils.book_new()
        const ws = utils.json_to_sheet([])
        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, data, {origin: "A2", skipHeader: true})
        utils.book_append_sheet(wb, ws, `CTTI Enquiry List`)
        writeFile(wb, `CTTI-Enquiries-${moment(new Date()).format("MM-DD-YYYY")}.xlsx`)
    }



    return (
        <>
            <section className="relative flex flex-col gap-2 p-4 bg-white dark:bg-[#dbf0f724] dark:shadow-black shadow-slate-200 shadow-md rounded-lg">
                <div className="w-full overflow-x-scroll pb-6 x-scrollbar">
                    <table className="w-full text-slate-600 dark:text-slate-50 text-xs sm:text-sm min-w-[20rem]">
                        <thead>
                            <tr>
                                <th colSpan={4}>
                                    <TableSearch title='RECENT ENQUIRIES' key={'72088234'} handleSearch={handleSearch} inputRef={inputRef}>
                                        <button onClick={handleExport} className="bg-primary text-white rounded-sm py-2 px-5 cursor-pointer hover:shadow-md hover:shadow-primary">Download Record</button>
                                    </TableSearch>
                                </th>
                            </tr>
                            <tr className='text-slate-500 dark:text-slate-50'>
                                <th className='uppercase font-medium text-xs text-left pb-4 pt-2'>Enquiry Details</th>
                                <th className='font-medium text-xs text-center align-middle'>Course </th>
                                {/* <th className='font-medium text-xs text-center align-middle'>Email</th> */}
                                <th className='font-medium text-xs text-center align-middle'>Phone</th>
                                <th className='font-medium text-xs text-center align-middle'>Date</th>
                                <th className='whitespace-nowrap px-2 font-light text-xs text-inherit text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='w-full text-slate-700 dark:text-slate-50 divide-y divide-slate-300 border-y border-y-slate-300 pt-4 pb-0'>
                            {
                                tableData.length ?
                                    tableData.map(enquiry => (
                                        <tr key={enquiry.id} className='hover:bg-slate-50 dark:hover:bg-slate-900/30'>
                                            <td onClick={() => showPreview(enquiry.id)}>
                                                <div className="max-w-sm w-max flex items-center gap-2 cursor-pointer px-2">
                                                    <div className="h-7 sm:h-8 w-7 sm:w-8 flex justify-center items-center rounded-full overflow-hidden relative font-normal bg-primary/90 text-white text-lg dark:bg-slate-600/50 -tracking-[1px]">
                                                        {enquiry?.firstname[0]?.toUpperCase()}{enquiry?.lastname[0]?.toUpperCase()}</div>
                                                    <div>
                                                        <h5 className="text-sm font-medium leading-tight whitespace-nowrap">{enquiry?.firstname} {enquiry?.middlename} {enquiry?.lastname}</h5>
                                                        <p className="text-xs font-medium opacity-70 text-slate-600 dark:text-slate-50 dark:opacity-100 leading-tight">{enquiry.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td onClick={() => showPreview(enquiry.id)} className="align-middle">
                                                <h4 className="flex justify-start items-center gap-[.2rem] align-middle text-xs py-[.1rem] sm:py-1">{courses.find(course => course.id === enquiry?.courseId)?.title}</h4>
                                            </td>
                                            <td className="align-middle">
                                                <div className="flex justify-center items-center align-middle mx-auto">
                                                    <Link href={`tel:${enquiry.phone}`} className={`bg-sky-100 text-sky-500 text-xs py-[.1rem] sm:py-1 px-3 rounded-sm font-medium`}>{enquiry.phone}</Link>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <div className="flex justify-center items-center gap-[.2rem] align-middle text-xs py-[.1rem] sm:py-1">
                                                    <FaClock className="text-inherit mt-[.1rem]" /> <p className="">{(enquiry?.createdAt?.toLocaleString("en-gb", { dateStyle: "short" }))}</p>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <h4 onClick={() => handleShowReply(enquiry.id)} className="flex justify-center items-center gap-[.2rem] align-middle text-slate-400 text-[.6rem] py-[.1rem] sm:py-1"><button className="bg-primary text-white text-inherit px-3 rounded-sm cursor-pointer">Reply</button></h4>
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan={4}>
                                            <h4 className="text-slate-500 text-center dark:text-slate-300">No Record(s) Found</h4>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <Modal modalRef={previewRef}>
                <div className='p-5 flex flex-col gap-4'>
                    <span className="text-[.6rem] sm:text-[.75rem] text-sky-700 bg-sky-200/50 dark:bg-sky-200 p-2 rounded-xs uppercase text-center">Enquiry Details </span>
                    <div className="w-full flex items-center gap-2">
                        <div className={`h-7 sm:h-8 w-7 sm:w-8 flex-shrink-0 flex justify-center items-center rounded-full overflow-hidden relative bg-primary dark:bg-slate-100 text-slate-100 dark:text-slate-600`}>
                            <MdQuestionAnswer className='text-sm sm:text-base' />
                        </div>
                        <div className='flex-1 flex flex-col justify-center w-full'>
                            <div className="flex justify-between items-center gap-4 text-slate-600">
                                <div className="flex flex-col">
                                    <h5 className="text-sm font-semibold leading-tight whitespace-nowrap flex items-center">{`${selectedEnquiry?.firstname} ${selectedEnquiry?.middlename} ${selectedEnquiry?.lastname}`} </h5>
                                    <Link href={`tel:${selectedEnquiry?.phone}`} className="text-slate-400 text-xs py-[.1rem] sm:py-1">{selectedEnquiry?.phone}</Link>
                                </div>
                                <div className="flex justify-center items-center gap-[.2rem] align-middle dark:text-slate-100 text-[.6rem]">
                                    <FaCalendarAlt className="text-inherit opacity-60" /> <p className="">{selectedEnquiry?.createdAt?.toLocaleString("en", { dateStyle: "long" })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border border-slate-200 border-l-0 border-r-0 py-4">
                        <p className="text-sitetext leading-loose text-justify">{selectedEnquiry?.message}</p>
                    </div>
                </div>
            </Modal>
            <Modal modalRef={replyRef}>
                <div className='p-5 flex flex-col gap-4'>
                    <span className="text-[.6rem] sm:text-[.75rem] w-full text-primary bg-primary/20 dark:bg-primary p-2 rounded-xs uppercase text-center">Reply Message {selectedEnquiry?.subject} </span>
                    <div className="w-full flex items-center gap-2">
                        {/* <h4 className="text-sm bg-slate-200/50 dark:bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-md uppercase mr-2">REPLY</h4> */}
                        <div className={`h-7 sm:h-8 w-7 sm:w-8 flex-shrink-0 flex justify-center items-center rounded-full overflow-hidden relative bg-primary dark:bg-slate-100 text-slate-100 dark:text-slate-600`}>
                            <FaEnvelope className='text-sm sm:text-base' />
                        </div>
                        <div className='flex-1 flex flex-col justify-center w-full'>
                            <div className="flex justify-between items-center gap-4 text-slate-600">
                                <h5 className="text-sm sm:text-base font-semibold leading-tight whitespace-nowrap flex items-center dark:text-slate-50">{selectedEnquiry?.email}</h5>
                                <div className="flex justify-center items-center gap-[.2rem] align-middle dark:text-slate-100 text-[.6rem]">
                                    <FaCalendarAlt className="text-inherit opacity-60" /> <p className="">{selectedEnquiry?.createdAt?.toLocaleString("en", { dateStyle: "long" })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form ref={formRef} action={'dialog'} onSubmit={handleSubmit} className="relative flex flex-col gap-2">
                        <input type="hidden" name="id" value={selectedEnquiry?.id} />
                        <input type="hidden" name="email" value={selectedEnquiry?.email} />
                        <input type="hidden" name="type" value="enquiry" />
                        <input type="text" ref={subjectRef} name='subject' placeholder='Message Title (Subject)' className="relative outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm placeholder-opacity-70 bg-transparent focus-within:bg-transparent focus:bg-transparent" />
                        <textarea ref={messageRef} cols={30} rows={10} name='message' placeholder='Message Content (Body)' className="relative outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm placeholder-opacity-70 bg-transparent focus-within:bg-transparent focus:bg-transparent" ></textarea>
                        <button type="submit" disabled={loading} className="py-2 px-4 sm:px-8 bg-primary text-white text-[.6rem] text-xs rounded-md hover:bg-primary/80 cursor-pointer">{loading ? "Sending Message..." : "Send Reply"}</button>
                    </form>
                </div>
            </Modal>
        </>
    )
}
