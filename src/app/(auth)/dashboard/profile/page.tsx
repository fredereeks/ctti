import { ctti_coder } from '@/assets/images'
import ProfileForm from '@/app/(auth)/ui/ProfileForm'
import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import { redirect } from 'next/navigation'
import { signOut } from 'next-auth/react'

const fetchUser = async(email: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })
  if(!user) {
    signOut()
    redirect("/auth/signin");
  }
  return user as UserProps
}

export default async function Profile() {
  const session = await getServerSession(authOptions)
  const user = await fetchUser(session?.user?.email as string)

  return (
    <main className="flex flex-col px-2">
      <section className="flex flex-col gap-4 sm:gap-10">
        {/* <h2 className="text-lg sm:text-xl md:text-2xl">Account Settings</h2> */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <label htmlFor="profileForm" className="cursor-pointer rounded-md text-thin text-xs text-slate-500  hover:text-primary dark:text-slate-400 dark:hover:border-slate-400 border border-slate-300 hover:border-primary peer-checked/profile:border-primary py-2 px-4 sm:py-3 sm:px-6 w-max select-none">Personal Information</label>
          {/* <label htmlFor="accountForm" className="cursor-pointer rounded-md text-thin text-xs text-slate-500  hover:text-primary dark:text-slate-400 dark:hover:border-slate-400 border border-slate-300 hover:border-primary peer-checked/account:border-primary py-2 px-4 sm:py-3 sm:px-6 w-max select-none">Account Details</label> */}
        </div>
      </section>
      <input type="radio" defaultChecked name="form-peer" id="profileForm" className="hidden peer/profile" />
      <section className="hidden peer/account:hidden flex-col pt-5 pb-10 peer-checked/profile:flex">
        <div className="flex flex-col gap-6">
          
          <ProfileForm user={user} />
        </div>
      </section>
    </main>
  )
}
