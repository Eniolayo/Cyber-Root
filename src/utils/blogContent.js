// const contentful = require("contentful");
import { createClient } from "contentful";

const client = createClient({
  // const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "blogPost",
  });

  return response.items;
};
export const getRelatedBlogPosts = async ({ tag }) => {
  const response = await client.getEntries({
    content_type: "blogPost",
    "fields.tags": tag,
  });

  return response.items;
};
