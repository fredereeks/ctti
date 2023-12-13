"use client"

import { useEffect } from 'react'
import Aos from 'aos'
import 'swiper/css';


export default function ClientLayout({children}: {children: React.ReactNode}) {
    useEffect(() => {
        Aos.init({
            duration: 8000,
            once: true
        })
    },[])
  return (
    <>{children}</>
  )
}
