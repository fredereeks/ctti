import { BreadCrumb } from '@/components'
import { ctti_biz_skill, ctti_career, ctti_cyber, ctti_database, ctti_datascience, ctti_digital_marketing, niit_web_students } from '@/assets/images';
import { IoMdBriefcase } from 'react-icons/io';
import Link from 'next/link'
import { FaCloudUploadAlt, FaCertificate } from 'react-icons/fa';
import Image from 'next/image';

function Benefits() {

    return (
        <main className='flex flex-col justify-center bg-white'>
            <BreadCrumb extra={{ name: "About", link: "/about" }} page={"Benefits"} />
            <section className="py-20 bg-white">
                <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center gap-2 px-4">
                    <div className="flex flex-1 px-3 py-4 flex-col gap-3">
                        {/* <h3 className="text-[#ec1c3e] font-bold text-2xl md:text-3xl">CTTI Key Features</h3> */}
                        <h3 className="heading">What you get with CTTI </h3>
                        <div className="flex flex-col gap-4 pt-3">
                            <div className="flex gap-2 items-center">
                                <span className="shad h-[30px] w-[30px] md:w-[45px] md:h-[45px] flex-shrink-0 rounded-full grid place-items-center bg-white shadow-primary/10">
                                    <FaCloudUploadAlt className="text-lg md:text-2xl text-primary"/>
                                </span>
                                <p className="thin-text text-sm md:text-base leading-tight">We offer a wide range of lecture <Link className="font-medium text-primary" href="/delivery">options</Link></p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="shad h-[30px] w-[30px] md:w-[45px] md:h-[45px] flex-shrink-0 rounded-full grid place-items-center bg-white shadow-primary/10">
                                    <IoMdBriefcase className="text-lg md:text-2xl text-primary"/>
                                </span>
                                <p className="thin-text text-sm md:text-base leading-tight">We are trusted and <Link className="font-medium text-primary" href="/partners">partners</Link> with a wide range of world class Universities and similar legitimate online platforms </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="shad h-[30px] w-[30px] md:w-[45px] md:h-[45px] flex-shrink-0 rounded-full grid place-items-center bg-white shadow-primary/10">
                                    <FaCertificate className="text-lg md:text-2xl text-primary"/>
                                </span>
                                <p className="thin-text text-sm md:text-base leading-tight">Our certificates are industry recognized in most popular countries across the world</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-1 flex-col py-2 overflow-hidden">
                        <Image src={ctti_digital_marketing} alt="CTTI Digital Marketing" className="h-[250px] md:h-[350px] lg:h-[450px] w-[250px] md:w-[350px] lg:w-[450px] rounded-md object-cover ml-auto mr-auto md:mr-5 shad" />
                        <Image src={ctti_biz_skill} alt="CTTI Digital Marketing" className="absolute h-[80px] md:h-[100px]  lg:h-[200px] w-[80px] md:w-[100px]  lg:w-[200px] rounded-md border-3 border-white object-cover bottom-5 left-4 shad shadow-white " />
                    </div>
                </div>
            </section>
            <section className="bg-gray-200 py-20">
                <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center gap-2 px-4">
                    <div className="flex flex-col gap-3 md:flex-1 md:pr-2 py-4">
                        <h3 className="heading">One-on-One Discussions</h3>
                        <p className="thin-text leading-[1.8]">As a student, you get both a group as well as a one-on-one access to our world class instructors during your training period. </p>
                        <p className="thin-text leading-[1.8]">We also provide you with both online and offline study materials to further facilitate your learning.</p>
                    </div>
                    <div className="sm:flex-1 grid grid-cols-2 justify-center gap-2 bg-white px-4 py-5 md:p-6 shad shadow-gray-500 overflow-hidden rounded-sm w-max">
                        <aside className="max-w-[150px] sm:max-w-full sm:w-full flex flex-col gap-3">
                            <Image src={niit_web_students} alt="ctti web dev student" className="h-[150px] md:h-[200px] object-cover rounded-md" />
                            <div className="flex py-2 flex-col">
                                <h4 className="text-primary font-medium text-lg md:text-xl">Andrew Sunday</h4>
                                <p className="text-xs md:text-sm thin-text">Student, Web Development</p>
                            </div>
                        </aside>
                        <aside className="max-w-[150px] sm:max-w-full sm:w-full flex flex-col gap-3">
                            <div className="h-[150px] md:h-[200px] relative">
                                <Image src={ctti_career} alt="ctti web dev student" className="h-[150px] md:h-[200px] object-cover rounded-md" />
                                <p className="text-xs md:text-sm thin-text absolute bottom-2 left-3 bg-gray-500 text-gray-200 rounded-md px-3 py-1">Benedict John</p>
                            </div>
                            <div className="flex py-1 flex-col">
                                {/* <button className="text-gray-200 bg-[#ec1c3e] rounded-[2rem] w-max px-3 py-2 text-sm md:text-md shadow-lg cursor-not-allowed shadow-[#ec1c3e]">End Discussion</button> */}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center gap-2 px-4">
                    <div className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 justify-center gap-2 bg-white px-4 py-5 md:p-6 shad shadow-gray-500 overflow-hidden rounded-sm w-max mx-auto sm:mx-0">
                        <aside className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="flex gap-2 sm:pr-1 md:pr-0 sm:gap-0 items-center sm:items-start sm:flex-col">
                                <Image src={ctti_cyber} alt="ctti web dev student" className="h-[50px] sm:h-[150px] md:h-[100px] w-[50px] sm:w-full md:w-[100px] lg:w-full object-cover rounded-md" />
                                <div className="flex py-2 flex-col">
                                    <h4 className="text-primary font-medium text-md md:text-base">Peter Benedict</h4>
                                    <p className="text-xs md:text-sm thin-text">Instructor, Cyber Security</p>
                                </div>
                            </div>
                            <div className="flex gap-2 sm:pr-1 md:pr-0 sm:gap-0 items-center sm:items-start sm:flex-col">
                                <Image src={ctti_database} alt="ctti web dev student" className="h-[50px] sm:h-[150px] md:h-[100px] w-[50px] sm:w-full md:w-[lg:w-full object-cover rounded-md" />
                                <div className="flex py-2 flex-col">
                                    <h4 className="text-primary font-medium text-md md:text-base">Idiongomfon Imoh</h4>
                                    <p className="text-xs md:text sm thin-text">Instructor, Database Management</p>
                                </div>
                            </div>
                        </aside>
                        <aside className="flex flex-col gap-3">
                            <div className="h-[150px] md:h-[200px] relative">
                                <Image src={ctti_datascience} alt="ctti web dev student" className="h-[150px] md:h-[200px] object-cover rounded-md" />
                                <p className="text-xs md:text sm thin-text absolute bottom-2 left-3 bg-gray-500 text-gray-200 rounded-md px-3 py-1">Frederick Jones</p>
                            </div>
                            <div className="flex py-1 flex-col">
                                {/* <button className="text-gray-200 bg-[#ec1c3e] rounded-[2rem] w-max px-5 py-2 text-sm md:text-md shadow-lg cursor-not-allowed shadow-[#ec1c3e]">See More</button> */}
                            </div>
                        </aside>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-1 md:pl-2 py-4">
                        <h3 className="text-primary font-bold text-2xl md:text-3xl">Access to a Community of Highly Skilled Tutors</h3>
                        <p className="thin-text leading-[1.8]">As a student, you get both a group as well as a one-on-one access to our world class instructors during your training period. </p>
                        <p className="thin-text leading-[1.8]">We also provide you with both online and offline study materials to further facilitate your learning.</p>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default Benefits