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
          <form action="" className="flex flex-col gap-4 p-4">
            <h4 className="text-xs text-slate-500 opacity-80">Your Profile Picture</h4>
            <div className="flex gap-4 md:gap-6">
              <label htmlFor="profilePicture" className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 rounded-full overflow-hidden cursor-pointer">
                <input type="file" name="" id="profilePicture" className="hidden" />
                <Image src={ctti_coder || `/users/${user?.image}`} alt={`${user?.firstname} ${user?.middlename} ${user?.lastname}`} fill={true} className='object-cover' />
              </label>
              <div className="flex flex-col gap-1 w-max justify-center sm:items-center">
                <div className="flex gap-4">
                  <button type="button" className="py-2 px-4 sm:px-8 bg-primary text-white text-[.6rem] text-xs rounded-md hover:bg-primary/90 cursor-pointer">Upload New</button>
                  <button type="button" className="py-2 px-4 sm:px-8 bg-slate-300/50 dark:bg-slate-100 dark:hover:text-slate-900 text-slate-700 text-[.6rem] text-xs rounded-md hover:bg-danger hover:text-white cursor-pointer">Delete Picture</button>
                </div>
                <p className="text-[.6rem] text-center text-slate-500">Upload or Delete your Profile Picture</p>
              </div>
            </div>
          </form>
          <ProfileForm user={user} />
        </div>
      </section>
    </main>
  )
}
