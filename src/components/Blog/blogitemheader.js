import Image from "next/image";
import { Icon } from "@iconify/react";
import { Heading } from "../ui";
import Link from "next/link";

export default function BlogItemHeader() {
  return (
    <section className="w-[80%] pt-16 pb-6 mx-auto space-y-5 m:space-y-10">
      <Heading level={"h5"} styles={"text-gray uppercase"}>
        category
      </Heading>
      <Heading
        level={"h2"}
        variant={"xl"}
        styles={"font-black text-brightNavyBlue max-w-[740px]"}
      >
        Protecting Your Business from Cyber Attacks: Tips from a Cybersecurity
        Expert
      </Heading>
      <div className="flex flex-col m:flex-row justify-between gap-5 m:items-center">
        <div className="flex gap-3 items-center">
          <div className="relative w-[98px] h-[98px] bg-gray rounded-full">
            {/* <Image src="" alt="" fill/> */}
          </div>
          <div className="space-y-1">
            <Heading level={"h5"} styles={"text-brightNavyBlue"}>
              Author’s name
            </Heading>
            <h5 className=" text-xl "></h5>
            <p className="text-gray">22-04-2023</p>
          </div>
        </div>
        <ul className="flex gap-3">
          {["ic:sharp-facebook", "mdi:twitter", "ph:instagram-logo-fill"].map(
            (item) => (
              <li key={item}>
                <Link href={"/"}>
                  <Icon icon={item} color="#146BDF" fontSize={"44px"} />
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
