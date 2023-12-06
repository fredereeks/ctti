import { masonry8 } from '@/assets/images';
import { CoachingCard } from '@/components'
import { corporates, individuals } from '@/data';
import Link from 'next/link';
import Image from 'next/image';

function Coaching() {

  return (
    <main className="bg-slate-50 pb-20">
      <section className="bg-primary pt-20 pb-10 px-4">
        <div className="container relative mx-auto   flex flex-col">
          <div className="flex flex-wrap gap-2 items-center pt-5 pb-10 text-slate-50">
            <Link href="/" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white  ">Home</Link>
            /
            <Link href="/solutions" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white ">Solutions</Link>
            /
            <div className="font-normal px-2 text-md md:text-lg text-slate-50">Coaching </div>
          </div>
        </div>
        <aside className="flex flex-col gap-2 justify-center container py-5 mx-auto">
          <h2 className="text-2xl md:text-4xl text-white font-bold">Coaching Solutions and Career Development</h2>
          <p style={{lineHeight: 2}} className="text-white w-full sm:max-w-[70%] md:max-w-[90%] leading-[2] text-md md:text-base py-2 text-justify">At CTTI, we understand the importance of continuous growth and personal development in today&apos;s dynamic professional landscape. We offer individuals and corporate organisations comprehensive career development and coaching consulting services. Whether you&apos;re an individual seeking to enhance your career prospects or an organisation looking to invest in the success of your employees, our expert consultants are here to guide you on the path to success.</p>
        </aside>
      </section>
      <section className="bg-gray-100 pb-10">
          <div className="container mx-auto py-10 flex flex-col gap-5">
              <article className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary capitalize p-5 pt-8">Customized Corporate Training</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
                      {
                          corporates.map(corporate => <CoachingCard state={true} key={corporate.id} {...corporate} />)
                      }
                  </div>
              </article>
          </div>
      </section>
      <section className="bg-white">
          <div className="container mx-auto py-10 flex flex-col gap-5">
              <article className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 capitalize p-5 pt-8">Customized Individual Training</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
                      {
                          individuals.map(individual => <CoachingCard state={false} key={individual.id} {...individual} />)
                      }
                  </div>
              </article>
          </div>
      </section>
      <section className="bg-white py-20 relative after:left-0 after:top-0 after:absolute after:z-5 after:bg-[#0008] after:w-full after:h-full">
        <Image src={masonry8} alt="" className="absolute w-full h-full z-2 top-0 left-0 object-cover" />
        <div className="relative z-50 container mx-auto p-3 flex flex-col gap-2 max-w-[50rem]">
          <p style={{lineHeight: 2}} className="text-white text-base md:text-lg leading-loose text-justify pt-5">At CTTI, our career development and coaching consulting services are designed to empower individuals and organisations to achieve their full potential. Our team of experienced consultants brings a wealth of knowledge and expertise to guide you on your career journey. Whether seeking personal growth or organisational success, we are committed to providing the tools, insights, and support you need to thrive in today&apos;s competitive landscape.</p>
          <Link href="/contact" className="bg-primary-50 px-4 w-max py-2 my-2 rounded-xl text-primary font-bold">Contact us today</Link>
        </div>
      </section>
    </main>
  )
}

export default Coaching