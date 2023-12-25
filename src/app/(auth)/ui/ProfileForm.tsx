"use client"

import { deleteAction, handleUpload, updateAccount } from '@/actions';
import { ctti_coder } from '@/assets/images';
import { imageUploader } from '@/utils/imageUploader';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import toast from 'react-hot-toast';
import { Modal } from '.';
import { IoTrashBinOutline } from 'react-icons/io5';

export default function ProfileForm({ user }: { user: UserProps }) {
    const [loading, setLoading] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement | null>(null);
    const [country, setCountry] = useState(user?.country || 'Nigeria')
    const [uploadLoading, setUploadLoading] = useState<boolean>(false)
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [region, setRegion] = useState(user?.state || 'Abuja Federal Capital Territory')
    const router = useRouter()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const handleDelete = async() => {
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append("deleteId", user?.id!)
            formData.append("type", user?.type as unknown as string)
            const res = await deleteAction(formData)
            if (res?.error) toast.error(res.message, { id: "86249", duration: 5000 })
            else {
                toast.success(res.message, { id: "86249", duration: 5000 })
                router.push("/auth/login")
            }
        } catch (error) {
            toast.error('Unable to complete request, please, check your network and try again', { id: "86249", duration: 5000 })
        }
        modalRef?.current?.close()
        setLoading(false)
    }


    const handleFormUpload = async (e: React.FormEvent) => {
        e.preventDefault()
        setUploadLoading(true)
        const fileInput = (fileInputRef?.current?.files?.[0]!) as File
        if(fileInput.size > 100000) {
            toast.error(`Image size is larger than 100kb. Resize or use another image`, { id: "86249", duration: 5000 })
            setUploadLoading(false)
            return;
        }
        try {
            const image = await imageUploader(fileInput)
            const formData = new FormData()
            formData.append("id", user?.id)
            formData.append("file", image as string)
            const res = await handleUpload(formData)
            if (res?.error) toast.error(res.message, { id: "86249", duration: 5000 })
            else {
                toast.success(res.message, { id: "86249", duration: 5000 })
                router.refresh()
            }
        } catch (error) {
            toast.error('Unable to complete request, please, check your network and try again ' + error, { id: "86249", duration: 5000 })
        }
        setUploadLoading(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
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
            toast.error('Unable to complete request, please, check your network and try again ' + error, { id: "86249", duration: 5000 })
        }
        setLoading(false)
    }

    return (
        <>
            <form action="" className="flex flex-col gap-4 p-4">
                <h4 className="text-xs text-slate-500 opacity-80">Your Profile Picture</h4>
                <div className="flex gap-4 md:gap-6">
                    <label htmlFor="profilePicture" className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 rounded-full overflow-hidden cursor-pointer" title='Click to change Image'>
                        <input type="file" name="" id="profilePicture" className="hidden" />
                        <Image src={`${user?.image || ctti_coder}`} alt={`${user?.firstname} ${user?.middlename} ${user?.lastname}`} fill={true} className='object-cover' />
                    </label>
                    <div className="flex flex-col gap-1 w-max justify-center sm:items-center">
                        <div className="flex gap-4">
                            <button type="button" disabled={uploadLoading} className="py-2 px-4 sm:px-8 bg-primary text-white text-[.6rem] text-xs rounded-md hover:bg-primary/90 cursor-pointer">{uploadLoading ? 'Uploading...' : 'Upload New'}</button>
                            <button type="button" onClick={() =>  modalRef.current?.showModal()} disabled={uploadLoading} className="py-2 px-4 sm:px-8 bg-slate-300/50 dark:bg-slate-100 dark:hover:text-slate-900 text-slate-700 text-[.6rem] text-xs rounded-md hover:bg-danger hover:text-white cursor-pointer">Delete Picture</button>
                        </div>
                        <p className="text-[.6rem] text-center text-slate-500">Upload or Delete your Profile Picture</p>
                    </div>
                </div>
            </form>
            <form ref={formRef} onSubmit={handleSubmit} className="px-4 sm:px-0 w-full sm:w-10/12 sm:scale-90 grid sm:grid-cols-2 gap-4 sm:gap-y-6 sm:justify-center relative after:bg-slate-300 after:-top-4 after:h-[.51px] after:w-11/12 after:left-1/2 after:-translate-x-1/2 after:absolute">
                {/* @ts-ignore-next-line */}
                <Image src={upload! || user?.image} alt='User Profile' />
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
            <Modal modalRef={modalRef}>
                <div className='p-5 flex flex-col gap-4'>
                    <div className="w-full flex items-center gap-4">
                        <div className={`h-10 sm:h-14 w-10 sm:w-14 flex-shrink-0 flex justify-center items-center rounded-full overflow-hidden relative bg-danger dark:bg-slate-100 text-slate-100 dark:text-slate-600`}>
                            <IoTrashBinOutline className='text-lg sm:text-xl' />
                        </div>
                        <div className='flex-1 flex flex-col text-center w-full p-4'>
                            <div className="flex gap-4 text-slate-600 w-full">
                                <div className="flex flex-col justify-center text-center">
                                    <h5 className="text-lg sm:text-xl font-semibold leading-tight whitespace-nowrap flex items-center"> {`${user?.firstname} ${user?.middlename} ${user?.lastname}`}&apos;s Picture </h5>
                                    <div className="text-xs bg-slate-200/50 dark:bg-slate-200 p-3 rounded-sm uppercase">Are you sure you want to delete</div>
                                </div>
                            </div>
                            <div className="flex gap-4 py-2 w-full">
                                <button onClick={() => modalRef?.current?.close()} disabled={loading} type="submit" className="py-2 px-4 sm:px-8 bg-success text-white text-[.6rem] text-xs rounded-md hover:bg-success/90 cursor-pointer">No! Cancel</button>
                                <button onClick={handleDelete} disabled={loading} type="button" className="py-2 px-4 sm:px-8 bg-danger text-white text-[.6rem] text-xs rounded-md hover:bg-[#ed3869] hover:text-white cursor-pointer">Yes! Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
