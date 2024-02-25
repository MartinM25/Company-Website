import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Navbar = () => {

  return (
    <nav className="flex-center shadow-sm bg-white fixed top-0 z-50 w-full py-7 text-dark_blue">
      <div className="flex-between mx-auto w-full max-w-screen-2xl xs:px-8 sm:px-16">
        <Link href="/" >
          <Image 
            src="/logo.png"
            alt="logo"
            width={45}
            height={40}
          />
        </Link>
        
        {/* menu for small devices */}
        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
        </div>
        
        {/* Links for the nav bar */}
        <nav className="md:flex-between hidden justify-end max-w-xs">
          <NavItems />
        </nav>
      </div>
    </nav>
  )
}

export default Navbar