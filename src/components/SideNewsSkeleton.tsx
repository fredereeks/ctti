import React from 'react'

function SideNewsSkeleton() {
    return (<aside className="flex h-[100px] border border-slate-100 w-full bg-white items-center gap-2 p-3 rounded-md shadow-md">
        <div className="h-full w-20 object-cover bg-gradient-to-r from-slate-400 to-slate-300 rounded-md"></div>
        <div className="flex-1 flex flex-col gap-1">
            <div className="p-1 rounded-[2rem] bg-slate-300"></div>
            <div className="p-1 rounded-[2rem] bg-slate-300 mb-2"></div>
            <button className="cursor-pointer p-3 w-[40%] bg-slate-300 rounded-md"></button>
        </div>
    </aside>)
}

export default SideNewsSkeleton