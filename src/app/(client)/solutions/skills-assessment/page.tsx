import { BreadCrumb } from '@/components'
import { skills } from '@/data'
import SkillCard from '@/components/SkillCard'
import Link from 'next/link';

function SkillAssessment() {

  return (
    <main  className='flex flex-col justify-center'>
      <BreadCrumb extra={{name: "Solutions", link: "/solutions"}} page={"Skill Assessment"} />
      <section className="bg-white">
        <div className="container relative mx-auto pt-20 px-4 flex flex-col">
            <div className="flex flex-col gap-3 p-5 items-center">
              <h3 className="heading capitalize">Our Skill Assessment Services</h3>
                  <p className="normal-text leading-loose text-justify py-2 pr-2">At CTTI, we are dedicated to supporting your organisation&apos;s growth and success through comprehensive skills assessment services.</p>
            </div>
            <div className="flex flex-col gap-2 py-10">
              {
                skills.map((skill,i) => {
                  const direction = i % 2 === 0 ? true : false;
                  return (<SkillCard key={skill.id} direction={direction} {...skill} />)
                })
              }
            </div>
            <p className="text-slate-600 text-base md:text-lg leading-loose text-justify pb-20 px-5"><Link href="/contact" className="text-primary-500 font-bold underline">Contact us today</Link> to discuss your organisation&apos;s skills assessment needs. Let us help you uncover the true potential of your workforce through accurate and insightful skills assessments. <br/><br/>At CTTI, we are dedicated to supporting your organisation&apos;s growth and success through comprehensive skills assessment services.</p>
        </div> 
      </section>
    </main>
  )
}

export default SkillAssessment