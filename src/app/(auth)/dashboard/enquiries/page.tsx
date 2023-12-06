export const revalidate = "60"

import type { Metadata } from 'next'
import React from 'react'

import EnquiryList from '@/app/(auth)/dashboard/EnquiryList';
import prisma from '@/lib/prisma'



export const metadata: Metadata = {
  title: 'CTTI e-learning Centre :: Enquiries',
  description: 'About Us at CTTI. We are an e-Learning Course Centre is an Online Platform devoted to bringing quality, standard and professional courses to your need wherever and whenever you need it',
}

const fetchEnquiries = async() => {
  const res: EnquiryProps[]  = await prisma.enquiry.findMany({
    orderBy: {
      createdAt: "desc"
    },
    // include: {
    //   course: {
    //     select: {
    //       id: true, title: true, category: true
    //     }
    //   }
    // }
  })
  return res as EnquiryProps[];

}

export default async function Dashboard() {
  const enquiryData = await fetchEnquiries()
  // const 

  return (
    <main className="flex flex-col gap-4 px-2 sm:px-0 pt-5 pb-10">
      <EnquiryList key={'820416'} enquiryData={enquiryData} />
    </main>
  )
}
