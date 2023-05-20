import React from "react";
import { Heading, Text } from "../ui";

export default function Benefit({ services = [] }) {
  return (
    <section className="bg-maastrichtBlue py-12 text-white space-y-8">
      <div className="text-center mx-auto">
        <Heading level={"h4"} variant={"md"} styles={"font-black"}>
          benefits
        </Heading>
        <Text variant={"md"} styles={""}>
          How will this improve your cybersecurity posture ?
        </Text>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] content-center w-[90%] m:w-[60%] mx-auto gap-5">
        {services.map((item) => (
          <div
            key={item}
            className="bg-white bg-opacity-25 text-center px-4  py-8 rounded-m "
          >
            <Text variant={"md"} styles={"max-w-[250px] mx-auto"}>
              {item}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
