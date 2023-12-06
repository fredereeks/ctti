import React from 'react'
import { Metadata } from 'next'
import nodeMailer from 'nodemailer'
import { BreadCrumb, CourseCard } from '@/components';
import { courses } from '@/data';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { ctti_business } from '@/assets/images';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'CTTI e-learning Centre :: Contact',
  description: 'Contact Us at CTTI. We are an e-Learning Course Centre is an Online Platform devoted to bringing quality, standard and professional courses to your need wherever and whenever you need it',
}



export default async function ContactPage() {
  return (
    <main className="relative">
      <BreadCrumb page={"Contact"} />
      <section className="relative bg-primary/80 py-20">
        <Image src={ctti_business} alt='ctti business leadership' className="absolute top-0 left-0 w-full h-full object-cover opacity-20" />
        <div className="container relative mx-auto flex flex-col md:flex-row md:justify-center md:items-center gap-2 px-4">
          <div className="w-full flex flex-col gap-3 md:flex-1 md:pr-2 py-4">
            <h3 data-aos-duration="1000" data-aos-delay="500" data-aos="fade-down"  style={{textShadow: '0 0 12px #0004'}} className="text-white font-extrabold text-4xl md:text-5xl">We are a Message away &#8212; Contact Us</h3>
            <p  data-aos-duration="1000" data-aos-delay="500" data-aos="fade-right" className="text-white leading-[1.8]">Our dedicated team is always happy to answer any kind of queries you may have. Try us.</p>
            <p  data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className="text-white leading-[1.8]">Alternatively, you can use the live chat to get instant reply (working days and hours only)</p>
          </div>
          <div className="w-full sm:flex-1 grid grid-cols-1 justify-center gap-2 bg-white p-6 shadow-xl shadow-slate-500/70 overflow-hidden rounded-sm">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-4">
        <div className="container relative mx-auto py-10 flex flex-col overflow-hidden">
          <h3 className="py-2 px-3 heading border-l-[3px] border-l-gray-300 font-bold text-lg md:text-2xl">Suggested Courses for you</h3>
          <div className="col-span-1 md:col-span-3 pt-6 pb-4 grid course__wrap gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {
              courses.filter(course => course.featured === true).slice(0, 4).reverse().map(course => <CourseCard key={course.id} {...course} />)
            }
          </div>
        </div>
      </section>
    </main>
  )
}
