'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoMailUnreadOutline, IoLogOutOutline, IoMenuOutline, IoSunnyOutline, IoClipboardOutline } from "react-icons/io5";
import { IoMoonOutline, IoCaretDown } from "react-icons/io5";
// import { handleClickProp } from '@/types';
import Image from 'next/image';
// import { user } from '@/data/user';
import { ctti_coder } from '@/assets/images';

interface IHandleClick {
    handleClick: () => void
    darkMode: boolean | string
    toggleDarkMode: () => boolean | void
    
}

export default function DashHeader({ handleClick, darkMode, toggleDarkMode }: IHandleClick) {
    const location = usePathname();
    const pathname = location === "/dashboard" ? "Dashboard" : location.indexOf("/dashboard/user/") > -1 ? "User Details" : location.indexOf("/dashboard/admin/") > -1 ? "Admin Details" : location.replace("/dashboard/", "");
    const page = pathname[0].toUpperCase() + pathname.slice(1);
    const user = {firstname: 'Amaka', middlename: '', lastname : 'Ibezimako', image: ctti_coder}
    const { firstname, lastname } = user;
    
    
    return (
        <header className="flex justify-between gap-2 py-2 px-4 items-center w-full flex-1">
            <div className="flex flex-col gap-1">
                <div className="text-slate-500 text-sm flex gap-1 items-center">
                    <Link href={"/dashboard"} className="text-xs text-slate-400">Dashboard</Link> /
                    <p className="text-slate-600 dark:text-slate-200 text-sm font-semibold">{page}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-200 text-lg sm:text-2xl font-bold">{page}</p>
            </div>
            <div className="flex items-center gap-2 w-max pr-2 md:pr-4">
                {/* <Link href="/dashboard/messages" className="text-sm md:text-base text-slate-400 p-1 relative flex">
                    <IoMailUnreadOutline size={18} className='text-inherit' />
                </Link> */}
                {/* <Link href={"/auth/login"} className='text-sm md:text-base text-slate-400 p-1 relative flex'>
                    <IoLogOutOutline size={18} className='text-inherit' />
                </Link> */}
                <button onClick={handleClick} className="cursor-pointer md:hidden text-base md:text-base text-slate-400"><IoMenuOutline size={22} className='text-inherit' /></button>
                <button onClick={toggleDarkMode} className="cursor-pointer -scale-x-[1] text-sm text-slate-400 p-1">
                    {darkMode ?
                        <IoSunnyOutline size={19} className='text-inherit' /> :
                        <IoMoonOutline size={19} className='text-inherit' />
                    }
                </button>
                <div className="relative">
                    <Link href="/dashboard/profile" className='cursor-pointer dark:ring dark:ring-slate-400 ring-offset-base-100 ring-offset-1 h-8 w-8 flex justify-center items-center rounded-full overflow-hidden relative bg-primary dark:bg-slate-600/50'>
                        <Image src={user?.image} alt={`${firstname} ${lastname}`} fill={true} className="absolute left-0 top-0 object-cover w-full h-full" /> <IoCaretDown
                            className="text-sm font-light opacity-90 text-inherit" />
                    </Link>
                    {/* <input type="checkbox" className="peer hidden" id="dropdown" />
                    <div className="max-h-0 peer-checked:max-h-[1000%] absolute top-full bg-white shadow z-50 right-0 overflow-hidden transition-all duration-300">
                        <ul className="flex flex-col dark:bg-[#dce7f7] max-w-[10rem] z-5 p-2 shadow bg-base-100 rounded-md w-52">
                            <li className='dark:hover:bg-slate-800 rounded-md'><Link className='dark:hover:text-slate-300 text-sm text-slate-700 p-2 relative flex' href={'/dashboard/profile'}> <IoClipboardOutline size={18} className='text-inherit ' /> Profile</Link></li>
                            <li className='dark:hover:bg-slate-800 rounded-md'><Link className='dark:hover:text-slate-300 text-sm text-slate-700 p-2 relative flex' href={"/auth/login"}> <IoLogOutOutline size={18} className='text-inherit' /> Logout</Link></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </header>
    )
}
