"use client"

import React from 'react'

export default function Loading() {
  return (
    <section className="min-h-[60vh] w-full flex flex-col justify-center items-center gap-3">
    <div className="relative h-3 w-3 rounded-full transition-all duration-75 animation-bounce delay-0 bg-blue-400 before:absolute before:-left-[200%] before:bg-cyan-600 before:rounded-full before:animate-bounce before:delay-75 before:h-full before:w-full before:transition-all before:duration-75 after:absolute after:left-[200%] after:bg-primary after:rounded-full after:animate-bounce after:delay-100 after:h-full after:w-full after:transition-all after:duration-75"></div>
  </section>
  )
}
