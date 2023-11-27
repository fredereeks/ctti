import { BreadCrumb } from '@/components'
import React from 'react'

export default function ClientPage() {
    return (
        <main className='flex flex-col justify-center bg-white min-h-[60vh]'>
            <BreadCrumb extra={{ name: "About", link: "/about" }} page={"Clients"} />
            <div className="flex-1 flex flex-col gap-2 justify-center container mx-auto py-20">
                <h3 className="heading text-3xl md:text-5x text-center px-4">Coming Soon!</h3>
                <p className="normal-text text-center px-4">This page is currently being developed</p>
            </div>
        </main>
    )
}


