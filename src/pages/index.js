import { Icon } from "@iconify/react";
import ctl from "@netlify/classnames-template-literals";
import React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  AboutUs,
  Ads,
  Blog,
  Events,
  Expertise,
  IntroContent,
  Newsletter,
  Objectives,
  Partners,
  Services,
} from "@/components/Home";
import UseShowTopBtn from "@/utils/useShowTopBtn";
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function Home({ posts, eventPosts }) {
  const [isVisible, scrollToTop] = UseShowTopBtn();

  return (
    <>
      <main>
        <Header />
        <IntroContent />
        <Ads />
        <Expertise />
        <AboutUs />
        <Objectives />
        <Services />
        <Partners />
        <Blog posts={posts} />
        <Events eventPosts={eventPosts} />
        <Newsletter />
        <Footer />
        <button className={ScrollToTopStyles(isVisible)} onClick={scrollToTop}>
          <Icon
            icon="icon-park:up"
            fontSize={"40px"}
            className="group-hover:-translate-y-1 transition-all"
          />
        </button>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });
  const eventRes = await client.getEntries({
    content_type: "summit",
  });
  const posts = await res.items;
  const eventPosts = await eventRes.items;
  return {
    props: { posts, eventPosts },
  };
}
function ScrollToTopStyles(isVisible) {
  return ctl(`
    fixed 
    bottom-6 
    right-6 
    p-1 
    bg-gray-800 
    bg-white 
    rounded-full 
    ${isVisible ? "opacity-100" : "opacity-0"} 
    transition-opacity 
    duration-500 
    group 
    border 
    border-brightNavyBlue
  `);
}
