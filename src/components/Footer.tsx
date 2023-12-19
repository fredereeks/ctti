import React from 'react'
import Link from 'next/link'
import { logo } from '../assets/images'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import Image from 'next/image'

const Footer = () => {
  return (
        <footer className="bg-white relative py-10 px-4">
            <div className="container pb-10 mx-auto flex flex-col sm:flex-row justify-center md:grid md:grid-cols-3 md:gap-4 gap-6">
                <div className="flex flex-col">
                    <Link href="/" className='w-[70px] h-[70px] text-gray-100'>
                        <Image src={logo} alt="CTTI Logo" className="w-full h-[60px] object-contain sm:object-contain" />
                    </Link>
                    {/* <p className="text-xs md:text-sm text-slate-600 text-justify">...the best in what we do</p> */}
                    <div className="flex gap-2 items-center">
                        <Link href="https://www.facebook.com/ctti" target='_blank'>
                            <IoLogoFacebook className="text-lg md:text-xl text-primary" />
                        </Link>
                        <Link href="https://www.twitter.com/ctti" target='_blank'>
                            <IoLogoTwitter className="text-lg md:text-xl text-sky-500" />
                        </Link>
                        <Link href="https://www.instagram.com/ctti" target='_blank'>
                            <IoLogoInstagram className="text-lg md:text-xl text-red-500" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-lg md:text-xl pb-2 uppercase">Working Hours</h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs md:text-sm text-slate-600 text-justify">Monday - Friday: 8:00AM - 5:00PM.</p>
                        <p className="text-xs md:text-sm text-slate-600 text-justify">Saturday: 9:00AM - 2:00PM.</p>
                        <Link className="text-xs md:text-sm text-slate-600 text-justify" href="mailto:admin@ctti.ng">admin@ctti.ng</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-lg md:text-xl pb-2 uppercase">WE ARE HERE</h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs md:text-sm text-slate-600 text-justify">House 2, &apos;A&apos; Close, 45 Road, Off 4th Avenue, Gwarinpa, Abuja</p>
                         <p className="text-xs md:text-sm text-slate-600 text-justify">+2349152200170</p>
                        {/* <p className="text-xs md:text-sm text-slate-600 text-justify">+2349152200170, +2349152200171</p>
                        <p className="text-xs md:text-sm text-slate-600 text-justify">+2349152200172</p> */}
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-3 px-4 md:px-10 absolute left-0 bottom-0 w-full flex justify-between items-center">
                <div className="container mx-auto sm:px-4 flex flex-col sm:flex-nowrap sm:flex-row gap-2 items-center md:items-center sm:justify-between">
                    <p className="text-slate-600 text-center sm:text-left text-xs font-thin">&copy;{new Date().getFullYear()} ctti.ng. All rights reserved</p>
                    <div className="flex flex-1 justify-center sm:justify-end gap-2 w-full sm:w-max">
                        <Link href="/" className="hover:underline py-1 text-slate-600 mx-2 text-xs font-thin">Privacy Policy</Link>
                        <Link href="/" className="hover:underline py-1 text-slate-600 mx-2 text-xs font-thin">Cookies Policy</Link>
                        <Link href="/sitemap.xml" className="hover:underline py-1 text-slate-600 mx-2 text-xs font-thin">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer