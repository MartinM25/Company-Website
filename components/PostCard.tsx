import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

interface Props {
  id: string;
  title: string;
  image: string;
  slug: string;
  category: string;
  releaseDate: Date;
}

const PostCard = ({ id, title, slug, image, category, releaseDate }: Props) => {
  return (
    <div key={id} className="w-full lg:w-[356px] ml-2">
      
      <Card className="w-[350px] max-w-md mx-auto p-0 border-none rounded-none shadow-md">
        <CardHeader className="p-0">
          <Image 
            src={image}
            alt={title}
            width={350}
            height={220}
            className="object-contain lg:w-[356px]"
          />
        </CardHeader>
        <CardContent className="p-3">
          <p className="text-[#828282] font-medium text-sm">{releaseDate.toString()}</p>
          <Link href={`news/${slug}`} className="">
            <CardTitle className="font-medium hover:font-semibold text-base pt-2">     
              {title} 
            </CardTitle>
          </Link>
        </CardContent>
        <CardFooter className="p-2">
          <p className="bg-[#FFFF99] p-1 rounded-md shadow text-yellow text-xs font-medium">{category}</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default PostCard