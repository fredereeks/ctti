import { IoBookOutline, IoFastFoodOutline, IoMedicalOutline, IoPeopleOutline } from 'react-icons/io5';
import { BreadCrumb } from '@/components'
import { rocket } from '@/assets/images';
import Image from 'next/image';

export default function DeliveryPage() {
  return (
    <main className='flex flex-col justify-center bg-white'>
    <BreadCrumb extra={{ name: "About", link: "/about" }} page={"Delivery"} />
    <section className="benefits bg-white py-20 px-4">
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-primary to-blue-800 bg-clip-text text-center capitalize font-bold">Course Delivery Options</h3>
                <p className="text-center normal-text leading-relaxed p-2 mx-auto w-[95%] md:w-[60%]">We provide you with an array of options that is guaranteed to suite your schedules at all time.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:items-center md:container mx-auto md:px-5">
                <div className="hidden relative py-20 md:py-40 sm:block sm:col-span-1 md:col-span-2">
                    <Image src={rocket} alt="Benenfit Hero" className="absolute w-full h-full sm:object-cover lg:object-contain top-0 left-0" />
                </div>
                <div className="flex flex-col gap-4 px-3">
                    {
                        [
                            [170, <IoMedicalOutline key={'8022'} className="h-10 w-10 bg-gradient bg-clip-text text-purple-400" />, 'Discount on Events Space'],
                            [171, <IoBookOutline key={'8023'} className="h-10 w-10 bg-gradient bg-clip-text text-purple-400" />, 'Curated Business Services'],
                            [172, <IoFastFoodOutline key={'8024'} className="h-10 w-10 bg-gradient bg-clip-text text-purple-400" />, 'Workshop & Workers Nights'],
                            [173, <IoPeopleOutline key={'8025'} className="h-10 w-10 bg-gradient bg-clip-text text-purple-400" />, 'Complimentary Business Network'],
                        ].map(([id, icon, text]) => (
                            <aside key={id.toString()} className="flex gap-4 py-2 max-w-[10rem]">
                                {icon}
                                <p className="font-extralight text-slate-600 text-sm md:text-md">{text}</p>
                            </aside>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-4 px-3">
                    {
                        [
                            [170, <IoMedicalOutline key={'8032'} className="h-10 w-10 bg-gradient bg-clip-text text-purple-400" />, 'Discount on Events Space'],
                            [171, <IoBookOutline key={'8033'} className="h-10 w-10 bg-gradient bg-clip-text text-purple-400" />, 'Curated Business Services'],
                            [172, <IoFastFoodOutline key={'8034'} className="h-10 w-10 bg-gradient bg-clip-text text-purple-400" />, 'Workshop & Workers Nights'],
                            [173, <IoPeopleOutline key={'8035'} className="h-10 w-10 bg-gradient bg-clip-text text-purple-400" />, 'Complimentary Business Network'],
                        ].map(([id, icon, text]) => (
                            <aside key={id.toString()} className="flex gap-4 py-2 max-w-[10rem]">
                                {icon}
                                <p className="font-extralight text-slate-600 text-sm md:text-md">{text}</p>
                            </aside>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
</main>
  )
}
