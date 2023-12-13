"use client"

import { slides } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


export default function HomeSlider() {

  return (
    <Swiper
      // spaceBetween={50}
      // slidesPerView={3}
      // fadeEffect={}
      // speed={8000}
      modules={[Autoplay]}
      autoplay={true}
      loop={true}
      direction='horizontal'
      effect='fade'
    > {
        slides.map((slide,i) => (
          <SwiperSlide key={slide.id}>
            <aside className="relative z-50 mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-2 flex-1 max-h-[70vh] h-[70vh]">
              <Image src={slide.image} alt="Hero Student" className="top-0 left-0 absolute w-full h-full opacity-40 grayscale object-cover" />
              <div className="relative flex flex-col gap-2 p-5">
                <h2 data-aos-duration="1000" data-aos-delay={`${i+1}00`} data-aos={i % 2 === 0 ? 'zoom-in-right' : 'zoom-in-down'} className="text-2xl md:text-4xl text-left text-white bg-primary bg-clip-text font-bold capitalize py-2">{slide.title}</h2>
                <p data-aos-duration="1000" data-aos-delay={`${i+1}00`} data-aos={i % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'} className="text-gray-50 text-left text-sm md:text-lg font-medium leading-loose pr-2 pb-2">{slide.text}</p>
                <Link data-aos-duration="1000" data-aos-delay={`${i+1}00`} data-aos={i % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'} href={slide.link} className="text-sm text-primary font-medium w-max rounded-[2rem] mt-2 py-2 px-4 sm:px-6 bg-white shadow-sky-200">{slide.tag}</Link>
              </div>
              <div className="relative hidden md:flex flex-col h-[70vh] py-24 md:py-4 items-center justify-center">
                <Image src={slide.image} alt="Hero Student" className="h-120 w-120 rounded-t-r-full rounded-t-r-xl md:absolute md:h-full md:w-full object-cover" />
              </div>
            </aside>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
