import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetPostsParams {
  query: string;
  category: string;
  page: string;
}

export const getPosts = async (params: GetPostsParams) => {
  const { query, category, page } = params;

  try {
    const posts = await readClient.fetch(
      groq`${buildQuery({
        type: 'post',
        query,
        category,
        page: parseInt(page)
      })}{
        "slug": slug.current,
        title,
        _id,
        category,
        "image": poster.asset->url,
        releaseDate
      }`
    );
    return posts
  } catch (error) {
    console.log(error)
  }
}

export const getSinglePost = async (slug: string) => {
  try {
    const post = await readClient.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        category,
        "image": poster.asset->url,
        description,
        releaseDate
      }`,
      { slug }
    )
    return post  
  } catch (error) {
    console.log(error)
  }
}

export const getPostPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "postPlaylist"]{
        _id,
        title,
        posts[0...6]->{
          title,
          _id,
          releaseDate,
          "image": poster.asset->url,
          category,
          desscription
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getTeam = async () => {
  try {
    const team = await readClient.fetch(
      groq`*[_type == "team"]{
        _id,
        fullName,
        "image": profile.asset->url,
        role,
        contact,
      }`
    );
    return team
  } catch (error) {
    console.log(error)
  }
}

export const getQuestions = async () => {
  try {
    const questions = await readClient.fetch(
      groq`*[_type == "questions"]{
        _id,
        question,
        answer,
      }`
    );
    return questions
  } catch (error) {
    console.log(error)
  }
}