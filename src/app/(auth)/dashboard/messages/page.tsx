export const revalidate = "60"
import React from 'react'
import MessageList from './MessageList'
import prisma from '@/lib/prisma';
import { Metadata } from 'next'
import nodeMailer from 'nodemailer'
import { revalidatePath } from 'next/cache';

export const metadata: Metadata = {
  title: 'CTTI e-learning Centre :: Messages',
  description: 'Contact Us at CTTI. We are an e-Learning Course Centre is an Online Platform devoted to bringing quality, standard and professional courses to your need wherever and whenever you need it',
}

const fetchMessages = async() => {
    const messages = await prisma.contactMessage.findMany()
    return messages as MessageProps[]
}


export default async function Messages() {
  const messageData = await fetchMessages();
  return (
    <main className="flex flex-col gap-4 px-2 sm:px-0 pt-5 pb-10">
      <section className="relative flex flex-col gap-2 p-4 bg-white  dark:bg-[#dbf0f724] dark:shadow-black shadow-slate-200 shadow-md rounded-lg">
        <MessageList key={'92720'} messageData={messageData} />
      </section>
    </main>
  )
}
