import Image from "next/image";
import Team from '@/components/Team'
import { WHY_CHOOSE_US } from "@/constants";
import { getTeam } from "@/sanity/actions";

export const revalidate = 900;
export type teamType = {
  _id: string,
  fullName: string,
  role: string,
  contact: number
  image: string
};

const page = async () => {

  const team = await getTeam();
  
  return (
    <>
      <section className="w-full">
        <div className="flex pt-8 flex-wrap justify-evenly overflow-hidden">
          <div className="w-full lg:w-[55%]">
            <div className="px-16 pt-24">
              <h2 className="text-4xl py-4 md:text-5xl font-bold text-dark_blue">We’re a passionate group of people working tirelessly on helping students live their desired future.</h2>
              <p className="pt-4 text-[#6c757d] text-md ">We are proud to help students from our country obtain internationally recognized degrees abroad. We focus on tertiary education and represent universities in Poland, Turkey, Cyprus, Australia, UK, USA, South Africa, Canada and Ireland. We have been providing these services for over 10 years and have helped hundreds of students achieve their dreams of studying abroad.</p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] px-16 pt-10">
            <Image src={"/feature.jpg"} alt={""} width={400} height={350} className="rounded-lg" />
          </div>
        </div>
      </section>

      <section>
        <div className="pt-20">
          <h2 className="text-4xl text-center py-4 md:text-5xl font-bold text-red">Why Choose Us!!</h2>
        </div>
        <ul className="mt-10 justify-center flex flex-wrap">
            {WHY_CHOOSE_US.map((item) => (
              <div className="m-6">
                <ServiceItem 
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  description={item.statement}
                />
              </div>
            ))}
          </ul>
      </section>

      {/* teams section */}
      <section>
        <div className="p-16 w-full">
          <h2 className="text-4xl py-4 md:text-5xl font-bold text-dark_blue text-center">Meet Our Team</h2>
        </div>
        <div className="flex flex-wrap gap-0">
          {team.map((item: any)=> (
            <Team 
              key={item._id}
              id={item._id}
              firstName={item.fullName}
              contact={item.contact}
              role={item.role}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </>
  )
}

type ServiceItem = {
  title: string;
  icon: string;
  description: string;
}

const ServiceItem = ({ title, icon, description }: ServiceItem) => {
  return (
    <li className="flex w-[300px] flex-col cursor-pointer text-center p-10 items-center">
      <div className="rounded-full justify-center items-center  p-4 lg:p-5 bg-red">
        <Image src={icon} alt="icon" width={30} height={30} />
      </div>
      <h2 className="pt-5 font-medium text-2xl text-dark_blue">
        {title}
      </h2>
      <p className="pt-5 items-center font-light text-[#6B6A75] lg:pt-[30px] lg:bg-none text">
        {description}
      </p>
    </li>
  )
}

export default page