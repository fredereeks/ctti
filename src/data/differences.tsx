import { FaGraduationCap, FaBrain, FaBookReader, FaArchway } from 'react-icons/fa/index'

export const differences: DifferencesProps[] = [
    {
        id: 234,
        tag: 'experienced',
        icon: <FaBrain className='text-lg md:text-xl text-white' />,
        background: "bg-gradient-to-br shadow-md shadow-purple-500 from-purple-500 to-purple-600",
        title: "Experienced and Industry-Recognized Instructors",
        text: "At CTTI, we understand that the quality of instruction is paramount to the learning process. That's why we carefully select our instructors based on their industry expertise, real-world experience, and passion for teaching. Our instructors are subject matter experts and skilled communicators who can convey complex concepts clearly and engagingly."
    },
    {
        id: 235,
        tag: 'curriculum',
        icon: <FaBookReader className='text-lg md:text-xl text-white' />,
        background: "bg-gradient-to-br shadow-md shadow-yellow-400 from-yellow-400 to-orange-400",
        title: "Cutting-edge Curriculum",
        text: "We continuously update our course offerings to ensure they align with industry trends and technologies. Our curriculum is carefully crafted to balance theory and practical application, giving our students the knowledge and skills they need to tackle real-world IT challenges. From programming languages and cybersecurity to data science and cloud computing, we offer courses catering to various interests and career aspirations."
    },
    {
        id: 236,
        tag: 'learning',
        icon: <FaGraduationCap className='text-lg md:text-xl text-white' />,
        background: "bg-gradient-to-br shadow-md shadow-primary from-primary to-primary",
        title: "Hands-on Learning",
        text: "We believe that hands-on experience is crucial for developing proficiency in IT. Our training programs emphasise practical exercises, case studies, and real-world simulations. Our state-of-the-art labs and learning environments allow students to apply their knowledge in a safe and supportive setting, fostering a deep understanding of the concepts and techniques learned in the classroom."
    },
    {
        id: 237,
        tag: 'certifications',
        icon: <FaArchway className='text-lg md:text-xl text-white' />,
        background: "bg-gradient-to-br shadow-md shadow-pink-500 from-pink-500 to-pink-600",
        title: "Industry Partnerships and Certifications",
        text: "To ensure the relevance and value of our training, we collaborate with leading IT organisations and industry experts. We have forged partnerships with renowned companies and institutions to deliver certifications and badges that validate our students' skills and enhance their employability. Our strong industry connections also enable us to provide our students with access to internships, job placement assistance, and networking opportunities."
    },
    // {
    //     tag: 238,
    //     icon: <IoMdFlashlight className='text-lg md:text-xl text-white' />,
    //     background: "bg-gradient-to-br shadow-md shadow-orange-500 from-orange-500 to-orange-600",
    //     title: "Creative Thinking",
    //     text: "Our course brings out the best in you that you never knew was even there. We guarantee to send your creativity and problem-solving skills nuclear!"
    // },
]