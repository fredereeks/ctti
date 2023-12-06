"use client"

import React, { useRef, useState } from 'react'
import { Button } from '.'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { logo } from '@/assets/images'
import { useRouter } from "next/navigation"


interface ISignupProp {
    handleSignup: (data: FormData) => Promise<{ error: boolean, message: string }>,
}

export default function SignupForm({ handleSignup }: ISignupProp) {
    const [loading, setLoading] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement | null>(null);
    const [phone, setPhone] = useState<string | undefined>('')
    const [country, setCountry] = React.useState('Nigeria')
    const [region, setRegion] = React.useState('Abuja Federal Capital Territory')
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if ((passwordRef?.current?.value)?.trim() !== (confirmPasswordRef?.current?.value)?.trim()) {
            toast.error('Passwords do NOT Match!', { id: "86249", duration: 5000 }) 
        }
        toast.loading('Please wait while we send your request', { id: "86249", duration: 5000 }) 
        setLoading(true)
        try {
            const formData = new FormData(formRef?.current!)
            const res = await handleSignup(formData)
            if (res?.error) toast.error(res.message, { id: "86249", duration: 5000 }) 
            else {
                toast.success(res.message, { id: "86249", duration: 5000 }) 
                router.refresh()
                router.push('/dashboard', { scroll: false })
            }
        } catch (error) {
            toast.error('Unable to complete request, please, check your network and try again', { id: "86249", duration: 5000 }) 
        }
        setLoading(false)
    }


    return (
        <form action="" onSubmit={handleSubmit} ref={formRef} className="form w-full max-w-sm sm:max-w-md md:max-w-lg relative mx-auto grid lg:grid-cols-2 gap-3 p-4">
            <div className="lg:col-span-2 flex flex-col items-center py-2 pb-4 mb-4 border-b border-b-slate-200 ">
                <div className="relative">
                    <Image src={logo} alt="CTTI Official Logo" height={90} width={90} className='object-cover' />
                </div>
                <h3 className="pt-4 mt-4 border-t border-t-slate-200 text-sm md:text-base text-slate-500 text-center font-light">Become a Certified Member</h3>
                <p className="heading text-2xl text-center font-bold">Create your CTTI Account </p>
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'firstname'} className="text-gray-600 text-sm">First Name</label>
                <input type="text" required id='firstname' name={'firstname'} placeholder={'Enter First Name'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'middlename'} className="text-gray-600 text-sm">Middle Name</label>
                <input type="text" name={'middlename'} placeholder={'Enter Middle Name (optional)'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'lastname'} className="text-gray-600 text-sm">Last Name</label>
                <input type="text" required name={'lastname'} placeholder={'Enter Last Name (Surname)'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'phone'} className="text-gray-600 text-sm">Phone</label>
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
            <div className={`lg:col-span-2 flex flex-col gap-1`}>
                <label htmlFor={'email'} className="text-gray-600 text-sm">Email</label>
                <input type="email" required id='email' name={'email'} placeholder={'Enter Email'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'password'} className="text-gray-600 text-sm">Password</label>
                <input ref={passwordRef} type="password" required id='password' name={'password'} min={6} placeholder={'******'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'confirm-password'} className="text-gray-600 text-sm">Confirm Password</label>
                <input ref={confirmPasswordRef} type="password" required id='confirm-password' name={'confirm-password'} min={6} placeholder={'******'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'country'} className="text-gray-600 text-sm">{'Country'}</label>
                <CountryDropdown value={country} id='country' onChange={value => setCountry(value)} name='country' key={9206} classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'state'} className="text-gray-600 text-sm">{'State'}</label>
                <RegionDropdown country={country} disableWhenEmpty={true} value={region} onChange={value => setRegion(value)} name='state' key={9206} id='state' classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
            </div>
            <Button styles={'lg:col-span-2 text-white text-sm bg-primary hover:bg-primary/90 w-full'} bg={'text-indigo-700'} color={'text-white'} text={`${loading ? 'Processing...' : 'Create Account'}`} key={112} />
        </form>
    )
}
