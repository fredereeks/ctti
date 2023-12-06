// import React, {useRef, useState} from 'react'
import React from 'react'
import moment from 'moment'
// import { Button } from './Button'
// import axios from 'axios';

function CommentCard({_id, fullname, date, text, replies}: CommCardProps) {
    // const replyRef = useRef(null)
    // const [error, setError] = useState(undefined)
    // const [inputs, setInputs] = useState({
    //     fullname: "",
    //     email: "",
    //     text: "",
    // })

    // const handleChange = e => {
    //     setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     try{
    //         const formData = new FormData(replyRef.current)
    //         const res = await axios.post(`http://localhost:4119/api/reply/create/${_id}`, formData);
    //         console.log({data: res.data})
    //     }catch(err){
    //         if(err.response.data){
    //             const {message} = err.response.data
    //             setError(message)
    //         }
    //     }
    // }

  return (
    <aside className="flex flex-col">
        <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <div className="h-8 w-8 rounded-full bg-slate-300"></div>
                <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-slate-600">{fullname}</h4>
                    <div className="text-xs text-slate-400 font-extralight">{moment(date).fromNow()}</div>
                </div>
            </div>
            <p className="text-xs leading-loose text-slate-500 p-2">{text}</p>
        </div>
        <div className="flex flex-col gap-1">
            {/* <label htmlFor={`reply-${_id}`} className="w-max cursor-pointer py-2 px-4 text-xs md:text-sm text-slate-600 bg-slate-300 rounded-md">Reply</label>
            <input type="checkbox" className={`hidden peer/reply_${_id}`} id={`reply-${_id}`} />
            <div className={`peer-checked/reply_${_id}:flex hidden flex-col gap-2 py-5`}>
                {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                <form onSubmit={handleSubmit} ref={replyRef} className="flex-col gap-1 max-w-[35rem]">
                    <input type="hidden" name="date" value={moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")} />
                    <textarea name="text" placeholder="Write your reply here..." value={inputs.text} onChange={handleChange} className='outline-none w-full placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4' cols="30" required rows="6"></textarea> 
                    <div className="flex w-full flex-col mt-3 gap-1 md:flex-row md:gap-2">
                        <div className="w-full">
                            <input type="text" required className="outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4 w-full" placeholder={'Enter Full Name*'} onChange={handleChange} value={inputs.fullname} name={'fullname'}/>
                        </div>
                        <div className="w-full">
                            <input type="text" required className="outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border border-zinc-200 rounded-[.25rem] py-2 px-4 w-full" placeholder={'Enter Email*'} onChange={handleChange} value={inputs.email} name={'email'}/>
                        </div>
                    </div>
                    <Button styles={'bg-slate-700 mt-3 px-4 text-white'} text={'Reply'} key={Math.random()+Date.now()} />
                </form>
            </div>
            {
                replies.length > 0 ? replies.map(reply => (<>
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                        <div className="h-8 w-8 rounded-full bg-slate-300"></div>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-semibold text-slate-600">{reply.fullname}</h4>
                            <div className="text-xs text-slate-400 font-extralight">{moment(reply.date).fromNow()}</div>
                        </div>
                    </div>
                    <p className="text-xs leading-loose text-slate-500 p-2">{reply.text}</p>
                </div>
                </>)) : ""
            } */}
            
        </div>
    </aside>
  )
}

export default CommentCard