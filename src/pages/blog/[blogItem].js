import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Icon } from "@iconify/react";
import {
  BlogContent,
  BlogImage,
  BlogItemHeader,
  BlogRecommendation,
  BlogTags,
} from "@/components/Blog";
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function BlogItem({ posts }) {
  return (
    <main>
      <Header />
      <BlogItemHeader />
      <BlogImage />
      <BlogContent />
      <BlogTags />
      <BlogRecommendation posts={posts} />
      <Footer />
    </main>
  );
}
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });
  const posts = await res.items;

  //creating an array of objects
  const paths = posts.map((item) => {
    return {
      params: { blogItem: `${item.sys.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });
  const posts = await res.items;
  return {
    props: { posts },
  };
}
