"use client"

import React, { useEffect, useRef, useState } from 'react'
import { logo } from '../assets/images'
import Link from 'next/link'
import { headerLinks } from '../data/headerLinks';
import LinkCard from './LinkCard';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function Header() {
    const [navshow, setNavShow] = useState(false);
    const [fixed, setFixed] = useState(false);
    const header = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);
    const location = usePathname();
    const [dropdowns, setDropdowns] = useState<DropdownProps>({
        about: false,
        courses: false,
        solutions: false,
        resources: false,
    })

    const toggleDropdown = (name: string) => {
        const newDropdown: DropdownProps = dropdowns
        // const key = <U extends object, i keyof U>
        for (let i in newDropdown) {
            // newDropdown[i] = i === name ? !newDropdown[i] : false;
            setDropdowns(prev => ({ ...prev, ...newDropdown }))
        }
    }

    const closeDropdown = () => {
        setDropdowns({ about: false, courses: false, solutions: false, resources: false })
    }

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 60) {
                setFixed(true)
            }
            else {
                setFixed(false)
            }
        }
        return () => {
            setFixed(false);
            window.scrollTo(0, 0)
            setNavShow(false);
            closeDropdown()
        }
    }, [location])

    function checkForClick(e: React.MouseEvent) {
        const divRef = navRef?.current?.getBoundingClientRect()
        const left = divRef?.left || 10, right = divRef?.right || 10, top = divRef?.top || 10, bottom = divRef?.bottom || 10;
        if (e.clientX < left || e.clientX > right || e.clientY < top || e.clientY > bottom) {
            setNavShow(prev => !prev)
            closeDropdown()
        }
    }

    useEffect(() => {
        const { about, courses, solutions, resources } = dropdowns;
        const divRef = navRef?.current?.getBoundingClientRect()
        if (about || courses || solutions || resources) {
            document.addEventListener("click", (e: MouseEvent) => {
                const left = divRef?.left || 10, right = divRef?.right || 10, top = divRef?.top || 10, bottom = divRef?.bottom || 10;
                if (e.clientX < left || e.clientX > right || e.clientY < top || e.clientY > bottom) {
                    setNavShow(prev => !prev)
                    closeDropdown()
                }
            })
        }
        return () => {
            document.removeEventListener("click", (e: MouseEvent) => {
                const left = divRef?.left || 10, right = divRef?.right || 10, top = divRef?.top || 10, bottom = divRef?.bottom || 10;
                if (e.clientX < left || e.clientX > right || e.clientY < top || e.clientY > bottom) {
                    setNavShow(prev => !prev)
                    closeDropdown()
                }
            })
        }
        //eslint-disable-next-line
    }, [dropdowns, navshow])

    return (
        <div ref={header} className={`bg-white z-[999] p-2 fixed ${fixed ? 'shadow-md shadow-black/20' : 'shadow-none'} w-full left-0 top-0`}>
            <div className="container mx-auto flex justify-between items-center md:gap-3">
                <div className="lg:width-[600px] flex flex-start">
                    <Link href="/" className='w-[80px] h-[80px] mt-0 text-gray-100'>
                        <Image src={logo} alt="CTTI Logo" className="w-full h-[80px] object-contain sm:object-contain" />
                    </Link>
                </div>
                <div ref={navRef} className={`flex-1 sm:flex-4 flex flex-col lg:flex-row lg:justify-center lg:pl-[6rem] absolute border-0 md:border-t md:border-primary lg:border-0 lg:static shadow-md transition-all duration-300 ${navshow ? 'left-0 top-full z-50' : 'left-[110%] lg:left-0 z-0 top-full'} lg:top-0 w-screen lg:w-max lg:shadow-none bg-white lg:mx-0`}>
                    <ul className="list-style-none mx-auto w-full flex flex-col md:flex-1 md:flex-row md:justify-center md:items-center gap-2">
                        {
                            headerLinks.map((link) => <LinkCard key={link.id} {...link} onClick={toggleDropdown} />)
                        }
                    </ul>
                    <div className="lg:ml-auto flex flex-col justify-center pt-1 h-full w-full lg:w-max md:flex-row lg:gap-3">
                        <Link href="/auth/signin" className="text-sm grid place-items-center text-primary lg:rounded-md h-10 lg:h-8 w-full lg:w-max px-2 lg:px-4 relative border border-primary hover:bg-primary/90 hover:text-white">Login
                        </Link>
                        <Link href="/enquiry" className="text-sm grid place-items-center text-white bg-primary hover:bg-primary/90 lg:rounded-md h-10 lg:h-8 w-full lg:w-max px-2 lg:px-4 relative">Make Enquiry
                        </Link>
                    </div>
                </div>
                <div className="relative py-2 px-1 cursor-pointer rounded-sm w-[35px] h-[35px] flex lg:hidden items-center" onClick={() => setNavShow(prev => !prev)}>
                    <div className={`relative h-[2px] w-full ${navshow ? 'bg-white' : 'bg-cyan-700 rounded-lg'} ${navshow ? 'before:rotate-[45deg] before:-translate-y-[400%]' : 'before:rotate-0 before:-translate-y-[400%]'} before:transition-all before:duration-300 before:origin-top-left before:h-full before:w-full before:left-0 before:bg-cyan-700 rounded-lg before:absolute before:z-10 ${navshow ? 'after:rotate-[-45deg] after:translate-y-[400%]' : 'after:rotate-0 after:translate-y-[400%]'} after:transition-all after:duration-300 after:origin-bottom-left after:h-full after:w-full after:right-0  after:bg-cyan-700 rounded-lg after:absolute after:z-10`}></div>
                </div>
            </div>
        </div>
    )
}

export default Header;