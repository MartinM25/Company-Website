import Filters from "@/components/Filters";
import PostCard from "@/components/PostCard";

import { getPosts } from "@/sanity/actions";


export const revalidate = 10;

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {


  const posts = await getPosts({
    query: '',
    category: searchParams?.category || '',
    page: '1'
  })

  return (
    <>
      <section className="p-10">
        <Filters/>
        <div className="flex flex-wrap gap-10 pt-4">
          {posts?.length > 0 ? (
            posts.map((post: any) => (
              <PostCard 
                key={post._id}
                id={post._id}
                slug={post.slug}
                title={post.title}
                category={post.category}
                image={post.image}
                releaseDate={post.releaseDate}
              />
            ))
          ): (
            <p className="body-regular justify-center text-dark_blue">
              No Results Found!
            </p>
          )}
        </div>     
      </section>
    </>
  );
}

export default Page