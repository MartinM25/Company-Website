import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  id: string;
  firstName: string;
  image: string;
  contact: number
  role: string;
}

const Team = ({ id, firstName, image, contact, role }: Props) => {
  return (
    <>
      <Card className="w-[350px] max-w-md mx-auto p-0 border-none rounded-none">
        <CardHeader className="p-0">
          <Image 
            src={image}
            alt={firstName}
            width={350}
            height={220}
            className="object-contain lg:w-[356px]"
          />
        </CardHeader>
        <CardContent className="px-3 text-center">
          <CardTitle className="font-medium text-base pt-2">     
            {firstName} 
          </CardTitle>
          <p className="pt-2">{role}</p>
          <p className="text-[#828282] pt-2 font-medium text-sm text-center">+{contact}</p>
        </CardContent>    
      </Card>
    </>
  )
}

export default Team