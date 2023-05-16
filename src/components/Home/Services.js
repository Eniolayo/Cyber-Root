import React from "react";
import Image from "next/image";
import { ServicesItems } from "@/constants/servicesItems";
import { Button, Heading, Text } from "../ui";
import ctl from "@netlify/classnames-template-literals";

export default function Services() {
  const [shownServices] = React.useState(ServicesItems);
  const [itemPreviewed, setItemPreviewed] = React.useState(shownServices[0]);
  return (
    <section className="bg-azureishWhite">
      <div className="w-[92%] max-w-[1500px] mx-auto py-14">
        <div className="text-center">
          <Heading
            variant={"lg"}
            level={"h3"}
            styles={"font-black text-brightNavyBlue"}
          >
            What we offer
          </Heading>
          <Heading variant={"sm"} level={"h5"} styles={"max-w-lg mx-auto"}>
            To provide solutions that enable clients to find, fix, stop, and
            ultimately solve cyber security problems{" "}
          </Heading>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-10 py-10">
          <div className={ServiceCardWrapperStyle}>
            {shownServices.map((item, i) => (
              <ServiceCard
                key={item.name}
                name={item.name}
                index={i}
                img={item.image}
                setItemPreviewed={setItemPreviewed}
              />
            ))}
          </div>
          <div className="flex-1 space-y-6">
            <div className="relative w-full h-[340px]">
              <Image
                src="/vulnerable-preview-img.png"
                alt="vulnerable-preview-img"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
            <div className="space-y-1">
              <Heading variant={"md"} styles={"font-bold text-brightNavyBlue"}>
                {itemPreviewed.name}
              </Heading>
              <Text>{itemPreviewed.desc}</Text>
            </div>

            <Button
              variant={"secondary"}
              style={"text-xl px-10 py-3 capitalize"}
            >
              learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
  function ServiceCard({ name, img, setItemPreviewed, index }) {
    return (
      <div
        className={ServiceCardStyle(itemPreviewed, shownServices[index])}
        onClick={() => setItemPreviewed(() => shownServices[index])}
      >
        <div className="w-[50px] h-[50px] relative mx-auto">
          <Image
            src={img}
            alt={name}
            style={{
              objectFit: "contain",
            }}
            fill
          />
        </div>
        <Text styles={"font-semibold"}>{name}</Text>
      </div>
    );
  }
}
const ServiceCardWrapperStyle = ctl(`
  w-full 
  lg:w-[45%] 
  gap-4 
  justify-between 
  items-center 
  self-start 
  grid 
  grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))]
  m:grid-cols-[repeat(auto-fit,_minmax(175px,_1fr))]
`);
function ServiceCardStyle(itemPreviewed, currentShownServices) {
  return ctl(`
  w-[160px] 
  m:w-[175px] 
  h-[160px] 
  m:h-[175px] 
  rounded-lg 
  ${
    itemPreviewed.name === currentShownServices.name
      ? "border-brightNavyBlue border "
      : ""
  }
  mx-auto 
  text-center 
  
  bg-white 
  border-primary-denim 
  rounded-xl 
  grid 
  gap-5 
  py-8 
  px-1
  cursor-pointer
`);
}
