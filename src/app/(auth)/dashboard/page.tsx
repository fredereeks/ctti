import type { Metadata } from 'next'

import {DashCharts} from '@/app/(auth)/ui'
import EnquiryList from '@/app/(auth)/dashboard/EnquiryList';
import prisma from '@/lib/prisma'
import { courses } from '@/data';
import { onlyUnique } from '@/utils/findUnique';


export const metadata: Metadata = {
  title: 'CTTI e-learning Centre :: Dashboard',
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
  return res;

}
const fetchUsers = async() => {
  const admins  = await prisma.user.findMany({ where: { type: "Admin" }, orderBy: { createdAt: "desc" } })
  const users  = await prisma.user.findMany({ where: { type: "User" }, orderBy: { createdAt: "desc" } })
  const allUsers = await prisma.user.groupBy({ by: ['type'], _count: { _all: true }, })
  const userTypes = await prisma.$queryRaw`SELECT COUNT(us.id) AS totalUsers, COUNT(ad.id) AS totalAdmins, COUNT(ins.id) AS totalInstructors FROM user us JOIN user ad JOIN user ins`;
  // console.log({allUsers: allUsers.map(el => console.log({el})), userTypes})
  return {users, admins};
}

export default async function Dashboard() {
  const enquiryData = await fetchEnquiries()
  const totalUsers = await fetchUsers()
  
 

  return (
    <main className="flex flex-col gap-4 px-2 sm:px-0 pt-5 pb-10">
      <section className="scrollbar x-scrollbar bg-white dark:bg-[#dbf0f724] dark:shadow-black shadow-slate-200 shadow-md rounded-lg p-4 relative grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid place-items-center px-4">
          <div className="text-sitetext/80 text-sm dark:text-slate-400">Courses</div>
          <div className="font-bold text-slate-700 text-xl sm:text-3xl md:text-3xl lg:text-4xl tracking-tighter dark:text-slate-200">{courses.length}</div>
          {/* <div className="stat-desc text-xs dark:text-slate-500 whitespace-pre-wrap text-center">From Last Month</div> */}
        </div>
        <div className="grid place-items-center px-4">
          <div className="text-sitetext/80 text-sm dark:text-slate-400">Categories</div>
          <div className="font-bold text-slate-700 text-xl sm:text-3xl md:text-3xl lg:text-4xl tracking-tighter dark:text-slate-200">{courses.map(course => course.category).filter(onlyUnique).length}</div>
          {/* <div className="stat-desc text-xs dark:text-slate-500 whitespace-pre-wrap text-center">From 35 Members</div> */}
        </div>
        <div className="grid place-items-center px-4">
          <div className="text-sitetext/80 text-sm dark:text-slate-400">Enquiries</div>
          <div className="font-bold text-slate-700 text-xl sm:text-3xl md:text-3xl lg:text-4xl tracking-tighter dark:text-slate-200">{enquiryData.length}</div>
          {/* <div className="stat-desc text-xs dark:text-slate-500 whitespace-pre-wrap text-center">Since last week</div> */}
        </div>
        <div className="grid place-items-center px-4">
          <div className="text-sitetext/80 text-sm dark:text-slate-400">Total Admins</div>
          <div className="font-bold text-slate-700 text-xl sm:text-3xl md:text-3xl lg:text-4xl tracking-tighter dark:text-slate-200">{totalUsers.admins.length}</div>
          {/* <div className="stat-desc text-xs dark:text-slate-500 whitespace-pre-wrap text-center">5+ since last week</div> */}
        </div>
      </section>
      <section className="relative">
        <DashCharts enquiry={enquiryData} />
      </section>
      <EnquiryList key={'820416'} enquiryData={enquiryData} />
    </main>
  )
}
