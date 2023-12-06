'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Link from 'next/link'

import { ctti_partner_cisco, ctti_partner_microsoft, ctti_partner_oracle, ctti_partner_pmi } from '../assets/images'
import Image from 'next/image';
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

function PartnerSlide() {

  // React.useEffect(() => {
  //   let timer: null | ReturnType<typeof setInterval> = null;
  //   if(slide?.current !== null){
  //     const slideWidth = slide?.current?.firstElementChild?.getBoundingClientRect()?.width || 100;
  //     const total = slide?.current?.children.length;
  //   // slide?.current.style.width = `${100 * total}px`
  //     timer = setInterval(() => {
  //         let counter = +index.current % (total/2);
  //         if(slide?.current){ slide.current.style.transform = `translateX(-${counter * slideWidth + 16}px)` }
  //         index.current = +index.current + 1; 
  //     },3000)
  //   }
  //   return () => {
  //     clearInterval(timer!)
  //   }
  // }, [])

  return (
    <section className="partners py-5">
      <div className=" mx-auto flex flex-col gap-3 items-center justify-center py-5 px-4">
        <div className="flex-1 flex flex-col gap-1 p-5 items-center">
          <h3 className="heading capitalize">Our Strategic Partners</h3>
        </div>
        <div className="flex transition-all duration-300 w-full h-150 overflow-hidden">
          <div className="overflow-hidden transition-all duration-300 w-full flex gap-4 justify-start px-4 py-10">
            <Swiper
              // spaceBetween={50}
              slidesPerView={3}
              // fadeEffect={}
              modules={[Autoplay]}
              autoplay={true}
              loop={true}
            >
                <SwiperSlide>
                  <Link target='_blank' rel="noopener noreferrer" href="https://www.cisco.com" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 overflow-hidden rounded-lg relative grid place-items-center'>
                    <Image src={ctti_partner_cisco} alt="CTTI Cisco Partnership" className="h-auto w-full object-cover" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link target='_blank' rel="noopener noreferrer" href="https://www.microsoft.com" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 overflow-hidden rounded-lg relative grid place-items-center'>
                    <Image src={ctti_partner_microsoft} alt="CTTI Microsoft Partnership" className="h-auto w-full object-cover" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link target='_blank' rel="noopener noreferrer" href="https://www.oracle.com" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 overflow-hidden rounded-lg relative grid place-items-center'>
                    <Image src={ctti_partner_oracle} alt="CTTI Oracle Partnership" className="h-auto w-full object-cover" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link target='_blank' rel="noopener noreferrer" href="https://www.pmi.org" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 overflow-hidden rounded-lg relative grid place-items-center'>
                    <Image src={ctti_partner_pmi} alt="CTTI PMI Partnership" className="h-auto w-full object-cover" />
                  </Link>
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSlide