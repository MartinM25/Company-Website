import { PortableTextBlock } from "sanity";

export type PostType = {
  _id: string;
  title: string;
  image: string;
  slug: string;
  category: string;
  releaseDate: Date;
  description: PortableTextBlock[]
}