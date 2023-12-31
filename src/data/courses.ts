// import { blog_slider1, blog_slider2, category_2, ctti_agile_biz, ctti_analytics, ctti_biz_app, ctti_biz_leadership, ctti_biz_skill, ctti_biz_start, ctti_business, ctti_ccna, ctti_cloud, ctti_cyber, ctti_database, ctti_datascience, ctti_dev_ops, ctti_digital_marketing, ctti_excel, ctti_graphics, ctti_graphics_design, ctti_it_essentials, ctti_itil_foundation, ctti_machine_learning, ctti_ms_chart, ctti_powerbi, ctti_project_management, ctti_project_mgt, ctti_project_pro, ctti_python, ctti_sharepoint, ctti_web_development, exam_announcement, exam_courses, exam_groupread, exam_slider, exam_study, exam_template, masonry2, masonry4, masonry6, masonry8, mobile_apps, rocket } from '../assets/images'
import { StaticImageData } from 'next/image';
import { blog_slider1, blog_slider2, category_2, ctti_agile_biz, ctti_analytics, ctti_biz_app, ctti_biz_leadership, ctti_biz_skill, ctti_biz_start, ctti_business, ctti_ccna, ctti_cloud, ctti_cyber, ctti_cybersecurity, ctti_database, ctti_datascience, ctti_dev_ops, ctti_digital_marketing, ctti_excel, ctti_graphics, ctti_graphics_design, ctti_it_essentials, ctti_itil_foundation, ctti_machine_learning, ctti_ms_chart, ctti_msword, ctti_powerbi, ctti_project_management, ctti_project_mgt, ctti_project_pro, ctti_python, ctti_sharepoint, ctti_web_development, exam_announcement, exam_courses,  exam_slider, exam_study, masonry2, masonry8, mobile_apps, } from '../assets/images'

type CoursesProps = {
    id: string
    image: StaticImageData
    category: string
    title: string
    users: number
    rating: number
    description: string
    duration: string
    featured: boolean
    requisite: string[]
    contents: string[]
}

export const courses: CoursesProps[] = [
    {
        id: '629112',
        image: blog_slider2,
        category: "Networking and Cybersecurity",
        title: "CISCO Cyber Security Operations",
        users: 30,
        rating: 4.3,
        description: "",
        // price: 255000,
        duration: "6Months",
        featured: true,
        requisite: [
            "Install, configure and troubleshoot computers",
            "Identify common security threats like phishing and spoofing",
            "Problem-solving skills using both real equipments and Cisco Packet Tracer"
        ],
        contents: [
            "Network concepts",
            "Security concepts",
            "Security monitoring",
            "Host-based analysis",
            "Network Intrusion analysis",
            "Attack methods",
            "Security policies and procedures"
        ],
    },
    {
        id: '682397',
        image: ctti_biz_app,
        category: "Data Science and Analytics",
        title: "Data Analysis with Python (Basic)",
        users: 146,
        rating: 4.6,
        description: "",
        // price: 264000,
        duration: "6Months",
        featured: true,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699210',
        image: mobile_apps,
        category: "Programming and Development",
        title: "Java Programming - Full stack",
        users: 51,
        rating: 4.1,
        description: "",
        // price: 250000,
        duration: "6Months",
        featured: false,
        requisite: [
                "Basic Computer Appreciation",
                "Quality Laptop",
                "Unwavering Dedication to the Cause"
        ],
        contents: [
            "RDBMS Essentials & T-SQL Programming",
            "HTML5 - Programming (HTML, CSS & Javascript)",
            "Developing Web Applications using Servlets & JSP",
            "Spring, JavaEE",
            "Microsoft SQL"
        ],
    },
    {
        id: '699176',
        image: ctti_web_development,
        category: "Programming and Development",
        title: "Web Development - Full Stack",
        users: 152,
        rating: 4.5,
        description: "This course delves deeper into web application development. Students will learn server-side scripting using frameworks like Node.js or Django. They will explore database integration, security considerations, and user authentication in web applications. By the end of the course, students will have the skills to build dynamic and interactive web applications.",
        // price: 270000,
        duration: "6Months",
        featured: true,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "HTML5",
            "CSS (Plain CSS, Sass, Less)",
            "Javascript",
            "jQuery",
            "React",
            "PHP & MySQL",
            "Node/MongoDB",
            "Real-world Application Project",
            "Deployment"
        ],
    },
    {
        id: '690909',
        image: masonry2,
        category: "Programming and Development",
        title: "Web Design – Front end",
        users: 76,
        rating: 4.6,
        description: "In this course, students will delve into the essentials of web development. They will learn HTML, CSS, and JavaScript and gain an understanding of front-end development frameworks. By the end of the course, students will be able to create basic web pages and understand the fundamentals of web server configuration and hosting.",
        // price: 180000,
        duration: "4Months",
        featured: true,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "HTML5",
            "CSS (Plain CSS, Sass, Less)",
            "Javascript",
            "jQuery",
            "React",
        ],
    },
    {
        id: '699109',
        image: ctti_python,
        category: "Programming and Development",
        title: "Certificate in Python",
        users: 30,
        rating: 4.3,
        description: "Students will explore the world of mobile app development in this course. They will learn about iOS and Android platforms, mobile app design principles, and user experience considerations. By the end of the course, students will be able to develop and deploy their own mobile applications",
        // price: 245000,
        duration: "3 Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction to Python",
            "Python Data Structure",
            "Object-oriented Programming in Python",
            "Graphics User Interface (GUI) Development",
            "Web Development with Python (Flask)",
        ],
    },
    {
        id: '699100',
        image: ctti_powerbi,
        category: "Programming and Development",
        title: "Diploma in Python",
        users: 57,
        rating: 4.8,
        description: "Students will explore the world of mobile app development in this course. They will learn about iOS and Android platforms, mobile app design principles, and user experience considerations. By the end of the course, students will be able to develop and deploy their own mobile applications",
        // price: 245000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction to Python",
            "Python Data Structure",
            "Object-oriented Programming in Python",
            "Graphics User Interface (GUI) Development",
            "Web Development with Python (Flask)",
            "Overview of Website Technologies (HTML, CSS, Javascript)",
            "Database Integration (SQLite/MySQL)",
            "Data Visualization",
            "Error Handling & Testing",
            "Real-world Application Project",
            "Deployment",
        ],
    },
    {
        id: '693462',
        image: blog_slider1,
        category: "Programming and Development",
        title: "Mobile Application Development",
        users: 30,
        rating: 4.3,
        description: "Students will explore the world of mobile app development in this course. They will learn about iOS and Android platforms, mobile app design principles, and user experience considerations. By the end of the course, students will be able to develop and deploy their own mobile applications.",
        // price: 189000,
        duration: "3Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699154',
        image: ctti_dev_ops,
        category: "Programming and Development",
        title: "Dev Ops",
        users: 30,
        rating: 4.3,
        description: "This course introduces students to software engineering principles. They will learn about software requirements engineering, documentation, and software architecture. Students will also gain exposure to various software design patterns and project management techniques, equipping them with the skills to oversee successful software projects.",
        // price: 192000,
        duration: "3Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '692809',
        image: ctti_powerbi,
        category: "Networking and Cybersecurity",
        title: "Network Fundamentals",
        users: 30,
        rating: 4.3,
        description: "",
        // price: 210000,
        duration: "2Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '609192',
        image: ctti_it_essentials,
        category: "Networking and Cybersecurity",
        title: "IT Essentials (Computer Repairs and Maintenance)",
        users: 40,
        rating: 4.3,
        description: "",
        // price: 160000,
        duration: "2Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Application Installation on PC",
            "Configuring Windows Applications",
            "Managing Windows Applications",
            "TroubleShooting Windows Applications",
        ],
    },
    {
        id: '6983492',
        image: ctti_cybersecurity,
        category: "Networking and Cybersecurity",
        title: "Microsoft Certified Network Associate",
        users: 30,
        rating: 4.3,
        description: "",
        // price: 235000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '6992342',
        image: ctti_ccna,
        category: "Networking and Cybersecurity",
        title: "Cisco Certified Network Associate (CCNA) ",
        users: 30,
        rating: 4.3,
        description: "",
        // price: 195000,
        duration: "5Months",
        featured: true,
        requisite: [
            "Install, configure and troubleshoot computers",
            "Identify common security threats like phishing and spoofing",
            "Problem-solving skills using both real equipments and Cisco Packet Tracer"
        ],
        contents: [
            "Introduction to Networks",
            "Switching, routing and wireless essentials",
            "Enterprise networking",
            "Security and Automation"
        ],
    },
    {
        id: '6972392',
        image: ctti_cyber,
        category: "Networking and Cybersecurity",
        title: "Ethical Hacking and Penetration Testing ",
        users: 30,
        rating: 4.3,
        description: "",
        // price: 285000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '690122',
        image: masonry8,
        category: "Networking and Cybersecurity",
        title: "Certified Information Systems Security Professional (CISSP) ",
        users: 30,
        rating: 4.3,
        description: "",
        // price: 265000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Security and Risk Management",
            "Asset Security",
            "Security Architecture & Engineering",
            "Communication & Network Security",
            "Identity & Access Management",
            "Security Assessment & Testing",
            "Security Operations",
            "Software Development Security",
            "Security & Compliance",
            "Cryptography"
        ],
    },
    {
        id: '693123',
        image: ctti_ms_chart,
        category: "Business Applications",
        title: "Microsoft Suite",
        users: 89,
        rating: 4.1,
        description: "",
        // price: 770000,
        duration: "2Months",
        featured: true,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "IT Essentials",
            "Microsoft Word",
            "Microsoft Excel",
            "Microsoft PowerPoint",
            "Microsoft Outlook",
        ],
    },
    {
        id: '693823',
        image: ctti_project_management,
        category: "Business Applications",
        title: "Management Information Systems (MIS)",
        users: 58,
        rating: 4.2,
        description: "",
        // price: 770000,
        duration: "5Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Working Smart with Microsoft Office & the Internet",
            "Advance Excel Tools & Techniques for Analysing Data",
            "RDBMS Essentials & T-SQL Programming",
            "Professional Skills-I"
        ],
    },
    {
        id: '696631',
        image: ctti_excel,
        category: "Business Applications",
        title: "Basic & Advanced Excel",
        users: 65,
        rating: 4.0,
        description: "",
        // price: 770000,
        duration: "2Months",
        featured: true,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699319',
        image: ctti_sharepoint,
        category: "Business Applications",
        title: "Microsoft SharePoint",
        users: 78,
        rating: 4.6,
        description: "",
        // price: 770000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699398',
        image: ctti_digital_marketing,
        category: "Business Applications",
        title: "Digital marketing ",
        users: 78,
        rating: 4.1,
        description: "",
        // price: 770000,
        duration: "2Months",
        featured: true,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '694723',
        image: ctti_cloud,
        category: "Cloud Computing and Virtualization",
        title: "Introduction to Cloud Computing",
        users: 52,
        rating: 4.5,
        description: "",
        // price: 200000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699235',
        image: ctti_msword,
        category: "Cloud Computing and Virtualization",
        title: "Microsoft Azure ",
        users: 71,
        rating: 4.0,
        description: "",
        // price: 250000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '6901695',
        image: exam_slider,
        category: "Cloud Computing and Virtualization",
        title: "Amazon Web Services (AWS)",
        users: 55,
        rating: 4.2,
        description: "",
        // price: 210000,
        duration: "2Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '690927',
        image: ctti_machine_learning,
        category: "Data Science and Analytics",
        title: "Machine Learning Fundamentals (Intermediate)",
        users: 16,
        rating: 4.3,
        description: "",
        // price: 250000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699297',
        image: ctti_analytics,
        category: "Data Science and Analytics",
        title: "Big Data Analytics and Hadoop (Intermediate)",
        users: 141,
        rating: 4.3,
        description: "",
        // price: 140000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699797',
        image: ctti_datascience,
        category: "Data Science and Analytics",
        title: "Data Engineering and ETL (Advanced)",
        users: 105,
        rating: 4.1,
        description: "",
        // price: 260000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '690217',
        image: ctti_powerbi,
        category: "Data Science and Analytics",
        title: "Power BI",
        users: 121,
        rating: 4.2,
        description: "",
        // price: 160000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699897',
        image: ctti_ms_chart,
        category: "Data Science and Analytics",
        title: "Tableau",
        users: 116,
        rating: 4.3,
        description: "",
        // price: 125000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '690777',
        image: ctti_project_mgt,
        category: "Project Management",
        title: "Project Management Fundamentals (Basic)",
        users: 78,
        rating: 4.2,
        description: "",
        // price: 77000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '6943094',
        image: ctti_datascience,
        category: "Project Management",
        title: "Project Management Professional (PMP) Exam Prep",
        users: 42,
        rating: 4.1,
        description: "",
        // price: 89000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '692114',
        image: ctti_agile_biz,
        category: "Project Management",
        title: "Agile Scrum",
        users: 89,
        rating: 3.8,
        description: "",
        // price: 210000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '697421',
        image: ctti_project_pro,
        category: "Project Management",
        title: "Program Management Professional",
        users: 78,
        rating: 3.9,
        description: "",
        // price: 170000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699515',
        image: ctti_database,
        category: "Database Administration",
        title: "Introduction to SQL and Database Design (Basic)",
        users: 78,
        rating: 4.1,
        description: "",
        // price: 135000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '672355',
        image: exam_announcement,
        category: "Database Administration",
        title: "Oracle Database Administration ",
        users: 78,
        rating: 4.2,
        description: "",
        // price: 215000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '627235',
        image: masonry2,
        category: "Database Administration",
        title: "Microsoft SQL Server Administration",
        users: 90,
        rating: 4.1,
        description: "",
        // price: 220000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '602325',
        image: exam_study,
        category: "Database Administration",
        title: "Big Data and NoSQL Databases",
        users: 86,
        rating: 4.2,
        description: "",
        // price: 280000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '663496',
        image: ctti_itil_foundation,
        category: "IT Service Management",
        title: "ITIL Foundation (Basic)",
        users: 60,
        rating: 4.0,
        description: "",
        // price: 180000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '692046',
        image: category_2,
        category: "IT Service Management",
        title: "IT Service Management Implementation (Intermediate)",
        users: 60,
        rating: 4.6,
        description: "",
        // price: 205000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '602356',
        image: ctti_cloud,
        category: "IT Service Management",
        title: "IT Service Management Leadership (Advanced)",
        users: 85,
        rating: 4.6,
        description: "",
        // price: 150000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '605994',
        image: ctti_biz_start,
        category: "Business Analysis",
        title: "Introduction to Business Analysis (Basic)",
        users: 59,
        rating: 4.0,
        description: "",
        // price: 120000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '690594',
        image: ctti_business,
        category: "Business Analysis",
        title: "Business Analysis Planning and Monitoring (Intermediate)",
        users: 56,
        rating: 4.2,
        description: "",
        // price: 190000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '689084',
        image: category_2,
        category: "Business Analysis",
        title: "Requirements Elicitation and Analysis (Intermediate)",
        users: 102,
        rating: 4.5,
        description: "",
        // price: 195000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '612994',
        image: exam_courses,
        category: "Business Analysis",
        title: "Agile Business Analysis (Advanced)",
        users: 52,
        rating: 4.5,
        description: "",
        // price: 210000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699365',
        image: blog_slider1,
        category: "Leadership",
        title: "Business Skills",
        users: 98,
        rating: 4.6,
        description: "",
        // price: 185000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699323',
        image: ctti_biz_leadership,
        category: "Leadership",
        title: "Business Leadership ",
        users: 121,
        rating: 4.1,
        description: "",
        // price: 147000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '699273',
        image: ctti_biz_skill,
        category: "Leadership",
        title: "Soft Skills",
        users: 78,
        rating: 4.3,
        description: "",
        // price: 205000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '602393',
        image: ctti_biz_start,
        category: "Leadership",
        title: "Business Start-up",
        users: 89,
        rating: 4.2,
        description: "",
        // price: 230000,
        duration: "6Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '624292',
        image: ctti_graphics_design,
        category: "Design",
        title: "Graphics Design",
        users: 120,
        rating: 4.1,
        description: "",
        // price: 160000,
        duration: "3Months",
        featured: false,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
    {
        id: '692134',
        image: ctti_graphics,
        category: "Design",
        title: "UI/UX Design",
        users: 100,
        rating: 4.0,
        description: "",
        // price: 145000,
        duration: "3Months",
        featured: true,
        requisite: [
            "Basic Computer Appreciation",
            "Quality Laptop",
            "Unwavering Dedication to the Cause"
        ],
        contents: [
            "Introduction",
            "Package Installation",
            "Getting Started",
        ],
    },
] 