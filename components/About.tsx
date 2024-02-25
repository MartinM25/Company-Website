import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'
import { ABOUT_US } from '@/constants'

const About = () => {
  return (
    <section className="w-full">
      <div className="grid-cols-1 grid overflow-hidden gap-0 lg:grid-cols-2">
        <div className="bg-[#F6F6F6] p-16">
          <h2 className="text-4xl py-4 md:text-5xl font-bold text-center text-dark_blue">About Us</h2>
          <h3 className="text-dark_blue font-medium pt-4">Reputable educational consulting firm with offices in Mutare and Bulawayo</h3>
          <p className="pt-4 text-[#6c757d] text-sm ">We are proud to help students from our country obtain internationally recognized degrees abroad. We focus on tertiary education and represent universities in Poland, Turkey, Cyprus, Australia, UK, USA, South Africa, Canada and Ireland. We have been providing these services for over 10 years and have helped hundreds of students achieve their dreams of studying abroad.</p>
          <Link href="/contact">
            <Button className="bg-dark_blue mt-6 text-white hover:bg-white hover:text-dark_blue hover:outline">
              About Us
            </Button>
          </Link>
        </div>
        <div className="bg-dark_blue p-16">
        <ul className="">
            {ABOUT_US.map((about) => (
              <AboutItem 
                key={about.title}
                title={about.title}
                icon={about.icon}
                statement={about.statement}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type AboutItem = {
  title: string;
  icon: string;
  statement: string;
}

const AboutItem = ({ title, icon, statement }: AboutItem) => {
  return (
    <li className="flex text-white pb-4">
      <div className='lg:w-[10%]'>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white">
          <Image src={icon} alt="icon" width={24} height={24} />
        </div>
      </div>
      <div className="w-[90%] pl-4 ">
        <h3 className="font-medium">
          {title}
        </h3>
        <p className="text-sm font-extralight">
          {statement}
        </p>
      </div>
    </li>
  )
}

export default About