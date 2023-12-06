import React from 'react'

function PostSkeleton() {
  return (
    <aside className="group max-w-[20rem] overflow-hidden flex flex-col gap-3 bg-white shadow-md hover:shadow-lg rounded-md">
    <div className="h-[200px] bg-gray-400 rounded-none group-hover:rounded-md"></div>
        <div className="p-3 pb-5 flex flex-col gap-2">
            <div className="p-1 mb-2 bg-gray-300 rounded-[2rem]"></div>
            <div className="flex flex-col gap-3">
                <p className="bg-slate-300 py-1 rounded-[2rem]"></p>
                <p className="bg-slate-300 py-1 rounded-[2rem]"></p>
                <p className="bg-slate-300 py-1 rounded-[2rem]"></p>
                <p className="bg-slate-300 py-1 rounded-[2rem] max-w-[80%]"></p>
            </div>
            <button className="bg-gradient-to-r from-slate-400 to-slate-300 rounded-md py-4 my-3 w-[40%]"></button>
        </div>
    </aside>
  )
}

export default PostSkeleton