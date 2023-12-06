import React from 'react'

export const Button = ({bg, color, styles, text}: BtnProps) => {
    bg = bg ? bg : 'bg-teal-800';
    color = color ? color : 'text-white';
    styles = styles ? styles : '';
     
    return (
    <button style={{background: bg, color}} className={`cursor-pointer rounded-[.35rem] text-sm sm:text-md py-2 px-2 min-w-max grid place-items-center ${styles}`}>{text}</button>
  )
}
