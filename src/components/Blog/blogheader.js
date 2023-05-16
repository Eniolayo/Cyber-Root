import Image from "next/image";
import { Heading, Text } from "../ui";
import Link from "next/link";

export default function BlogHeader(posts) {
  return (
    <section className="flex flex-col m:flex-row mt-20 w-[92%] max-w-[1500px] mx-auto gap-10 items-center mb-5">
      <Link
        href={"/blog/" + posts.posts.sys.id}
        className="relative h-[310px] m:h-[450px] w-full m:w-[58%]"
      >
        <Image
          src={
            "http://" + posts.posts.fields.blogImage.fields.file.url.slice(2)
          }
          alt={posts.posts.fields.blogImage.fields.title}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </Link>
      <Link
        href={"/blog/" + posts.posts.sys.id}
        className="flex-1 space-y-2 m:space-y-6"
      >
        <Heading
          variant={"md"}
          level={"h3"}
          styles={"text-brightNavyBlue leading-8"}
        >
          {posts.posts.fields.title}
        </Heading>
        <Text styles={"text-gray"}>
          {posts.posts.fields.mainContent.slice(0, 100) + "..."}
        </Text>
        <Text styles={"text-gray"}>
          {posts.posts.fields.dateAndTime.slice(0, 10)}
        </Text>
      </Link>
    </section>
  );
}
