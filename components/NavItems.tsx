'use client';

import { HEADER_LINKS } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className=" flex w-full flex-col items-start gap-5 md:flex-row ">
      {HEADER_LINKS.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-red font-medium'
            } flex-center p-medium-16 whitespace-nowrap pb-1.5 transition-all hover:font-medium`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems