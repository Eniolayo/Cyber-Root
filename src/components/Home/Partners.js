import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Heading } from "../ui";

export default function Partners() {
  return (
    <div className="bg-brightNavyBlue py-10 space-y-5 text-white">
      <Heading styles={"text-center font-bold"} level={"h3"} variant={"lg"}>
        Partners
      </Heading>
      <div className="flex flex-wrap justify-center md:justify-between w-[80%] max-w-[700px] mx-auto items-center gap-5">
        <div className="bg-white p-3 rounded-m">
          <Link
            href="https://www.comptia.org/"
            className="w-[280px] h-[85px] relative block"
          >
            <Image
              src="/comptia_logo.png"
              alt="comptia logo"
              style={{
                objectFit: "contain",
              }}
              fill
            />
          </Link>
        </div>
        <div className="bg-white p-3 rounded-m">
          <Link
            href="https://pecb.com/"
            className="w-[200px] relative h-[70px] block"
          >
            <Image
              priority
              src="/pecb-logo.svg"
              fill
              style={{
                objectFit: "contain",
              }}
              alt="pecb-logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
