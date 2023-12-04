"use client"

import React, { useRef, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import toast from 'react-hot-toast';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { handleContactMessage } from '@/actions';




export default function ContactForm() {
    const formRef = useRef<HTMLFormElement | null>(null)
    const [pending, setPending] = useState<boolean>(false)
    const [phone, setPhone] = useState<string | undefined>('')
    const [country, setCountry] = React.useState('Nigeria')
    const [region, setRegion] = React.useState('Abuja Federal Capital Territory')


    async function handleClientSubmit(formData: FormData) {
        if (!phone && country === "Nigeria") {
            toast.error("Sorry but we would like to have your phone number", { id: "86249" })
            return;
        }
            setPending(true)
        try {
            const data = await handleContactMessage(formData);
            if (data?.error) {
                toast.error(data?.message, { id: "86249" })
                formRef?.current?.reset();
            } else {
                toast.success(data?.message || "Message Sent", { id: "86249" })
                formRef?.current?.reset();
            }
        } catch (error) {
            toast.error("Something went wrong. Please, try again", { id: "86249" })
        }
        setPending(false)
    }


    return (
        <form ref={formRef} action={handleClientSubmit} className="w-full flex flex-col gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <h4 className="heading scale-90 text-center py-2 lg:col-span-2">We are always happy to hear from you</h4>
                <input type="text" placeholder='First Name' name='firstname' required className="w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4" />
                <input type="text" placeholder='Middle Name' name='middlename' className="w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4" />
                <input type="text" placeholder='Last Name' name='lastname' required className="w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4" />
                {/* <input type="phone" placeholder='Phone Number (optional)' name='phone' className="w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4" /> */}
                <div className="flex w-full gap-1 py-2 border border-zinc-200 bg-transparent rounded-md overflow-hidden">
                    <PhoneInput
                        onChange={(value) => setPhone(value)}
                        placeholder={"Enter Phone Number"}
                        international
                        withCountryCallingCode={true}
                        key={234}
                        defaultCountry='NG'
                        style={{ outline: 0, width: '108%' }}
                        countryCallingCodeEditable={false}
                        value={phone}
                        name="phone"
                        flags={flags}
                        limitMaxLength={true}
                        smartCaret={false}
                        className='w-full outline-none placeholder-opacity-70 text-sitetext/80 bg-transparent rounded-md px-4 flex-1'
                    />
                </div>
                <input type="email" placeholder='Email' name='email' required className="lg:col-span-2 w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-2 px-4" />
                <div className={`flex flex-col gap-1`}>
                    {/* <label htmlFor={'country'} className="text-gray-600 text-sm">{'Country'}</label> */}
                    <CountryDropdown value={country} id='country' onChange={value => setCountry(value)} name='country' key={9206} classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-sitetext/80 text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
                </div>
                <div className={`flex flex-col gap-1`}>
                    {/* <label htmlFor={'state'} className="text-gray-600 text-sm">{'State'}</label> */}
                    <RegionDropdown country={country} disableWhenEmpty={true} value={region} onChange={value => setRegion(value)} name='state' key={9206} id='state' classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-sitetext/80 text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
                </div>
                <textarea required placeholder='' name='message' className="w-full outline-none placeholder-opacity-70 my-1 text-sitetext/80 focus:border-primary bg-transparent border border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[12rem] lg:col-span-2 resize-y" ></textarea>
                <button type="submit" disabled={pending} className="text-gray-50 bg-[#ec1c3e] rounded-[2rem] w-max px-8 py-2 text-sm md:text-md shadow-lg cursor-pointer shadow-[#ec1c3e]">{pending ? 'Processing...' : 'Send Message'}</button>
            </div>
        </form>
    )
}
