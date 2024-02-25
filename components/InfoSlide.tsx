import PostCard from './PostCard'

import { getPostPlaylist } from '@/sanity/actions'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const revalidate = 900;

const InfoSlide = async () => {
  const postPlaylist = await getPostPlaylist(); 
  // console.log(postPlaylist)

  return (
    <section className="overlay-hidden">
      <div className="w-full p-16">
        <h2 className="text-4xl py-4 md:text-5xl font-bold text-center text-dark_blue">News & Announcements</h2>
        
        {/* iteration of card */}
        <div className="w-full mt-10">
          {postPlaylist.map((item: any) =>(
            <Carousel
              opts={{
                align: "start",
              }}
              className=""
              key={item._id}
              >
              <CarouselContent>
                {item.posts.map((post: any) => (
                  <CarouselItem key={post._id} className="lg:basis-1/3 md:basis-1">
                    <div className="m-2">
                      <PostCard 
                        key={post._id}
                        id={post._id}
                        slug={post._id}
                        title={post.title}
                        category={post.category}
                        image={post.image}
                        releaseDate={post.releaseDate}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default InfoSlide