"use client"

import React, { useRef, useState } from 'react'
import { Button } from '.'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import toast from 'react-hot-toast'
import Image, { StaticImageData } from 'next/image'
import { logo } from '@/assets/images'
import { submitEnquiry } from '@/actions';

type CoursesProps = { id: string; image: StaticImageData; category: string; title: string; users: number; rating: number; description: string; duration: string; featured: boolean; requisite: string[]; contents: string[]; }


export default function EnquiryForm({ courses }: {courses: CoursesProps[]}) {
    const [loading, setLoading] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement | null>(null);
    const [phone, setPhone] = useState<string | undefined>('')
    const [country, setCountry] = React.useState('Nigeria')
    const [region, setRegion] = React.useState('Abuja Federal Capital Territory')
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast.loading('Please wait while we send your request', { id: "82046" })
        setLoading(true)
        try {
            const formData = new FormData(formRef?.current!)
            const res = await submitEnquiry(formData)
            res.error ? toast.error(res.message, { id: "82046" }) : toast.success(res.message, { id: "82046" })
        } catch (error) {
            toast.error('Unable to complete request, please, check your network and try again', { id: "82046" })
        }
        setLoading(false)
    }


    return (
        <form action="" onSubmit={handleSubmit} ref={formRef} className="form w-full max-w-sm sm:max-w-md md:max-w-lg relative mx-auto grid lg:grid-cols-2 gap-3 p-4">
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-down-left" className="lg:col-span-2 flex flex-col items-center py-2 pb-4 mb-4 border-b border-b-slate-200 ">
                <div className="relative">
                    <Image src={logo} alt="CTTI Official Logo" height={90} width={90} className='object-cover' />
                </div>
                <h3 data-aos-duration="1000" data-aos-delay="500" data-aos="fade-down-right"  className="pt-4 mt-4 border-t border-t-slate-200 text-lg md:text-xl text-slate-500 text-center font-light">We are always on hand to respond promptly to your enquiries</h3>
                <p  data-aos-duration="1000" data-aos-delay="500" data-aos="fade-left" className="heading text-lg text-center">We require only a few details</p>
            </div>
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-right" className={`flex flex-col gap-1`}>
                <label htmlFor={'firstname'} className="text-gray-600 text-sm">First Name</label>
                <input type="text" required id='firstname' name={'firstname'} placeholder={'Enter First Name'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-left" className={`flex flex-col gap-1`}>
                <label htmlFor={'middlename'} className="text-gray-600 text-sm">Middle Name</label>
                <input type="text" name={'middlename'} placeholder={'Enter Middle Name (optional)'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-right" className={`flex flex-col gap-1`}>
                <label htmlFor={'lastname'} className="text-gray-600 text-sm">Last Name</label>
                <input type="text" required name={'lastname'} placeholder={'Enter Last Name (Surname)'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-left" className={`flex flex-col gap-1`}>
                <label htmlFor={'phone'} className="text-gray-600 text-sm">Phone (we will call you back)</label>
                <div className="flex w-full gap-1 py-2 border border-zinc-200 bg-transparent rounded-md overflow-hidden">
                    <PhoneInput
                        onChange={(value) => setPhone(value)}
                        placeholder={"Enter Phone Number"}
                        international
                        withCountryCallingCode={true}
                        key={234}
                        defaultCountry='NG'
                        style={{ outline: 0, width: '108%' }}
                        countryCallingCodeEditable={false}
                        value={phone}
                        name="phone"
                        flags={flags}
                        limitMaxLength={true}
                        smartCaret={false}
                        className='w-full hover:border-primary/90 outline-none placeholder-opacity-70 text-sitetext/80 bg-transparent rounded-md px-4 flex-1'
                    />
                </div>
            </div>
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-right" className={`lg:col-span-2 flex flex-col gap-1`}>
                <label htmlFor={'email'} className="text-gray-600 text-sm">Email</label>
                <input type="email" required id='email' name={'email'} placeholder={'Enter Email'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-left" className={`lg:col-span-2 flex flex-col gap-1`}>
                <label htmlFor={'course'} className="text-gray-600 text-sm">Course of Interest</label>
                <select required id='course' name={'course'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-white border border-zinc-200 rounded-[.25rem] py-2 px-4'>
                    {
                        courses.map(course => <option className='normal-text text-sm bg-white font-sans' key={course.id} value={course.id}>{course.title}</option>)
                    }
                </select>
            </div>
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-right" className={`flex flex-col gap-1`}>
                <label htmlFor={'country'} className="text-gray-600 text-sm">{'Country'}</label>
                <CountryDropdown value={country} id='country' onChange={value => setCountry(value)} name='country' key={9206} classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
            </div>
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-left" className={`flex flex-col gap-1`}>
                <label htmlFor={'state'} className="text-gray-600 text-sm">{'State'}</label>
                <RegionDropdown country={country} disableWhenEmpty={true} value={region} onChange={value => setRegion(value)} name='state' key={9206} id='state' classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
            </div>
            <textarea maxLength={290} placeholder='Tell us what you want to know' required name='message' className="w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[12rem] lg:col-span-2 resize-y" ></textarea>
            <Button styles={'lg:col-span-2 text-white text-sm bg-primary hover:bg-primary/90 w-full'} bg={'text-indigo-700'} color={'text-white'} text={`${loading ? 'Processing...' : 'Send Message'}`} key={112} />
            {/* <Link href="/signup" className="text-xs md:text-sm text-center text-slate-400 py-1">Don&apos;t have an Account? <span className="text-indigo-500 font-semibold">Sign Up</span></Link> */}
        </form>
    )
}
