import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BlogHeader, ExpertAdvice } from "@/components/Blog";
import BlogCard from "@/components/blogcard";

export default function Blog() {
  return (
    <main>
      <Header />
      <BlogHeader />
      <ExpertAdvice />
      <section className="w-[92%] mx-auto gap-5 py-10 grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]">
        {Array.from({ length: 10 }).map((_, i) => (
          <BlogCard key={i} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
