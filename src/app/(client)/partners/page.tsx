import { partners } from '@/data'
import {PartnersCard} from '@/components'

export default function PartnersPage() {
  return (
    <main className="bg-slate-50 py-20">
      <div className="container pt-10 mx-auto flex flex-col">
        <div className="flex flex-col gap-3 p-5 items-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary capitalize">Our Strategic Partners</h3>
              <p style={{lineHeight: 2}} className="text-sitetext/80 font-medium text-md md:text-base leading-loose text-justify py-2 pr-2">At CTTI, we are proud to have established strong partnerships with some of the industry&apos;s leading technology organisations. These partnerships enable us to deliver high-quality training and certifications recognised and valued worldwide. Through our collaboration with Microsoft, Cisco, Oracle, and PMI, we bring you the latest knowledge and expertise in their respective domains, ensuring that our students and clients receive the most comprehensive and up-to-date training.</p>
        </div>
        <div className="flex flex-col gap-2">
          {
            partners.map(partner => (<PartnersCard key={partner.id} {...partner} />))
          }
        </div>
        <div className="flex flex-col md:flex-row gap-3 p-5 ">
          <p className="text-sitetext/80 font-medium text-md md:text-base leading-loose text-justify py-2 pr-2">Through our strategic partnerships with Microsoft, Cisco, Oracle, and PMI, CTTI can provide you with industry-recognized training that meets the highest standards of quality and excellence. These partnerships enable us to stay at the forefront of technological advancements and deliver training that is directly aligned with the needs of the IT industry.</p>
          <p className="text-sitetext/80 font-medium text-md md:text-base leading-loose text-justify py-2 pr-2">By choosing CTTI, you gain access to our experienced instructors and comprehensive curriculum and the expertise and resources of our esteemed partners. We are committed to empowering you with the skills and certifications to propel your IT career forward.</p>
        </div>
        <p className="text-sitetext/80 font-medium text-md md:text-base leading-loose text-justify py-2 px-5">Partner with CTTI and embark on a learning journey that will unlock endless opportunities in the world of technology.</p>
      </div>
    </main>
  )
}
