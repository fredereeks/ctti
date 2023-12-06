"use client"

import React, { useRef, useState } from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { TableSearch, Modal } from '@/app/(auth)/ui'
import { courses } from '@/data'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { MdQuestionAnswer } from 'react-icons/md'

export default function EnquiryList({ enquiryData }: { enquiryData: EnquiryProps[] }) {
    const [allTableData, setAllTableData] = useState<EnquiryProps[] | []>(enquiryData)
    const [tableData, setTableData] = useState<EnquiryProps[] | []>(enquiryData)
    const previewRef = useRef<HTMLDialogElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryProps>()

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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        let keyword = inputRef.current?.value.toLowerCase() || ''
        if (!keyword || keyword === '') {
            setTableData(allTableData)
        }
        else {
            const result = tableData.filter(el => el.firstname.toLowerCase().includes(keyword) || el.middlename?.toLowerCase().includes(keyword) || el.lastname.toLowerCase().includes(keyword) || el.email.toString().toLowerCase().includes(keyword) || el.createdAt?.toString().toLowerCase().includes(keyword) || el.phone?.toLowerCase().includes(keyword) || el.state?.toString().toLowerCase().includes(keyword) || el.country?.toString().toLowerCase().includes(keyword) || el.course?.title?.toString().toLowerCase().includes(keyword))
            console.log({ result })
            setTableData(prev => [...result])
        }
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
                                    </TableSearch>
                                </th>
                            </tr>
                            <tr className='text-slate-500 dark:text-slate-50'>
                                <th className='uppercase font-medium text-xs text-left pb-4 pt-2'>Enquiry Details</th>
                                <th className='font-medium text-xs text-center align-middle'>Course </th>
                                {/* <th className='font-medium text-xs text-center align-middle'>Email</th> */}
                                <th className='font-medium text-xs text-center align-middle'>Phone</th>
                                <th className='font-medium text-xs text-center align-middle'>Date</th>
                            </tr>
                        </thead>
                        <tbody className='w-full text-slate-700 dark:text-slate-50 divide-y divide-slate-300 border-y border-y-slate-300 pt-4 pb-0'>
                            {
                                tableData.length ?
                                    tableData.map(enquiry => (
                                        <tr key={enquiry.id} onClick={() => showPreview(enquiry.id)} className='hover:bg-slate-50 dark:hover:bg-slate-900/30'>
                                            <td>
                                                <div className="max-w-sm w-max flex items-center gap-2 cursor-pointer px-2">
                                                    <div className="h-7 sm:h-8 w-7 sm:w-8 flex justify-center items-center rounded-full overflow-hidden relative font-normal bg-primary/90 text-white text-lg dark:bg-slate-600/50 -tracking-[1px]">
                                                        {enquiry?.firstname[0]?.toUpperCase()}{enquiry?.lastname[0]?.toUpperCase()}</div>
                                                    <div>
                                                        <h5 className="text-sm font-medium leading-tight whitespace-nowrap">{enquiry?.firstname} {enquiry?.middlename} {enquiry?.lastname}</h5>
                                                        <p className="text-xs font-medium opacity-70 text-slate-600 dark:text-slate-50 dark:opacity-100 leading-tight">{enquiry.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <h4 className="flex justify-start items-center gap-[.2rem] align-middle text-xs py-[.1rem] sm:py-1">{courses.find(course => course.id === enquiry?.courseId)?.title}</h4>
                                            </td>
                                            <td className="align-middle">
                                                <div className="flex justify-center items-center align-middle mx-auto">
                                                    <Link href={`tel:${enquiry.phone}`} className={`bg-sky-100 text-sky-500 text-xs py-[.1rem] sm:py-1 px-3 rounded-sm font-medium`}>{enquiry.phone}</Link>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <div className="flex justify-center items-center gap-[.2rem] align-middle text-xs py-[.1rem] sm:py-1">
                                                    <FaClock className="text-inherit mt-[.1rem]" /> <p className="">{(enquiry?.createdAt?.toLocaleString("en", { dateStyle: "long" }))}</p>
                                                </div>
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
        </>
    )
}
