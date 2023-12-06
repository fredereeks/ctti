import { ctti_female_partners } from '@/assets/images'
import {LoginForm} from '@/components'
import Image from 'next/image'

import { BreadCrumb } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CTTI e-learning Centre :: Login',
    description: 'At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys',
}


export default function LoginPage() {

    return (
        <section className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2 pb-16">
            <div className="md:col-span-2">
                <BreadCrumb page={"Login"} />
            </div>
            <div className="relative flex flex-col justify-center p-4">
                <LoginForm  />
            </div>
            <div className="relative hidden md:flex bg-primary h-[500px]">
                <Image src={ctti_female_partners} alt="CTTI Login Page" className="absolute w-full h-full left-0 top-0 object-cover opacity-50 grayscale" />
            </div>
        </section>
    )
}

