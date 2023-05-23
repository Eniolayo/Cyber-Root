import React from "react";
import Head from "next/head";
import {
  IntroContent,
  AboutUs,
  Ads,
  Expertise,
  Objectives,
  Services,
  Partners,
  Blog,
  Newsletter,
  Events,
} from "@/components/Home";
import Header from "@/components/header";
import Footer from "@/components/footer";
import UseShowTopBtn from "@/utils/useShowTopBtn";
import { Icon } from "@iconify/react";
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
      <Head>
        <title>Cyberroot || Cyber Security consulting and IT firm</title>
        <meta
          name="description"
          content="CyberRoot International Ltd is a cyber security consulting and IT firms in Nigeria specializes in Information and intelligence gathering, managed cyber security services, strategic IT consulting, cyber."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
        <button
          className={`fixed bottom-6 right-6 p-1 bg-gray-800 bg-white rounded-full ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 group border border-brightNavyBlue`}
          onClick={scrollToTop}
        >
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
