import React from 'react'
import { randomColor } from '../utils'

type SkeletonType = {
    type: string
    total: number
}

function Skeleton({type, total}: SkeletonType) {
    const CourseCard = () => {
        <aside  className="fadeOut bg-white flex flex-col gap-2 p-3 sm:p-4 max-w-[25rem] group shad hover:shadow-2xl rounded-base transition-all duration-300">
            <div className={`relative h-[200px] w-full mb-2 rounded-md grid place-items-center`} style={{background: randomColor(.5)}}>
            </div>
            <div className="flex flex-col justify-between items-start">
                <div className="flex flex-col gap-1">
                <div className="text-[.6rem] px-4 bg-primary-100 w-[30%] text-primary-400 py-1 rounded-[2rem] my-1"></div>
                <div className="text-md md:text-lg font-bold text-slate-500 capitalize w-[90%]"></div>
                </div>
                <div className="flex gap-3 items-center pt-4 pb-2">
                <div className="flex items-center text-slate-400 gap-2 text-sm">
                    <div className="gap-2 items-center bg-green-100 h-5 w-5 rounded-md grid place-items-center"></div>
                </div>
                <div className="flex items-center text-slate-400 gap-2 text-sm">
                    <div className="gap-2 items-center bg-yellow-100 h-5 w-5 rounded-md grid place-items-center"></div>
                </div>
                <div className="flex items-center text-slate-400 gap-2 text-sm">
                    <div className="gap-2 items-center bg-pink-100 h-5 w-5 rounded-md grid place-items-center"></div> 
                </div>
                </div>
            </div>
        </aside>
    }
//   if(type === "course") return (Array(total || 3).fill(<CourseCard key={Math.random().toString()+new Date().getTime()+Math.random()}/>))
    // return <section>Skeleton</section>
}

export default Skeleton