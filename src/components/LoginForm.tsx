"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '.'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { logo } from '@/assets/images'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { handleReset } from '@/actions'



export default function LoginForm() {
    const [loading, setLoading] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const resetEmailRef = useRef<HTMLInputElement | null>(null)
    const [showResetForm, setShowResetForm] = useState<boolean>(false)

    const router = useRouter()
    const { status } = useSession()

    useEffect(() => {
        if (status === "authenticated") {
            router.refresh()
            router.push("/dashboard")
        }
        //eslint-disable-next-line
    }, [status])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast.loading('Please wait while we send your request', { id: "86249", duration: 5000 })
        setLoading(true)
        try {
            const email = emailRef?.current?.value, password = passwordRef?.current?.value
            const res = await signIn("credentials", { email, password, redirect: false })
            // res.error ? toast.error(res.message, { id: "86249", duration: 5000 })  : toast.success(res.message, { id: "86249", duration: 5000 }) 
            if (res?.ok) toast.success(`Welcome Back ${email}`, { id: "86249", duration: 5000 })
            else {
                if (res?.error === "CredentialsSignin") toast.error("Invalid credentials supplied, please, try again", { id: "82046", duration: 4000 })
                else toast.error(res?.error || "Invalid credentials supplied, please, try again", { id: "86249", duration: 5000 })
            }
        } catch (error) {
            toast.error('Unable to complete request, please, check your network and try again', { id: "86249", duration: 5000 })
        }
        setLoading(false)
    }

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        toast.loading('Please wait while we send a reset link to your email', { id: "86249" })
        setLoading(true)
        try {
            const email = resetEmailRef?.current?.value as string
            const res = await handleReset(email)
            if (res?.error) toast.error(res.message, { id: "86249", duration: 5000 })
            else {
                toast.success(res.message, { id: "86249", duration: 5000 })
                router.refresh()
            }
        } catch (error) {
            toast.error('Unable to complete request, please, check your network and try again', { id: "86249", duration: 5000 })
        }
        setLoading(false)
    }


    return (
        <>
            {
                showResetForm ?
                    <form action="" onSubmit={handlePasswordReset} ref={formRef} className="form w-full max-w-sm md:max-w-md relative mx-auto flex flex-col gap-1 p-4">
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <Image src={logo} alt="CTTI Official Logo" height={90} width={90} className='object-cover w-auto h-auto' />
                            </div>
                            <p className="heading text-lg text-center py-4 mt-4 border-y border-y-slate-200">Enter your Email to reset your Password</p>
                        </div>
                        <div className={`flex flex-col gap-1 py-1`}>
                            <label htmlFor={'resetEmail'} className="text-gray-600 text-sm">Email</label>
                            <input type="email" required ref={resetEmailRef} id='resetEmail' name={'resetEmail'} placeholder={'Enter your Account Email'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
                        </div>
                        <p onClick={() => setShowResetForm(!showResetForm)} className="cursor-pointer underline underline-offset-2 text-right text-sky-600 text-sm">Have an Account? Login</p>
                        <Button styles={'text-white text-sm bg-primary hover:bg-primary/90 w-full mt-2'} bg={'text-primary'} color={'text-white'} text={`${loading ? 'Processing...' : 'Reset Password'}`} key={113} />
                    </form>
                    :
                    <form action="" onSubmit={handleSubmit} className="form w-full max-w-sm md:max-w-md relative mx-auto flex flex-col gap-1 p-4">
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <Image src={logo} alt="CTTI Official Logo" height={90} width={90} className='object-cover w-auto h-auto' />
                            </div>
                            {/* <h3 className="pt-4 mt-4 border-t border-t-slate-200 text-lg md:text-xl text-slate-500 text-center font-light">We are always on hand to respond promptly to your enquiries</h3> */}
                            <p className="heading text-lg text-center py-4 mt-4 border-y border-y-slate-200">Sign in to access your Account</p>
                        </div>
                        <div className={`flex flex-col gap-1 py-1`}>
                            <label htmlFor={'email'} className="text-gray-600 text-sm">Email</label>
                            <input type="email" required ref={emailRef} id='email' name={'email'} placeholder={'Enter Email'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
                        </div>
                        <div className={`flex flex-col gap-1 py-1`}>
                            <label htmlFor={'password'} className="text-gray-600 text-sm">Password</label>
                            <input type="password" required ref={passwordRef} id='password' name={'password'} placeholder={'Enter First Name'} className='hover:border-primary/90 outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' />
                        </div>
                        <p onClick={() => setShowResetForm(!showResetForm)} className="cursor-pointer underline underline-offset-2 text-right text-sky-600 text-sm">Forgot Password</p>
                        <Button styles={'text-white text-sm bg-primary hover:bg-primary/90 w-full mt-2'} bg={'text-primary'} color={'text-white'} text={`${loading ? 'Processing...' : 'Login'}`} key={112} />
                    </form>
            }
        </>
    )
}
