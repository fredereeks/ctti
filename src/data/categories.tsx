import { StaticImageData } from 'next/image';
import {FaBriefcase, FaBuilding, FaCloudMeatball,  FaMicrosoft, FaNetworkWired, FaPalette, FaDatabase, FaProjectDiagram} from 'react-icons/fa' 
import {IoIosTrendingUp, IoIosCode, IoIosLaptop, } from 'react-icons/io' 

type CoursesProps = {
    id: string;
    image: StaticImageData;
    category: string;
    title: string;
    users: number;
    rating: number;
    description: string;
    duration: string;
    featured: boolean;
    requisite: string[];
    contents: string[];
}
export const categories: CategoryProps[] = [
    {
        id: 3894,
        title: "Programming and Development",
        icon: <IoIosCode className='text-2xl text-primary group-hover:text-white md:text-3xl'/>,
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
        id: 3844,
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
        id: 3828,
        title: "Business Applications",
        icon: <FaMicrosoft className='text-2xl text-amber-500 group-hover:text-white md:text-3xl'/>,
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
        id: 3895,
        title: "Cloud Computing and Virtualization",
        icon: <FaCloudMeatball className='text-2xl text-purple-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-purple-100 group-hover:bg-purple-500",
        courses: [
            "Introduction to Cloud Computing",
            "Microsoft Azure ",
            "Amazon Web Services (AWS)",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: 3134,
        title: "Data Science and Analytics",
        icon: <IoIosTrendingUp className='text-2xl text-orange-500 group-hover:text-white md:text-3xl'/>,
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
        id: 3224,
        title: "Project Management",
        icon: <FaProjectDiagram className='text-2xl text-pink-500 group-hover:text-white md:text-3xl'/>,
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
        id: 3094,
        title: "Database Administration",
        icon: <FaDatabase className='text-2xl text-blue-500 group-hover:text-white md:text-3xl'/>,
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
        id: 3877,
        title: "IT Service Management",
        icon: <IoIosLaptop className='text-2xl text-teal-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-teal-100 group-hover:bg-teal-500",
        courses: [
            "ITIL Foundation (Basic)",
            "IT Service Management Implementation (Intermediate)",
            "IT Service Management Leadership (Advanced)",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
    {
        id: 3749,
        title: "Business Analysis",
        icon: <FaBriefcase className='text-2xl text-fuchsia-500 group-hover:text-white md:text-3xl'/>,
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
        id: 3823,
        title: "Leadership",
        icon: <FaBuilding className='text-2xl text-red-500 group-hover:text-white md:text-3xl'/>,
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
        id: 3890,
        title: "Design",
        icon: <FaPalette className='text-2xl text-cyan-500 group-hover:text-white md:text-3xl'/>,
        background: "bg-cyan-100 group-hover:bg-cyan-500",
        courses: [
            "Graphics Design",
            "UI/UX Design",
        ],
        delivery: "Classroom, Virtual, Hybrid",
    },
]