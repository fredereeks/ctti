"use client"

import { updateAccount } from '@/actions';
import { useRouter } from 'next/navigation';
import React, {useState, useRef} from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import toast from 'react-hot-toast';

export default function ProfileForm({ user }: { user: UserProps }) {
    const [loading, setLoading] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement | null>(null);
    const [country, setCountry] = useState(user?.country || 'Nigeria')
    const [region, setRegion] = useState(user?.state || 'Abuja Federal Capital Territory')
    const router = useRouter()

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(formRef?.current!)
            const res = await updateAccount(formData)
            if (res?.error) toast.error(res.message, { id: "86249", duration: 5000 }) 
            else {
                toast.success(res.message, { id: "86249", duration: 5000 }) 
                router.refresh()
            }
        } catch (error) {
            toast.error('Unable to complete request, please, check your network and try again '+error, { id: "86249", duration: 5000 }) 
        }
        setLoading(false)
    }

    return (

        <form ref={formRef} onSubmit={handleSubmit} className="px-4 sm:px-0 w-full sm:w-10/12 sm:scale-90 grid sm:grid-cols-2 gap-4 sm:gap-y-6 sm:justify-center relative after:bg-slate-300 after:-top-4 after:h-[.51px] after:w-11/12 after:left-1/2 after:-translate-x-1/2 after:absolute">
            <input type="hidden" name="id" value={user?.id} />
            <input type="hidden" name="extra" value={user?.password} />
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'firstname'} className="text-gray-600 text-sm">First Name</label>
                <input type="text" required name={'firstname'} defaultValue={user?.firstname} placeholder={'Enter First Name'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'middlename'} className="text-gray-600 text-sm">Middle Name</label>
                <input type="text" required name={'middlename'} defaultValue={user?.middlename} placeholder={'Enter Middle Name (optional)'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'lastname'} className="text-gray-600 text-sm">Last Name</label>
                <input type="text" required name={'lastname'} defaultValue={user?.lastname} placeholder={'Enter Last Name'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'email'} className="text-gray-600 text-sm">Email</label>
                <input type="text" required name={'email'} defaultValue={user?.email} placeholder={'Enter Email'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'password'} className="text-gray-600 text-sm">Change Password (leave empty to keep your current password)</label>
                <input type="text" name={'password'} placeholder={'Enter a New Password'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'phone'} className="text-gray-600 text-sm">Phone Number</label>
                <input type="text" required name={'phone'} defaultValue={user?.phone} placeholder={'Enter Last Name'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`sm:col-span-2 flex flex-col gap-1`}>
                <label htmlFor={'address'} className="text-gray-600 text-sm">Address</label>
                <input type="text" name={'address'} defaultValue={user?.address} placeholder={'Enter Your Address (optional)'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'country'} className="text-gray-600 text-sm">{'Country'}</label>
                <CountryDropdown value={country} id='country' onChange={value => setCountry(value)} name='country' key={9206} classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
            </div>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor={'state'} className="text-gray-600 text-sm">{'State'}</label>
                <RegionDropdown country={country} disableWhenEmpty={true} value={region} onChange={value => setRegion(value)} name='state' key={9206} id='state' classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
            </div>
            <div className={`sm:col-span-2 flex flex-col gap-1`}>
                <label htmlFor={'confirm-password'} className="text-gray-600 text-sm">Confirm Password (to save change)</label>
                <input type="password" required name={'confirm-password'} id={'confirm-password'} placeholder={'Enter your Current Password'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
            </div>
            <button disabled={loading} type='submit' className="sm:col-span-2 cursor-pointer rounded-md text-thin text-xs text-white bg-primary hover:bg-primary/90 py-2 px-4 sm:py-3 sm:px-6 w-max select-none">{loading ? "Updating Profile..." : "Update Profile"}</button>
        </form>
    )
}
