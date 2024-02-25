import { SOCIAL_LINKS, HEADER_LINKS } from "@/constants"
import Link from "next/link"
import React from "react"
import Image from "next/image"


const Footer = () => {
  return (
    <footer className='flex flex-col bg-dark_blue text-white border-t'>
      <ul className=" flex w-full flex-col items-center gap-12 justify-center pt-10 md:flex-row ">
        {HEADER_LINKS.map((link) => {
          return (
            <li
              key={link.route}
              className="hover:text-[#F6F6F6F6] hover:shadow-sm hover:font-medium hover:underline"
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          )
        })}
      </ul>
      <ul className="flex w-full py-10 items-center justify-center gap-12 md:flex-row ">
        {SOCIAL_LINKS.map((link) => {
          return (
            <li
              key={link.name}
              className=""
            >
              <Link href={link.url}>
                <Image src={link.icon} width={35} height={35} alt="icon" />
              </Link>
            </li>
          )
        })}
      </ul>

      <div className='flex justify-center text-sm font-extralight gap-6 items-center flex-wrap border-t border-[#f6f6f6] sm:px-16 px-6 py-10 placeholder-opacity-10'>
        <p>©2024 ZimScholars Trust. All Rights Reserved</p>
        <p>+263 772 774 831 / info.zimscholars@gmail.com</p>
      </div>
    </footer>
  )
}


export default Footer