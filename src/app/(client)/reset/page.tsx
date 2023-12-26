import { ctti_excel, logo } from '@/assets/images'
import { ResetForm } from '@/components'
import Image from 'next/image'

import { BreadCrumb } from '@/components'
import { Metadata } from 'next'
import { handleTokenVerification } from '@/actions'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'CTTI e-learning Centre :: Reset',
    description: 'At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys',
}

type pageProps = {
    searchParams: {
        email: string
        token: string
    }
}


export default async function ResetPage({ searchParams: { email, token } }: pageProps) {
    if(!email || !token) {
        redirect("/auth/signin")
    }
    const res = await handleTokenVerification(email, token)
    if (res.error) {
        return (
            <section className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2 pb-16">
                <div className="md:col-span-2">
                    <BreadCrumb page={"Reset Password"} />
                </div>
                <div className="relative flex flex-col justify-center p-4">
                    <div className="lg:col-span-2 flex flex-col items-center py-2 pb-4 mb-4">
                        <div className="relative my-4 border-b border-b-slate-200">
                            <Image src={logo} alt="CTTI Official Logo" height={90} width={90} className='object-cover' />
                        </div>
                        <h3 className="heading text-2xl text-center font-bold">Reset your Password</h3>
                        <p className="pt-4 mt-4 border-t border-t-slate-200 text-sm md:text-base text-slate-600 text-center font-light">The information provided does not match any record we have. It could be that you have performed this action in the past or that you copied a wrong address.</p>
                        <Link href={"/"} className="cursor-pointer my-5 py-2 px-5 rounded-md border border-sky-600 text-sky-600 text-sm">Back to Home</Link>
                    </div>
                </div>
                <div className="relative hidden md:flex bg-primary h-[500px]">
                    <Image src={ctti_excel} alt="CTTI Login Page" className="absolute w-full h-full left-0 top-0 object-cover opacity-50 grayscale" />
                </div>
            </section>
        )
    }
    else {
        return (
            <section className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2 pb-16">
                <div className="md:col-span-2">
                    <BreadCrumb page={"Reset Password"} />
                </div>
                <div className="relative flex flex-col justify-center p-4">
                    <ResetForm email={email} />
                </div>
                <div className="relative hidden md:flex bg-primary h-[500px]">
                    <Image src={ctti_excel} alt="CTTI Login Page" className="absolute w-full h-full left-0 top-0 object-cover opacity-50 grayscale" />
                </div>
            </section>
        )
    }
}

