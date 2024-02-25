import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="w-full">
      <div className='grid-cols-1 grid overflow-hidden gap-0 lg:grid-cols-2'>
        <div className="px-12 py-16 bg-[#F6F6F6]">
          <h2 className="text-4xl font-bold text-dark_blue">Get In Touch</h2>
          <p className="text-[#6c757d] text-sm md:text-lg pt-8">For a face-to-face conversation, feel free to visit us at the below address during our working hours. Otherwise you can contact us on the following email and phone number.</p>
          <div className="flex flex-col py-12">
            <div className='flex py-2 w-[260px] items-center'>
              <Image src={'./location.svg'} alt="building icon" width={20} height={20}/>
              <p className="text-[#6c757d] text-sm md:text-base pl-4">Office 610, 6th Floor, ZIMDEF House, Bulawayo, Zimbabwe</p>
            </div>
            <div className='flex py-2 items-center'>
              <Image src={'./envelope.svg'} alt="building icon" width={20} height={20}/>
              <p className="text-[#6c757d] text-sm md:text-base pl-4">info.zimscholars@gmail.com</p>
            </div>
            <div className='flex py-2 items-center'>
              <Image src={'./phone.svg'} alt="building icon" width={20} height={20}/>
              <p className="text-[#6c757d] text-sm md:text-base pl-4">+263 772 774 831</p>
            </div>
          </div>
        </div>
        <div className=" border-2 items-center justify-between px-12 py-16">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

export default page
