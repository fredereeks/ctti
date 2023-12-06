"use client"
import { handleSubscription } from '@/actions'
// import { handleSubscription } from '@/actions'
import React, { FormEvent, useRef, useTransition } from 'react'
import toast from 'react-hot-toast'

export default function SubscriptionForm() {
    const [isPending, startTransition] = useTransition()
    const formRef = useRef<HTMLFormElement | null>(null)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            if (formRef?.current) {
                const formData = new FormData(formRef?.current)
                const res = await handleSubscription(formData)
                toast.success(res.message || 'Success', { id: '8014' })
            }
            else {
                toast.error('Something went wrong. Please, try again', { id: '8014' })
            }
        } catch (error) {
            toast.error('Something went wrong. Please, try again', { id: '8014' })
        }

    }

    return (
        // <form ref={formRef} onSubmit={(e) => startTransition(() => handleSubmit(e))} className="shad w-full md:w-[70%] mx-auto flex bg-white items-center justify-center rounded-md overflow-hidden">
        <form data-aos-duration="1000" data-aos-delay="500" data-aos="fade-in" ref={formRef} onSubmit={handleSubmit} className="shad w-full md:w-[70%] mx-auto flex bg-white items-center justify-center rounded-md overflow-hidden">
            <input required type="text" name="email" className="flex-1 bg-transparent text-sm p-2 text-slate-300 outline-0 border border-slate-50" />
            <button disabled={isPending} type="submit" className="bg-primary px-4 w-max py-3 text-white">{isPending ? 'Processing...' : 'Subscribe'}</button>
        </form>
    )
}
