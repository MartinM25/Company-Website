import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="" >
      <div className="bg-banner bg-cover w-full relative md:min-h-[700px] bg-no-repeat text-center align-middle">
        <div className="pt-16 md:pt-40">
          <p className="text-white font-light">
            EDUCATIONAL CONSULTANT
          </p>
          <h1 className="text-white text-2xl md:text-6xl font-semibold">
            We Will Help You Take The Next Step In Your Education
          </h1>
          <Link href="/contact">
            <Button className="bg-white m-6 text-dark_blue hover:bg-red hover:text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero