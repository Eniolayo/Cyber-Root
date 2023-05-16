import Image from "next/image";
import { Heading, Text } from "./ui";
import Link from "next/link";

export default function BlogCard() {
  return (
    <Link
      href={"/blog/item"}
      className="border border-spanishGray max-w-[360px] mx-auto"
    >
      <div className="relative h-[200px] m:h-[250px]">
        <Image
          src="/blog-img.png"
          alt="blog-img"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="p-7">
        <Text styles={"uppercase text-gray mb-3"} isSpan={true}>
          category
        </Text>

        <Heading level={"h4"} variant={"m"} styles={"leading-6"}>
          Protecting Your Business from Cyber Attacks
        </Heading>
        <Text variant={"sm"} styles={"leading-none text-gray my-5"}>
          In today's digital age, cyber attacks are becoming more sophisticated
          and frequent, making it cruc...
        </Text>
        <Text styles={"text-gray"}>22-04-2023</Text>
      </div>
    </Link>
  );
}
