import { DiffCard, CategoryCard, CourseCard, Counter } from '@/components'
import HomeSlider from '@/components/HomeSlider'
import PartnerSlide from '@/components/PartnerSlide'
import SubscriptionForm from '@/components/SubscriptionForm'
import { categories, courses, differences } from '@/data'
import { Metadata } from 'next'
// import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDropright } from 'react-icons/io'

export const metadata: Metadata = {
  title: 'CTTI e-learning Centre :: Home',
  description: 'At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys',
}


export const handleSubscription = async (data: FormData) => {
  "use server"
  const email = data.get("email")?.valueOf() || '';
  if (!email) return {
    error: true,
    message: 'No email supplied'
  }
  else {
    // const savedUser = await 
  }
}

// data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-left"
// data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-up-right"
// data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-down-left"
// data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-down-right"
// data-aos-duration="1000" data-aos-delay="1000" data-aos="zoom-in-up"
// data-aos-duration="1000" data-aos-delay="1000" data-aos="zoom-out-up"
// data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos="zoom-out-up"
// data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-up"
// data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-down"


export default async function Home() {
  return (
    <>
      {/* <section className="bg-white h-[70vh] relative py-20 px-5 before:h-[30%] before:w-[50%] before:skew-x-[10deg] before:bg-primary before:absolute before:top-[20%] before:opacity-80 before:-left-[20%] after:h-[30%] after:w-[50%] after:-skew-x-[10deg] after:bg-primary after:absolute after:top-[50%] after:opacity-80 after:-left-[20%]">
        <div className="container mx-auto z-[500] container max-h-[70vh] h-[70vh] relative overflow-hidden">
          <HomeSlider />
        </div>
      </section> */}
      <section className="bg-gradient pt-[3.45rem]">
        <div className="mx-auto z-[500] max-h-[70vh] h-[70vh] relative overflow-hidden">
          <HomeSlider />
        </div>
      </section>
      <section className="counter bg-slate-100">
        <div className="container mx-auto justify-center grid grid-cols-2 md:grid-cols-4 py-10 px-4">
          {
            [
              [111, <Counter key={111} speed="fast" end={2140} tag={'K+'} className='text-primary' />, "Online Learners", "border-2 border-r-indigo-50/30"],
              [112, <Counter key={112} speed="slow" end={50} tag={'+'} className='text-primary' />, "Expert Instructors", "md:border-2 md:border-r-indigo-50/30"],
              [113, <Counter key={113} speed="normal" end={2000} tag={'K+'} className='text-primary' />, "Validated Students", "border-2 border-r-indigo-50/30"],
              [114, <Counter key={114} speed="slow" end={67} tag={'+'} className='text-primary' />, "Trendy Courses", "border-0"],
            ].map(([id, stat, text, border]) => (
              <aside key={id.toString()} className={`flex flex-col p-3 items-center justify-center gap-3 text-site  border-transparent ${border}`}>
                {/* <h3 className="text-inherit text-xl md:text-2xl font-bold ">{stat}</h3> */}
                {stat}
                <p className="text-inherit text-slate-600 text-xs md:text-sm text-center">{text}</p>
              </aside>
            ))
          }
        </div>
      </section>
      {/* <CarouselSlide /> */}
      <section className="difference py-10 sm:px-4 bg-[#f8f8fa90]">
        <div className="container justify-center items-stretch grid diff sm:grid-cols-3 mx-auto py-10 gap-x-2 gap-y-4 sm:gap-y-8 sm:gap-x-6 px-2 sm:px-4">
          <aside className="col-span-2 flex flex-col justify-center gap-2 px-2 py-4">
            <h3 className="heading">Why you should choose us</h3>
            <p className="leading-[1.8] overflow-hidden text-ellipsis line-clamp-5 text-justify normal-text py-2 pr-2">At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys. Whether you are a student looking to kick-start your IT career or an organisation seeking to upskill your workforce, we invite you to join us and embark on a transformative learning experience. Discover the power of knowledge with CTTI - your trusted IT training and education partner.</p>
            <Link href="/about" className="text-slate-50 bg-gradient-to-br from-primary to-primary rounded-[2rem] mt-1 text-sm px-5 md:px-7 py-2 w-max shadow-md shadow-indigo-200">Read More</Link>
          </aside>
          {
            differences.map((difference) => <DiffCard key={difference.id} full={false} {...difference} />)
          }
        </div>
      </section>
      <section className="courses py-10 px-3 sm:px-4 bg-gray-100">
        <div className="container flex flex-col gap-3 mx-auto py-10">
          <div className="flex flex-wrap gap-2 items-center md:justify-between">
            <div className="flex-2 flex flex-col gap-1 pr-5">
              <h3 className="heading">Popular Courses for you</h3>
              <p className="normal-text py-2 pr-2">Get the best course, with the best price, with a world-class tutor</p>
            </div>
            <div className="flex-1 flex items-end md:justify-end">
              <Link href="/courses" className="flex items-center gap-2 bg-primary text-white rounded-md group text-sm px-5 py-2">See All <IoIosArrowDropright className='text-inherit group-hover:translate-x-1 transition-all duration-300' /></Link>
            </div>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
            {
              courses.filter(course => course.featured === true).map(course => (<CourseCard key={course.id} {...course} />))
            }
          </div>
        </div>
      </section>
      <section className="categories py-10 bg-white">
        <div className="container flex flex-col gap-8 mx-auto py-20 px-4">
          <div className="flex flex-wrap gap-2 items-center md:justify-between">
            <div className="flex-2 flex flex-col gap-1 pr-5">
              <h3 className="heading">Browse through our Course Catalogue</h3>
              <p className="normal-text py-2 pr-2">Browse through our courses categories to choose the best for your career and/or academic pursuits</p>
            </div>

          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
            {
              // loading ? <Skeleton key={891} type={'course'} total={3} />
              // : 
              categories.slice(0, 6).map(category => (<CategoryCard key={category.id} {...category} />))
            }
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Link href="/courses" className="flex items-center gap-2 bg-primary text-white group text-sm px-4 py-2">Explore More <IoIosArrowDropright className='mt-1 text-inherit group-hover:translate-x-2 transition-all duration-300' /></Link>
          </div>
        </div>
      </section>
      <section className="newsletter py-10 bg-gray-100">
        <div className="container mx-auto flex flex-col gap-3 items-center justify-center py-20 px-4">
          <div className="flex-1 flex flex-col gap-1 p-5 items-center">
            <h3 className="heading">Subscribe to our Newsletter</h3>
            <p className="normal-text py-2 pr-2">Be the first to learn about our latest updates: discount, new courses and trends </p>
          </div>
          <SubscriptionForm handleSubscription={handleSubscription} />
        </div>
      </section>
      <PartnerSlide key={898} />
    </>
  )
}
