import { BreadCrumb } from '@/components'
import { virtuals } from '@/data'
import VirtualCard from '@/components/VirtualCard'
import { category_2 } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'

function VirtualCorporateTraining() {

  return (
    <main  className='flex flex-col justify-center'>
      <BreadCrumb extra={{name: "Solutions", link: "/solutions"}} page={"Virtual Corporate Training"} />
      <section className="bg-white">
        <div className="container relative mx-auto pt-10 px-4 flex flex-col">
            <div className="flex flex-col gap-3 p-5 items-center">
              <h3 className="heading text-primary capitalize">Virtual Corporate Training</h3>
                  <p className="normal-text text-sitetext/80 leading-loose text-center py-2 pr-2">At CTTI, we are dedicated to supporting your organisation&apos;s growth and success through comprehensive skills assessment services.</p>
            </div>
            {/* <aside className={`group py-0 px-4 flex flex-col items-stretch sm:items-center md:items-stretch gap-3 md:gap-5 md:flex-row`}>
                <div className="relative flex-1 mx-auto flex h-full w-full py-4 md:w-[400px] flex-shrink-0 group-hover:shad bg-white rounded-md overflow-hidden rounded-ss-[2rem] rounded-se-[2rem]">
                    <img src={masonry9} alt={"Virtual Corporate Training"} className="h-full w-full rounded-md hover:shadow-xl shadow-lg object-cover md:object-cover scale-[1.5] group-hover:rotate-6 group-hover:scale-[1.3]" />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2 py-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-600 capitalize">Experience Convenient and <span className="text-primary">Engaging Virtual Training</span> with CTTI</h3>
                    <p className="text-slate-600 text-justify text-md md:text-base leading-loose py-2 pr-2">In today&apos;s digital age, virtual training has become preferred for organisations seeking flexible and efficient learning solutions. CTTI offers comprehensive virtual training programs designed specifically for corporate clients. Our virtual training services provide a dynamic and interactive learning experience that allows your employees to develop new skills and enhance their knowledge from the comfort of their workspace. Discover the benefits of virtual training with CTTI.</p>
                </div>
            </aside> */}
        </div> 
      </section>
      <section className="bg-slate-50">
        <div className="container relative mx-auto pb-20 pt-5 px-4 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 py-10">
              {
                virtuals.map((virtual) => {
                  return (<VirtualCard key={virtual.id} {...virtual} />)
                })
              }
            </div>
        </div> 
      </section>
      <section className="bg-white py-20 relative after:left-0 after:top-0 after:absolute after:z-5 after:bg-[#0008] after:w-full after:h-full">
        <Image src={category_2} alt="" className="absolute w-full h-full z-2 top-0 left-0 object-cover" />
        <div className="relative z-50 container mx-auto py-3 flex flex-col gap-2 max-w-[50rem]">
          <h3 className="text-white font-bold text-xl md:text-3xl text-center">Embrace the Future of Training with CTTI&apos;s Virtual Training Solutions</h3>
          <p style={{lineHeight: 2}} className="text-white text-base md:text-lg leading-loose text-justify pt-5 px-5">CTTI&apos;s virtual training programs empower your organisation to embrace the flexibility and convenience of online learning. Equip your employees with the knowledge and skills they need to excel in their roles through engaging in virtual training sessions.</p>
          <p style={{lineHeight: 2}} className="text-white text-base md:text-lg leading-loose text-justify py-5 px-5"><Link href="/contact" className="text-primary-50 font-bold underline">Contact us today</Link> to discuss your organisation&apos;s virtual training needs, and let us create a customised program that delivers impactful learning experiences.<br/>We are committed to providing high-quality virtual training solutions that drive success and growth for your organisation.</p>
        </div>
      </section>
    </main>
  )
}

export default VirtualCorporateTraining