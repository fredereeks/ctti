"use client"

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { navLinks } from '@/data'
import { IoLogOutOutline } from 'react-icons/io5'
import Image from 'next/image'
import { logo } from '@/assets/images'
import {signOut} from 'next-auth/react'



export default function DashSideBar({ navShow, setNavShow }: { navShow: boolean; setNavShow: Dispatch<SetStateAction<boolean>>; }) {
    const location = usePathname();
    const pathname = location === "/" || location === "/dashboard" ? "Dashboard" : location.replace("/dashboard/", "");
    const page = pathname[0].toUpperCase() + pathname.slice(1);

    const colorScheme: { background: string, color: string }[] = [
        {
            background: 'bg-purple-200/30 dark:bg-white',
            color: 'text-purple-500'
        },
        {
            background: 'bg-indigo-200/30 dark:bg-white',
            color: 'text-indigo-500'
        },
        {
            background: 'bg-sky-200/30 dark:bg-white',
            color: 'text-sky-500'
        },
        // {
        //     background: 'bg-[#f34e7c20] dark:bg-white',
        //     color: 'text-danger'
        // },
        {
            background: 'bg-teal-200/30 dark:bg-white',
            color: 'text-teal-500'
        },
        {
            background: 'bg-primary/10 dark:bg-white',
            color: 'text-primary'
        },
        {
            background: 'bg-orange-200/30 dark:bg-white',
            color: 'text-orange-500'
        },
        {
            background: 'bg-teal-200/30 dark:bg-white',
            color: 'text-teal-500'
        },
    ]

    useEffect(() => {
        setNavShow(false)
        //eslint-disable-next-line
    }, [location])

    return (
        <nav className={`${navShow ? 'left-3 fixed md:relative' : '-left-full md:left-3 fixed md:relative'} z-[60] rounded-xl py-5 px-4 flex flex-col h-[calc(100vh-35px)] mt-[10px] mb-[20px] bg-transparent w-[210px] max-w-sm sm:min-w-[12rem] md:min-w-[14rem] transition-all duration-300`}>
            <div onClick={() => setNavShow(false)} className={`${navShow ? 'overlay fixed bg-slate-500/5' : 'hidden'}`}></div>
            <section className={`${navShow ? 'left-3 fixed' : '-left-full md:left-3 fixed'} z-[60] rounded-xl py-5 px-4 flex flex-col h-[calc(100vh-35px)] top-[20px] mb-[20px] bg-white dark:bg-slate-700 shadow-md w-[210px] max-w-sm sm:min-w-[12rem] md:min-w-[14rem] transition-all duration-300`}>
                <Link href={"/"} className="flex items-center gap-2 py-5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:w-full after:h-[1px] after:bg-gradient-to-r after:from-slate-50 after:to-slate-50 after:via-slate-300 dark:after:from-slate-600 dark:after:to-slate-600 dark:after:via-slate-300">
                    <div className="h-8 w-8 flex justify-center items-center rounded-full overflow-hidden relative bg-white border-2 border-primary">
                        {/* <IoFileTrayStackedSharp key={82346} className="text-sm text-white" /> */}
                        <Image src={logo} alt={`CTTI Admin Image`} fill={true} className="absolute left-0 top-0 object-contain w-full h-full" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <h3 className="text-slate-600 dark:text-slate-50 text-sm font-semibold whitespace-nowrap">CTTI</h3>
                        <p className="text-slate-700 dark:text-slate-50 text-xs opacity-50 font-medium">Dashboard</p>
                    </div>
                </Link>
                <div className="relative flex-1 flex flex-col gap-2 py-5 x-scrollbar overflow-x-hidden">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-slate-400 text-[.6rem] font-semibold whitespace-nowrap uppercase">Account</h3>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 py-5 border-t border-t-slate-200 overflow-scroll x-scrollbar">
                        {
                            navLinks?.map((navLink, i) => {
                                const active = (navLink.title === page) ? 'bg-slate-200/30 dark:bg-white/10' : 'bg-white dark:bg-transparent dark:hover:bg-white/10'
                                return (<Link href={navLink.link} key={navLink.id} className={`flex gap-2 p-2 transition-all duration-300 rounded-md ${active}`}>
                                    <div className={`${colorScheme[i].background} ${colorScheme[i].color} grid place-items-center w-7 h-7 rounded-full`}>{navLink.icon}</div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-slate-500 dark:text-slate-50 text-[.7rem] sm:text-xs dark:opacity-80">{navLink.title}</h4>
                                    </div>
                                </Link>)
                            })
                        }
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[110%] p-2">
                            <button onClick={() => signOut()} className={`flex justify-center items-center gap-2 w-full translate-y-12 justify-self-end p-2 transition-all duration-300 rounded-md bg-danger hover:bg-danger/90`}>
                                <IoLogOutOutline className='text-white text-sm sm:text-base ' />
                                <h4 className="text-slate-50 text-xs">Logout</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    )
}
