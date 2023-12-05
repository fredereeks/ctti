import { FaAddressCard, FaBalanceScaleRight, FaHandHoldingHeart, FaNetworkWired, FaPalette, FaPaperPlane } from "react-icons/fa/index";

export const trainings: TrainingCardProps[] = [
    {
        id: "897091", 
        title: "Customised Training Programs",
        background: "bg-orange-500",
        text: "We work closely with your organisation to understand your unique training requirements. Our expert trainers will tailor the curriculum to your goals, industry challenges, and technology landscape. This ensures that your employees receive training that is directly relevant to their roles and contributes to the success of your organisation.",
        icon: <FaPalette className="text-[2rem] md:text-[2.5rem] text-orange-500 group-hover:bg-orange-500 bg-white p-2 rounded-md w-[4rem] h-[4rem] my-2 group-hover:text-white"/>
    },
    {
        id: "897092", 
        title: "Industry-Experienced Instructors",
        background: "bg-lime-500",
        text: "Our trainers are subject matter experts and possess extensive industry experience. They bring practical insights and real-world examples to the training sessions, enabling your employees to learn from professionals who have faced similar challenges in the field. This enhances the learning experience and promotes the application of knowledge in real-world scenarios.",
        icon: <FaPaperPlane className="text-[2rem] md:text-[2.5rem] text-lime-500 group-hover:bg-lime-500 bg-white p-2 rounded-md w-[4rem] h-[4rem] my-2 group-hover:text-white"/>
    },
    {
        id: "897093", 
        title: "Comprehensive Course Offerings",
        background: "bg-blue-500",
        text: "CTTI offers a wide range of courses covering various domains of Information Technology. Whether your organisation requires training in programming, cybersecurity, project management, cloud computing, or any other IT discipline, we have the expertise to deliver high-quality training in those areas. Our comprehensive course offerings ensure you find the right training program to meet your organisation's needs.",
        icon: <FaAddressCard className="text-[2rem] md:text-[2.5rem] text-blue-500 group-hover:bg-blue-500 bg-white p-2 rounded-md w-[4rem] h-[4rem] my-2 group-hover:text-white"/>
    },
    {
        id: "897095", 
        title: "Flexible Delivery Options",
        background: "bg-emerald-500",
        text: "We understand the importance of flexibility in training delivery. Whether you prefer classroom sessions, virtual training, or a hybrid approach, we can accommodate your preferences. Our delivery options are designed to ensure that your employees can access training conveniently, whether they are located on-site or remotely.",
        icon: <FaBalanceScaleRight className="text-[2rem] md:text-[2.5rem] text-emerald-500 group-hover:bg-emerald-500 bg-white p-2 rounded-md w-[4rem] h-[4rem] my-2 group-hover:text-white"/>
    },
    {
        id: "897096", 
        title: "Hands-On Learning",
        background: "bg-red-500",
        text: "Our training programs emphasise hands-on learning experiences. We provide practical exercises, simulations, and case studies that allow participants to apply their knowledge and skills in a supportive environment. This practical approach fosters a more profound understanding and mastery of the subject.",
        icon: <FaHandHoldingHeart className="text-[2rem] md:text-[2.5rem] text-red-500 group-hover:bg-red-500 bg-white p-2 rounded-md w-[4rem] h-[4rem] my-2 group-hover:text-white"/>
    },
    {
        id: "897097", 
        title: "Training for Employee Retention",
        background: "bg-amber-500",
        text: "Investing in employee training benefits skill development and plays a crucial role in employee retention. You can create a culture that values continuous learning and professional advancement by providing opportunities for growth and development. Our training programs help you retain top talent by equipping them with the skills they need to thrive and progress in their careers.",
        icon: <FaNetworkWired className="text-[2rem] md:text-[2.5rem] text-amber-500 group-hover:bg-amber-500 bg-white p-2 rounded-md w-[4rem] h-[4rem] my-2 group-hover:text-white"/>
    },
]