import { BreadCrumb, CoachingCard } from '@/components'
import { category_2 } from '@/assets/images';
import { corporates, individuals } from '@/data';
import Image from 'next/image';

function CustomizedTraining() {

    return (
        <main className='flex flex-col justify-center'>
            <BreadCrumb extra={{ name: "Solutions", link: "/solutions" }} page={"Customized Training"} />
            <section className="bg-white">
                <div className="container relative mx-auto py-20 px-4 flex flex-col md:flex-row">
                    <Image src={category_2} alt="" className="flex-1 h-[300px] max-w-sm rounded-br-[3rem]" />
                    <div className="flex-1 flex flex-col gap-3 p-5 items-center md:items-start">
                        <h3 className="heading capitalize">Customised <span className="text-primary">Content and Training Programs</span> for Corporate Clients</h3>
                        <p className="text-sitetext/80 text-md md:text-base leading-loose text-justify font-medium py-2 pr-2">At CTTI, we understand that each organisation has unique training needs. That&apos;s why we offer customised content and training programs tailored specifically to the requirements of our corporate clients. Whether you are looking to upskill your workforce, improve employee performance, or address specific challenges within your industry, our expert team is here to develop and deliver training solutions that meet your organisation&apos;s unique needs.</p>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 pb-10">
                <div className="container mx-auto py-10 flex flex-col gap-5">
                    <article className="flex flex-col gap-3">
                        <h3 className="heading text-primary capitalize p-5 pt-8">Customized <span className="text-primary">Corporate</span> Training</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
                            {
                                corporates.map(corporate => <CoachingCard key={corporate.id} {...corporate} />)
                            }
                        </div>
                    </article>
                </div>
            </section>
            <section className="bg-white">
                <div className="container mx-auto py-10 flex flex-col gap-5">
                    <article className="flex flex-col gap-3">
                        <h3 className="heading capitalize p-5 pt-8">Customized <span className="text-primary">Individual</span> Training</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
                            {
                                individuals.map(individual => <CoachingCard key={individual.id} {...individual} />)
                            }
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default CustomizedTraining