import { ctti_digital_marketing } from '@/assets/images'
import {SignupForm} from '@/components'
import Image from 'next/image'
import { BreadCrumb } from '@/components'
import { Metadata } from 'next'
import { handleSignup } from '@/actions';

export const metadata: Metadata = {
    title: 'CTTI e-learning Centre :: Admin Signup',
    description: 'At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys',
}




export default function Enquiry() {

    return (
        <section className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2 pb-16">
            <div className="md:col-span-2">
                <BreadCrumb page={"Signup"} />
            </div>
            <div className="relative hidden md:flex bg-primary py-5">
                <Image src={ctti_digital_marketing} alt="CTTI Web Students" className="absolute w-full h-full left-0 top-0 object-cover opacity-50" />
            </div>
            <div className="relative flex">
                <SignupForm handleSignup={handleSignup} />
            </div>
        </section>
    )
}

