import Image from "next/image"
import fallBackImage from "@/public/project.png"

import { Metadata } from "next"
import { PortableText } from "@portabletext/react"
import { getSinglePost } from "@/sanity/actions"
import type { PostType } from "@/types"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import ShareCard from "@/components/ShareCard"


export const revalidate = 10

type Props = {
  params: {
    post: string;
  }
}

// Get the URL of the current page dynamically
const url = typeof window !== 'undefined' ? window.location.href : '';

//Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.post;
  const post: PostType = await getSinglePost(slug);

  return {
    title: `${post.title}` ,
    metadataBase: new URL(`https://zimscholarstrust.ac.zw/news/${post.slug}`),
    description: "Zim Scholars Trust Post",
    keywords: post.category,
    openGraph: {
      images:
        (post.image),
      url: `https://zimscholarstrust.ac.zw/news/${post.slug}`,
      title: post.title,
      description: "Zim Scholars Trust Post",
      type: "article",
      siteName: "zimscholarstrust.ac.zw",
      tags: post.category,
      publishedTime: post.releaseDate.toString(),
    },
    twitter: {
      title: post.title,
      description: "Zim Scholars Tust Post",
      images:
        (post.image),
      card: "summary_large_image",
    },
  };
}

export default async function page({ params }: Props){
  const slug = params.post;
  const post: PostType = await getSinglePost(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex text-dark_blue pt-16 pb-4 items-start justify-between ">
          <p>Published:  {post.releaseDate.toString()}</p>
          <Popover>
            <PopoverTrigger>
              <Image 
                src="/popover-menu.svg"
                height={6}
                width={5}
                alt="menu icon"
              />
            </PopoverTrigger>
            <PopoverContent className="justify-center">
              Share the Post.
              <ShareCard 
                url={'https://zimscholarstrust.ac.zw/news/${post.slug}'}
                quote={post.title} 
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-dark_blue font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {post.title}
          </h1>
        </div>

        <Image
          width={900}
          height={460}
          src={post.image}
          alt={post.title}
        />

        <div className="flex flex-col gap-y-6 mt-8 mb-4 leading-7 text-black ">
          <PortableText value={post.description} />
        </div>
        <div className="border-t w-full py-10">
          
        </div>
      </div>
    </main>
  )
}
// text-zinc-400