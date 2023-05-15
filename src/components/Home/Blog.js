import Image from "next/image";
import BlogCard from "../blogcard";
import { Heading, Text } from "../ui";

export default function Blog() {
  return (
    <section className="py-10 w-[92%] max-w-[1500px] mx-auto space-y-10">
      <div className="text-center max-w-2xl space-y-3 mx-auto">
        <Heading styles={"text-brightNavyBlue"} level={"h3"} variant={"lg"}>
          Blog
        </Heading>
        <Text variant={"md"}>
          Stay informed on the latest news and trends in cybersecurity to better
          protect your data and assets from potential threats.
        </Text>
      </div>
      <div className="flex justify-between flex-wrap gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <BlogCard key={i} />
        ))}
      </div>
    </section>
  );
}
