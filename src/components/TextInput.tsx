"use client"

import React from 'react'

export const TextInput = ({ holder, name, label, onChange, required, styles, type, value }: TextInputProps) => {
  // console.log({holder, name, label, onChange, required, styles, type, value})
  holder = holder ? holder : '';
  name = name ? name : '';
  label = label ? label : '';
  styles = styles ? styles : '';
  type = type ? type : 'text';
  value = value ? value : '';

  return (
    <div>
      {label !== "" ? <label htmlFor={name} className='text-sm text-bold text-gray-300' >{label}</label> : ""}
      {required ?
        <input required type={type} id={name} name={name} onChange={onChange} className={`outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4 ${styles}`} value={value} placeholder={holder} /> :
        <input type={type} id={name} name={name} onChange={onChange} className={`outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4 ${styles}`} value={value} placeholder={holder} />
      }
    </div>
  )
}
