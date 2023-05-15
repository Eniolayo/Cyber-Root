import Image from "next/image";
import { Heading, Text } from "../ui";

export default function BlogHeader() {
  return (
    <section className="flex flex-col m:flex-row mt-20 w-[92%] max-w-[1500px] mx-auto gap-10 items-center mb-5">
      <div className="relative h-[310px] m:h-[450px] w-full m:w-[58%]">
        <Image
          src="/blog-img.png"
          alt="blog-img"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="flex-1 space-y-2 m:space-y-6">
        <Heading
          variant={"md"}
          level={"h3"}
          styles={"text-brightNavyBlue leading-8"}
        >
          Protecting Your Business from Cyber Attacks: Tips from a Cybersecurity
          Expert
        </Heading>
        <Text styles={"text-gray"}>
          In today's digital age, cyber attacks are becoming more sophisticated
          and frequent, making it cruc...
        </Text>
        <Text styles={"text-gray"}>22-04-2023</Text>
      </div>
    </section>
  );
}
