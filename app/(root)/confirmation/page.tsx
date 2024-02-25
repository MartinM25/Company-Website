import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="h-[50vh] md:h-screen mt-[30vh] max-w-6xl items-center mx-auto lg:px-28 px-8">
      <div className="border-2 border-green rounded-lg text-green p-4 mx-auto">
        <p className="font-medium text-sm md:text-3xl pb-8 text-center">Thank You!</p>
        <p className="text-xs md:text-2xl text-center pb-8">Your message was sent, we'll get back to you ASAP!</p>
        <p className="text-xs md:text-xl text-center italic">Want to send another message?</p>
        <div className='flex flex-row items-center justify-center'>
            <Link href="contact">
              <Button variant="outline" className="ml-2 w- justify-center w-[100px] items-center">
                <p className="">Yes</p>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="ml-2 w- justify-center w-[100px] items-center">
                <p className="">No</p>
              </Button>
            </Link>
          </div>
      </div>
    </main>
  )
}

export default page