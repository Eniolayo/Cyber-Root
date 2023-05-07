import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Icon } from "@iconify/react";
import { BlogItemHeader } from "@/components/Blog";

export default function BlogItem() {
  return (
    <main>
      <Header />
      <BlogItemHeader />
      <Footer />
    </main>
  );
}
