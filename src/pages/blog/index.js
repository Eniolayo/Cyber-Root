import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BlogCardSection, BlogHeader, ExpertAdvice } from "@/components/Blog";
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <main>
      <Header />
      <BlogHeader posts={posts[posts.length - 1]} />
      <ExpertAdvice />
      <BlogCardSection posts={posts} />
      <Footer />
    </main>
  );
}
const getRelatedBlogPosts = async ({ tag }) => {
  const response = await client.getEntries({
    content_type: "blogPost",
    "fields.tags": tag,
  });

  return response.items;
};

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });
  const posts = await res.items;
  return {
    props: { posts },
  };
}
