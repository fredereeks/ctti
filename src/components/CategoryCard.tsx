'use client'

import {FaBriefcase, FaBuilding, FaCloudMeatball,  FaMicrosoft, FaNetworkWired, FaPalette, FaDatabase, FaProjectDiagram} from 'react-icons/fa' 
import {IoIosTrendingUp, IoIosCode, IoIosLaptop, } from 'react-icons/io'
import Link from 'next/link'

function CategoryCard({id, icon, background, title, courses} : CategoryProps) {
   const categories = [
    {
        id: 3894,
        title: "Programming and Development",
        icon: <IoIosCode className='text-2xl text-primary group-hover:text-white md:text-3xl'/>,
        background: "bg-primary/20 group-hover:bg-primary",
    },
    {
        id: 3844,
        title: "Networking and Cybersecurity",
        icon: <FaNetworkWired className='text-2xl text-red-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-red-100 group-hover:bg-red-500",
    },
    {
        id: 3828,
        title: "Business Applications",
        icon: <FaMicrosoft className='text-2xl text-amber-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-amber-100 group-hover:bg-amber-500",
    },
    {
        id: 3895,
        title: "Cloud Computing and Virtualization",
        icon: <FaCloudMeatball className='text-2xl text-purple-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-purple-100 group-hover:bg-purple-500",
    },
    {
        id: 3134,
        title: "Data Science and Analytics",
        icon: <IoIosTrendingUp className='text-2xl text-orange-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-orange-100 group-hover:bg-orange-500",
    },

    {
        id: 3224,
        title: "Project Management",
        icon: <FaProjectDiagram className='text-2xl text-pink-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-pink-100 group-hover:bg-pink-500",
    },
    {
        id: 3094,
        title: "Database Administration",
        icon: <FaDatabase className='text-2xl text-blue-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-blue-100 group-hover:bg-blue-500",
    },
    {
        id: 3877,
        title: "IT Service Management",
        icon: <IoIosLaptop className='text-2xl text-teal-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-teal-100 group-hover:bg-teal-500",
    },
    {
        id: 3749,
        title: "Business Analysis",
        icon: <FaBriefcase className='text-2xl text-fuchsia-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-fuchsia-100 group-hover:bg-fuchsia-500",
    },
    {
        id: 3823,
        title: "Leadership",
        icon: <FaBuilding className='text-2xl text-red-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-red-100 group-hover:bg-red-500",
    },
    {
        id: 3890,
        title: "Design",
        icon: <FaPalette className='text-2xl text-cyan-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-cyan-100 group-hover:bg-cyan-500",
    },
]
const targetBg = categories.find(el => el.id === id)?.background
  return (
    <Link href={`/courses/${title.toLowerCase().replaceAll(" ", "-")}`} key={id} className="bg-white flex flex-col md:flex-row items-center gap-2 p-3 sm:p-4 max-w-[25rem] group shad hover:shadow-2xl rounded-base transition-all duration-300">
        <div className={`h-[70px] w-[70px] mb-2 rounded-md grid place-items-center ${targetBg}`}>
            {icon}
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
            <h4 className="text-md md:text-base font-bold text-left text-slate-500 capitalize">{title}</h4>
            <p className="text-xs md:text-sm text-justify leading-tight text-slate-400">{courses?.length-1}+ Courses Here</p>
        </div>
    </Link>
  )
}

export default CategoryCard