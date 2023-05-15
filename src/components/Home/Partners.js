import React from "react";
import Image from "next/image";
import { Heading } from "../ui";

export default function Partners() {
  return (
    <div className="bg-brightNavyBlue py-10 space-y-5 text-white">
      <Heading styles={"text-center font-bold"} level={"h3"} variant={"lg"}>
        Partners
      </Heading>
      <div className="flex flex-wrap justify-center md:justify-between w-[80%] max-w-[700px] mx-auto items-center gap-5">
        <div className="bg-white p-3 rounded-m">
          <div className="w-[280px] h-[85px] relative">
            <Image
              src="/comptia_logo.png"
              alt="comptia logo"
              style={{
                objectFit: "contain",
              }}
              fill
            />
          </div>
        </div>
        <div className="bg-white p-3 rounded-m">
          <div className="w-[200px] relative h-[70px]">
            <Image
              priority
              src="/pecb-logo.svg"
              fill
              style={{
                objectFit: "contain",
              }}
              alt="pecb-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
