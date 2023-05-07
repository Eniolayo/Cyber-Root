import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BlogCardSection, BlogHeader, ExpertAdvice } from "@/components/Blog";

export default function Blog() {
  return (
    <main>
      <Header />
      <BlogHeader />
      <ExpertAdvice />
      <BlogCardSection />
      <Footer />
    </main>
  );
}
