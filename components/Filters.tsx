"use client";

import { urlQuery } from "@/sanity/utils";
import { useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation'

const FILTER_LINKS = ['all','news','scholarship','ask', 'other']

const Filters = () => {
  const [active, setActive] = useState("");
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    
    if(active === link) {
      setActive('');

      newUrl = urlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: null,
      })
    } else {
      setActive(link);

      newUrl = urlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }
    router.push(newUrl, { scroll: false });
  }

  return (
    <ul className="text-dark_blue body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto sm:max-w-2xl">
      {FILTER_LINKS.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={` ${active === link ? "bg-[#FFFF99]" : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters