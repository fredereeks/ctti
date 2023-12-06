"use client"

import React, { MouseEvent, useEffect, useState} from 'react'
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link'
import { usePathname } from 'next/navigation';



const LinkCard = ({title, link, sublinks, onClick}: LinkCardType) => {
    const location = usePathname();
    const [activeLink, setActiveLink] = useState(false);

    useEffect(() => {
        location === link ? setActiveLink(true) : setActiveLink(false);
        return () => {
            setActiveLink(false);
        } 
    },[location, link]);
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[location])
    
    if(sublinks.length > 0){
        return (
            <li className={`relative group`}>
                <div className={`flex items-center w-full cursor-pointer hover:bg-cyan-400 md:hover:bg-transparent group`}>
                    <Link href={link} className={`group-hover:text-white md:group-hover:text-slate-700 font-medium ${activeLink} text-[.9rem] py-2 px-[.65rem] text-slate-600 hover:text-white hover:bg-cyan-400 md:hover:bg-transparent md:hover:text-slate-700 flex gap-1 items-center whitespace-nowrap`}>{title}</Link>
                    <FaCaretDown className={`group-hover:text-white md:group-hover:text-slate-700 p-1 text-[.86rem] cursor-pointer text-slate-600 mt-1 -mx-2`} size={20} onClick={(e: MouseEvent) => onClick(title.toLowerCase())} onMouseOver={(e: MouseEvent) => onClick(title.toLowerCase())} onMouseOut={(e: MouseEvent) => onClick(title.toLowerCase())}   />
                </div>
                {/* <ul className={`transition-all duration-300 relative md:absolute z-[888] overflow-hidden top-full left-0 border-0 border-t-2 w-full md:min-w-[15rem] md:max-w-[25rem] md:shadow-md ${dropdown ? 'border-primary-200 max-h-max' : 'border-t-transparent max-h-0'} hover:max-h-max flex-col bg-white`}> */}
                <ul className={`transition-all duration-300 relative md:absolute z-[888] overflow-hidden top-full left-0 border-0 border-t-2 w-full md:min-w-[15rem] md:w-max md:shadow-md group-hover:border-primary-200 group-hover:max-h-max border-t-transparent max-h-0 flex-col bg-white`}>
                {sublinks?.map(({id,link,title}) => (
                    <li key={id} className={`relative`}>
                        <Link href={link} key={id} className={`text-[.9rem] py-2 px-3 text-slate-600 font-medium hover:text-white hover:bg-primary  flex gap-1 items-center`}>{title}</Link>
                    </li>
                ))}
                </ul>
            </li>
        )
    }
    else return <Link href={link} className={`text-[.9rem] py-2 px-3 text-slate-600 font-medium hover:text-white hover:bg-cyan-400 md:hover:bg-transparent md:hover:text-slate-700 flex gap-1 items-center`}>{title}</Link>

}

export default LinkCard