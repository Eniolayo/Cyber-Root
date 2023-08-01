import Image from "next/image";
import Link from "next/link";

import { BLOG_PAGES } from "@/config/link";

import { Heading, Text } from "./ui";

export default function BlogCard({ item }) {
  return (
    <Link
      href={BLOG_PAGES(item.sys.id)}
      className="border border-spanishGray max-w-[360px] w-full mx-auto"
    >
      <div className="relative h-[200px] m:h-[250px]">
        <Image
          src={"http://" + item.fields.blogImage.fields.file.url.slice(2)}
          alt={item.fields.blogImage.fields.title}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="p-7">
        <Text styles={"uppercase text-gray mb-3"} isSpan={true}>
          {item.fields.category}
        </Text>

        <Heading level={"h4"} variant={"m"} styles={"leading-6"}>
          {item.fields.title}
        </Heading>
        <Text variant={"sm"} styles={"leading-none text-gray my-5"}>
          {item.fields.mainContent.slice(0, 100) + "..."}
        </Text>
        <Text styles={"text-gray"}>{item.fields.dateAndTime.slice(0, 10)}</Text>
      </div>
    </Link>
  );
}
