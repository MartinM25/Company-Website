import React from 'react'
import Image from 'next/image'
import { SERVICES } from '@/constants'


const Services = () => {
  return (
    <section id='services' className="flex-col md:px-20 justify-center overflow-hidden p-16">
      <div className="max-container padding-container relative w-full flex">
        <div className="flex w-full flex-col">
          <h2 className="text-4xl py-4 md:text-5xl font-bold text-center text-red">What We Offer</h2>
          <ul className="mt-10 grid gap-10 justify-center md:grid-cols-2 sm:px-4 xs:px-4 lg:grid-cols-3 lg:gap-10">
            {SERVICES.map((service) => (
              <ServiceItem 
                key={service.title}
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type ServiceItem = {
  title: string;
  icon: string;
  description: string;
}

const ServiceItem = ({ title, icon, description }: ServiceItem) => {
  return (
    <li className="flex w-full flex-1 flex-col shadow-md cursor-pointer text-center bg-[#F6F6F6] p-10 items-center">
      <div className="rounded-full p-4 lg:p-5 bg-red">
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2 className="pt-5 font-medium text-lg text-dark_blue">
        {title}
      </h2>
      <p className="pt-5 items-center font-light text-[#6B6A75] lg:pt-[30px] lg:bg-none text">
        {description}
      </p>
    </li>
  )
}

export default Services
