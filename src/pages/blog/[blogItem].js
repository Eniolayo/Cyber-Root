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
import { useRouter } from "next/router";
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function BlogItem({ postRes, relatedPosts }) {
  console.log(postRes);
  return (
    <main>
      <Header />
      <BlogItemHeader
        category={postRes.fields.category}
        title={postRes.fields.title}
        date={postRes.fields.dateAndTime.slice(0, 10)}
        authorName={postRes.fields.authorsName}
      />
      <BlogImage item={postRes.fields.blogImage} />
      <BlogContent content={postRes.fields.mainContent} />
      <BlogTags />
      <BlogRecommendation posts={relatedPosts} />
      <Footer />
    </main>
  );
}
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });
  const posts = await res.items;

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
export async function getStaticProps({ params }) {
  const currentUrl = params.blogItem;

  const postRes = await client.getEntry(currentUrl);
  const tagRes = await client.getEntries({
    content_type: "blogPost",
    "fields.tags": "frontend",
  });
  const relatedPosts = await tagRes.items;
  return {
    props: { relatedPosts, postRes },
  };
}
