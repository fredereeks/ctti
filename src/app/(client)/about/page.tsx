import { Metadata } from 'next'
import { exam_groupread, exam_announcement } from '@/assets/images'
import { differences } from '@/data'
import { BreadCrumb, DiffCard } from '@/components';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'CTTI e-learning Centre :: About',
    description: 'About Us at CTTI. We are an e-Learning Course Centre is an Online Platform devoted to bringing quality, standard and professional courses to your need wherever and whenever you need it',
}

export default async function page() {
    return (
        <main className="bg-slate-50 pb-20">
            <BreadCrumb page={"About"} />
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-left" className="container pt-10 px-4 mx-auto flex flex-col">
                <div className="flex flex-col gap-3 p-5 items-center md:items-start">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary capitalize">About Us at CTTI</h3>
                    <p className="thin-text leading-loose text-justify py-2 pr-2">At CTTI, we are dedicated to empowering individuals and organisations with the knowledge and skills needed to excel in the rapidly evolving world of Information Technology. As a leading IT training organisation, we offer a comprehensive range of cutting-edge programs designed to meet the diverse needs of our students and clients.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <aside data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className={`py-2 flex flex-col gap-1 md:gap-5 md:items-center md:flex-row`}>
                        <div className="relative  px-4 md:p-2 mx-auto h-[250px] md:h-full w-[250px] md:flex-1 flex-shrink-0 bg-white rounded-md">
                            <Image src={exam_groupread} alt="Our Mission" className="h-full w-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-2 px-4 pb-2 md:p-4 flex-1 md:flex-2">
                            <h4 className={`text-lg md:text-2xl font-bold text-cyan-500 uppercase`}>Our Mission</h4>
                            <p className="thin-text leading-loose text-justify py-2 pr-2">CTTI&apos;s mission is to provide top-quality IT training that equips individuals with the expertise to thrive in today&apos;s digital landscape. We strive to bridge the gap between theoretical knowledge and practical application, ensuring our students gain the confidence and competence necessary to succeed in their chosen IT career paths.</p>
                        </div>
                    </aside>
                    <aside data-aos-duration="1000" data-aos-delay="500" data-aos="fade-down" className={`py-2 flex flex-col gap-1 md:gap-5 md:items-center md:flex-row-reverse`}>
                        <div className="relative  px-4 md:p-2 mx-auto h-[250px] md:h-full w-[250px] md:flex-1 flex-shrink-0 bg-white rounded-md">
                            <Image src={exam_announcement} alt="Our Approach" className="h-full w-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-2 px-4 pb-2 md:p-4 flex-1 md:flex-2">
                            <h4 className={`text-lg md:text-2xl font-bold text-primary uppercase`}>Our Approach</h4>
                            <p className="thin-text leading-loose text-justify py-2 pr-2">We believe a holistic approach to IT training is crucial for long-term success. We offer various training options to suit different learning preferences and schedules. Whether you prefer traditional classroom instruction, virtual training from the comfort of your home, or a blended learning experience that combines the best of both worlds, we have a solution for you.</p>
                        </div>
                    </aside>
                </div>
                <section className="difference py-20 sm:px-4 bg-[#f8f8fa90]">
                    <aside className="col-span-2 flex flex-col justify-center gap-2 md:max-w-[85%] md:mx-auto p-4">
                        <h3 data-aos-duration="1000" data-aos-delay="500" data-aos="zoom-in-left" className="text-2xl md:text-4xl font-bold text-primary md:text-center">Why are we different from other?</h3>
                        <p data-aos-duration="1000" data-aos-delay="500" data-aos="zoom-in-right" className="leading-loose text-justify normal-text py-2 pr-2">At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys. Whether you are a student looking to kick-start your IT career or an organisation seeking to upskill your workforce, we invite you to join us and embark on a transformative learning experience. Discover the power of knowledge with CTTI - your trusted IT training and education partner.</p>
                    </aside>
                    {/* <div ref={diffRef} className="container justify-center items-stretch grid grid-cols-1 md:grid-cols-1 mx-auto gap-x-2 gap-y-4 sm:gap-y-8 sm:gap-x-6 container py-10 px-4"> */}
                    <div className="container justify-center items-stretch grid grid-cols-1 md:grid-cols-1 mx-auto gap-x-2 gap-y-4 sm:gap-y-8 sm:gap-x-6 py-10 px-4">
                        {
                            differences.map((difference) => <DiffCard key={difference.id} full={true} {...difference} />)
                        }
                    </div>
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row gap-3 p-5 ">
                            <p data-aos-duration="1000" data-aos-delay="500" data-aos="fade-down" className="normal-text leading-loose text-justify py-2 pr-2">Through our strategic partnerships with Microsoft, Cisco, Oracle, and PMI, CTTI can provide you with industry-recognized training that meets the highest standards of quality and excellence. These partnerships enable us to stay at the forefront of technological advancements and deliver training that is directly aligned with the needs of the IT industry.</p>
                            <p data-aos-duration="1000" data-aos-delay="500" data-aos="fade-right" className="normal-text leading-loose text-justify py-2 pr-2">By choosing CTTI, you gain access to our experienced instructors and comprehensive curriculum and the expertise and resources of our esteemed partners. We are committed to empowering you with the skills and certifications to propel your IT career forward.</p>
                        </div>
                        <p data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up-left" className="normal-text leading-loose text-justify py-2 px-5">Partner with CTTI and embark on a learning journey that will unlock endless opportunities in the world of technology.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
