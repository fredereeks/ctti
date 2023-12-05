// import { blog_slider1, blog_slider2, blog_slider3, masonry2, masonry4, masonry6, masonry8 } from '../assets/images'
import {FaBriefcase, FaBuilding, FaCloudMeatball,  FaDatabase,  FaMicrosoft, FaNetworkWired, FaPalette, FaProjectDiagram} from 'react-icons/fa/index' 
import {IoIosAnalytics, IoIosCode, IoIosCodeDownload} from 'react-icons/io/index' 

export const catalogues: CatalogueProps[] = [
    {
        id: "87353894",
        title: "Programming and Development",
        icon: <IoIosCode className='text-2xl text-primary group-hover:text-white md:text-3xl' />,
        background: "bg-sky-100 group-hover:bg-primary",
        courses: [
            "Java Programming- Full stack",
            "Web Development- Full Stack",
            "Web design – Front end",
            "Python programming",
            "Mobile Application development",
            "Dev ops",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },

    {
        id: "87353844",
        title: "Networking and Cybersecurity",
        icon: <FaNetworkWired className='text-2xl text-primary-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-primary-100 group-hover:bg-primary-500",
        courses: [
            "Network Fundamentals ",
            "IT Essentials (Computer repairs and Maintenance)",
            "Microsoft Certified Network Associate",
            "Cisco Certified Network Associate (CCNA) ",
            "Ethical Hacking and Penetration Testing ",
            "Certified Information Systems Security Professional (CISSP) ",
            "Cyber Operations",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: "87353828",
        icon: <FaMicrosoft className='text-2xl text-amber-500 group-hover:text-white md:text-3xl'/>,
        title: "Business Applications",
        background: "bg-amber-100 group-hover:bg-amber-500",
        courses: [
            "Microsoft office",
            "Management information systems",
            "Basic & Advanced Excel",
            "Microsoft SharePoint",
            "Digital marketing ",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },

    {
        id: "87353895",
        icon: <FaCloudMeatball className='text-2xl text-purple-500 group-hover:text-white md:text-3xl'/>,
        title: "Cloud Computing and Virtualization",
        background: "bg-purple-100 group-hover:bg-purple-500",
        courses: [
            "Introduction to Cloud Computing",
            "Microsoft Azure ",
            "Amazon Web Services (AWS)",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: "87353134",
        icon: <IoIosAnalytics className='text-2xl text-orange-500 group-hover:text-white md:text-3xl'/>,
        title: "Data Science and Analytics",
        background: "bg-orange-100 group-hover:bg-orange-500",
        courses: [
            "Data Analysis with Python (Basic)",
            "Machine Learning Fundamentals (Intermediate)",
            "Big Data Analytics and Hadoop (Intermediate)",
            "Data Engineering and ETL (Advanced)",
            "Power BI",
            "Tableau",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },

    {
        id: "87353224",
        icon: <FaProjectDiagram className='text-2xl text-pink-500 group-hover:text-white md:text-3xl'/>,
        title: "Project Management",
        background: "bg-pink-100 group-hover:bg-pink-500",
        courses: [
            "Project Management Fundamentals (Basic)",
            "Project Management Professional (PMP) Exam Prep",
            "Agile Scrum",
            "Program Management Professional",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: "87353894",
        icon: <FaDatabase className='text-2xl text-blue-500 group-hover:text-white md:text-3xl'/>,
        title: "Database Administration",
        background: "bg-blue-100 group-hover:bg-blue-500",
        courses: [
            "Introduction to SQL and Database Design (Basic)",
            "Oracle Database Administration ",
            "Microsoft SQL Server Administration",
            "Big Data and NoSQL Databases",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: "87353877",
        icon: <IoIosCodeDownload className='text-2xl text-teal-500 group-hover:text-white md:text-3xl'/>,
        title: "IT Service Management",
        background: "bg-teal-100 group-hover:bg-teal-500",
        courses: [
            "ITIL Foundation (Basic)",
            "IT Service Management Implementation (Intermediate)",
            "IT Service Management Leadership (Advanced)",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: "87353894",
        icon: <FaBriefcase className='text-2xl text-fuchsia-500 group-hover:text-white md:text-3xl'/>,
        title: "Business Analysis",
        background: "bg-fuchsia-100 group-hover:bg-fuchsia-500",
        courses: [
            "Introduction to Business Analysis (Basic)",
            "Business Analysis Planning and Monitoring (Intermediate)",
            "Requirements Elicitation and Analysis (Intermediate)",
            "Agile Business Analysis (Advanced)",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: "87353823",
        icon: <FaBuilding className='text-2xl text-red-500 group-hover:text-white md:text-3xl'/>,
        title: "Leadership",
        background: "bg-red-100 group-hover:bg-red-500",
        courses: [
            "Business Skills",
            "Business Leadership ",
            "Soft Skills",
            "Business Start-up",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: "87353894",
        icon: <FaPalette className='text-2xl text-cyan-500 group-hover:text-white md:text-3xl'/>,
        title: "Design",
        background: "bg-cyan-100 group-hover:bg-cyan-500",
        courses: [
            "Graphics Design",
            "UI/UX Design",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
]