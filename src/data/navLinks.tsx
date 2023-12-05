import { MdLibraryBooks, MdQuestionAnswer } from 'react-icons/md/index'
import {  IoClipboardOutline, IoMailUnreadOutline, IoNewspaperOutline, IoPeopleOutline, IoReceiptOutline } from 'react-icons/io5/index'

type NavLinkProps = {
    id: number, title: string, link: string, element: JSX.Element, icon: JSX.Element
}

export const navLinks : NavLinkProps[] = [
    {
        id: 282340,
        title: 'Dashboard',
        // background: 'bg-blue-100',
        element: <span className='border border-slate-500 bg-blue-100 text-blue-500 text-sm sm:text-base h-6 w-6 rounded-full flex justify-center items-center'><IoNewspaperOutline className='text-inherit ' /></span>,
        link: '/dashboard',
        icon: <IoNewspaperOutline className='text-inherit ' />
    },
    {
        id: 282341,
        title: 'Enquiries',
        // background: 'bg-purple-100',
        element: <span className='border border-slate-500 bg-sky-100 text-sky-500 text-sm sm:text-base h-6 w-6 rounded-full flex justify-center items-center'><IoPeopleOutline className='text-inherit ' /></span>,
        link: '/dashboard/enquiries',
        icon: <MdQuestionAnswer className='text-inherit ' />
    },
    // {
    //     id: 282347,
    //     title: 'Admins',
    //     // background: 'bg-slate-200',
    //     element: <span className='border border-slate-500 bg-slate-200 text-slate-500 text-sm sm:text-base h-6 w-6 rounded-full flex justify-center items-center'><IoMailUnreadOutline className='text-inherit ' /></span>,
    //     link: '/dashboard/admins',
    //     icon: <IoPeopleOutline className='text-inherit ' />
    // },
    {
        id: 282348,
        title: 'Courses',
        // background: 'bg-slate-200',
        element: <span className='border border-slate-500 bg-slate-200 text-slate-500 text-sm sm:text-base h-6 w-6 rounded-full flex justify-center items-center'><MdLibraryBooks className='text-inherit ' /></span>,
        link: '/dashboard/courses',
        icon: <MdLibraryBooks className='text-inherit ' />
    },
    {
        id: 282344,
        title: 'Messages',
        // background: 'bg-sky-100',
        element: <span className='border border-sky-500 bg-sky-100 text-sky-500 text-sm sm:text-base h-6 w-6 rounded-full flex justify-center items-center'><IoReceiptOutline className='text-inherit ' /></span>,
        link: '/dashboard/messages',
        icon: <IoMailUnreadOutline className='text-inherit ' />
        // icon: <IoReceiptOutline className='text-inherit ' />
    },
    // {
    //     id: 282346,
    //     title: 'Loans',
    //     // background: 'bg-slate-200',
    //     element: <span className='border border-slate-500 bg-slate-200 text-slate-500 text-sm sm:text-base h-6 w-6 rounded-full flex justify-center items-center'><IoMailUnreadOutline className='text-inherit ' /></span>,
    //     link: '/dashboard/loans',
    //     icon: <FaSackDollar className='text-inherit ' />
    // },
    {
        id: 282349,
        title: 'Profile',
        // background: 'bg-indigo-200',
        element: <span className='border border-slate-500 bg-indigo-200 text-indigo-500 text-sm sm:text-base h-6 w-6 rounded-full flex justify-center items-center'><IoClipboardOutline className='text-inherit ' /></span>,
        link: '/dashboard/profile',
        icon: <IoClipboardOutline className='text-inherit ' />
    },
]