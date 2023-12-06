import { StaticImageData } from "next/image";
import { ctti_biz_leadership, ctti_itil_foundation, ctti_cloud, ctti_business, ctti_career, ctti_database, ctti_project_mgt, ctti_powerbi, ctti_graphics } from "../assets/images";

type SkillCardProps = {
    id: string;
    image: StaticImageData;
    title: string;
    text: string;
    direction?: boolean;
}

export const skills: SkillCardProps[] = [
    {
        id: "1230",
        image: ctti_career,
        title: "Accurate Skills Assessment",
        text: "At CTTI, we understand that accurately assessing the skills and capabilities of your workforce is crucial for achieving organisational success. That's why we offer comprehensive skills assessment services tailored to the specific needs of our corporate clients. Our expert assessments provide valuable insights into your employees' skill levels, identify areas for improvement, and guide your organisation's training and development initiatives. Discover the power of skills assessment with CTTI."
    },
    {
        id: "1231",
        image: ctti_biz_leadership,
        title: "Customised Skills Assessment",
        text: "We believe in the importance of customised assessments to accurately evaluate the skills and competencies relevant to your industry and organisational goals. Our team works closely with you to understand your requirements, design tailored assessments, and develop assessment methodologies aligning with your organisational objectives."
    },
    {
        id: "1232",
        image: ctti_cloud,
        title: "Comprehensive Assessment Methods",
        text: "CTTI employs a range of assessment methods to evaluate the skills and competencies of your employees. These may include online assessments, practical examinations, scenario-based simulations, and interviews. We utilise a combination of objective and subjective measures to provide a holistic understanding of your employees' capabilities."
    },
    {
        id: "1233",
        image: ctti_business,
        title: "Technical and Soft Skills Evaluation",
        text: "Our skills assessments cover technical and soft skills, ensuring a comprehensive evaluation of your employees' abilities. Technical skills assessments focus on specific job-related proficiencies, such as programming languages, network administration, project management, or cybersecurity. Soft skills assessments measure interpersonal skills, communication, problem-solving, leadership potential, and other critical attributes for workplace success."
    },
    {
        id: "1234",
        image: ctti_database,
        title: "Accurate Data and Insights",
        text: "CTTI's skills assessments provide accurate and reliable data and insights. We employ standardised evaluation criteria, industry best practices, and validated assessment tools to ensure the integrity and validity of our results. Our expert assessors analyse the data and provide detailed reports highlighting strengths, improvement areas, and training and development recommendations."
    },
    {
        id: "1235",
        image: ctti_graphics,
        title: "Training and Development Roadmap",
        text: "Based on the assessment results, we work collaboratively with your organisation to create a tailored training and development roadmap. Our recommendations include targeted training programs, coaching initiatives, and skill-building workshops to address identified skill gaps and promote professional growth. We guide choosing the most appropriate training solutions to maximise the impact of your learning and development investments."
    },
    {
        id: "1236",
        image: ctti_powerbi,
        title: "Enhanced Employee Performance and Engagement",
        text: "Skills assessments empower your organisation to enhance employee performance and engagement. By identifying individual strengths and areas for improvement, you can provide targeted training and development opportunities that align with your employees' career aspirations. This personalised approach fosters a culture of continuous learning and professional growth, leading to increased employee satisfaction, retention, and overall organisational success."
    },
    {
        id: "1237",
        image: ctti_project_mgt,
        title: "Confidentiality and Data Security",
        text: "CTTI understands the importance of confidentiality and data security in skills assessments. We adhere to strict data protection protocols, ensuring your employees' assessment data remains secure and confidential. You can trust that your sensitive information and assessment results will be handled with the utmost care and professionalism."
    },
    {
        id: "1238",
        image: ctti_itil_foundation,
        title: "Partner with CTTI for Accurate Skills Assessments",
        text: "Partnering with CTTI for skills assessments gives your organisation valuable insights to make informed decisions about talent development and resource allocation. By leveraging our expertise in customised assessments, you can identify skill gaps, develop targeted training programs, and cultivate a skilled workforce ready to tackle the challenges of today's competitive business landscape."
    },
]