import { StaticImageData } from 'next/image';
import {
    // ctti_msword,
    ctti_coder,
    // ctti_personal_session,
    ctti_slide4,
    ctti_slide2,
    // ctti_home_traing,
    ctti_itil_foundation,
    ctti_biz_leadership,
    ctti_personal_session,
    niit_swift_student,
    ctti_business,
    ctti_biz_app,
    ctti_female_partners,
    ctti_datascience,
} from '../assets/images'

type SlideProps = {
    id: number;
    title: string;
    text: string;
    link: string;
    tag: string;
    image: StaticImageData;
}

export const slides: SlideProps[]  = [
    {   id: 121,
        title: "Empower Your Future with World-Class IT Training",
        text: "Dive into the digital age with CTTI's top-tier IT courses. Experience unparalleled learning that bridges theory and practical application, setting you on the path to success.",
        link: "/about", 
        tag: "Get Started",
        image: ctti_business,
    },
    {   id: 122,
        title: "Learn Today's Skills for Tomorrow's Tech Innovations",
        text: "Discover our most sought-after program - Cybersecurity Expertise. Stay ahead of the curve in an ever-evolving tech landscape and secure your place in the world of IT.",
        link: "/courses", 
        tag: "Get Started",
        image: ctti_datascience,
    },
    {   id: 123,
        title: "Flexible Learning, Endless Opportunities",
        text: "Embrace the power of choice with our Physical and Blended Learning options. Tailor your education to fit your lifestyle and open doors to global IT opportunities.",
        link: "/courses", 
        tag: "Enroll Now",
        image: ctti_biz_leadership                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ,
    },
    {   id: 124,
        title: "From Learning to Earning: Your IT Career Awaits!",
        text: "With CTTI, the journey from learning to professional growth is seamless. Unlock a world of industry opportunities and thrive in your dream IT career post-training.",
        link: "/courses", 
        tag: "Learn Now",
        image: ctti_personal_session,
    },
]