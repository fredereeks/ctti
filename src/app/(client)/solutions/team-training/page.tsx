import { masonry4 } from '@/assets/images'
import { trainings } from '@/data/trainings';
import TrainingCard from '@/components/TrainingCard'
import Image from 'next/image';
import Link from 'next/link';

function TeamTraining() {

  return (
    <main className="flex flex-col bg-white">
        <section className="bg-primary py-20 px-4">
          <div className="container relative mx-auto flex flex-col">
            <div className="flex flex-wrap gap-2 items-center pt-5 pb-10 text-slate-50">
              <Link href="/" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white  ">Home</Link>
              /
              <Link href="/solutions" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white ">Solutions</Link>
              /
              <div className="font-normal px-2 text-md md:text-lg text-slate-50">Team Training</div>
            </div>
          </div>
          <aside className="flex flex-col gap-2 justify-center container py-5 mx-auto">
            <h2 className="text-2xl md:text-4xl text-white font-bold">Customized Training Solutions</h2>
            <p style={{lineHeight: 2}} className="text-white w-full sm:max-w-[70%] md:max-w-[90%] leading-[2] text-md md:text-base py-2 text-justify">At CTTI, we understand that every organisation has unique training needs. We offer standard and customised training programs for corporate and government clients. Whether you want to enhance your team&apos;s skills or train individual employees, we have tailored solutions to meet your requirements. With our comprehensive training offerings and industry expertise, we can help your organisation achieve its goals and retain top talent.</p>
          </aside>
        </section>
        <section className="py-10 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center container p-5 mx-auto">
            <div className="relative h-[330px] w-[320px] border-primary border-[6px] rounded-md shadow-lg mx-auto -skew-x-[5deg] ">
              <Image src={masonry4} alt="" className=" border-white border-[6px] w-full h-full top-0 -left-[1rem] object-cover scale-100" />
            </div>
            <div className="col-span-2 p-5 md:py-20 md:px-10 flex flex-col gap-2">
              <h2 className="text-2xl md:text-4xl text-primary font-bold">Individual and Team Training</h2>
              <p className="text-gray-700 leading-[1.8] text-md md:text-base py-2 text-justify">Whether you want to train an individual or a team, our experienced trainers can deliver personalised instruction to individuals, addressing their specific learning objectives. Additionally, we can conduct comprehensive team training sessions, fostering collaboration and knowledge-sharing among your employees.</p>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 relative after:left-0 after:top-0 after:absolute after:z-5 after:bg-[#8881] after:w-full after:h-full">
          {/* <img src={category_2} alt="" className="absolute w-full h-full z-2 top-0 left-0 object-cover" /> */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center container px-5 py-10 mx-auto">
              {/* <h2 className="col-span-1 sm:col-span-2 text-2xl md:text-4xl text-primary pt-0 pb-10 text-center font-bold">CTTI Advantages for Corporate and Government Clients</h2> */}
              <h3 className="col-span-1 sm:col-span-2 pb-10 text-2xl md:text-4xl font-bold text-primary mx-auto max-w-[90%] sm:max-w-[80%] text-center leading-tight capitalize">Advantages to our Corporate and Government Clients </h3>
            {
              trainings.map((training,i) => {
                const light = i % 2 === 1 ? "-translate-y-4 hover:translate-y-0" : "hover:-translate-y-4 translate-y-0"
                return(
                  <TrainingCard key={training.id} light={light} {...training} />
                )
              })
            }
          </div>
        </section>
    </main>
  )
}

export default TeamTraining