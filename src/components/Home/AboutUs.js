import Image from "next/image";
import { Button, Text } from "../ui";
import Heading from "../ui/Heading";
import ctl from "@netlify/classnames-template-literals";

export default function AboutUs() {
  return (
    <section className={AboutUsSectionWrapperStyle}>
      <div className="flex-1 mx-auto">
        <div className={ImageSectionWrapperStyle}>
          <Image src="/about-us.png" alt="about-us" fill />
        </div>
      </div>
      <div className="flex-1 flex flex-col mt-20 lg:mt-0 items-start gap-4 lg:max-w-lg">
        <Heading
          variant={"lg"}
          styles={"text-brightNavyBlue font-black max-w-md"}
          level={"h3"}
        >
          About us
        </Heading>
        <Heading variant={"md"} styles={"font-bold"} level={"h4"}>
          To make the cyber world a better and safer place
        </Heading>
        <Text variant={"m"} styles={"lg:max-w-lg"}>
          To provide solutions that enable clients to find, fix, stop, and
          ultimately solve cyber security problems across their entire
          enterprise and product portfolios.
        </Text>
        <Button variant={"secondary"} style="px-10 py-3">
          Discover More
        </Button>
      </div>
    </section>
  );
}
const AboutUsSectionWrapperStyle = ctl(`
  flex 
  flex-col 
  lg:flex-row 
  w-[92%] 
  max-w-[1500px] 
  mx-auto 
  lg:items-center 
  py-12 
  justify-between
`);
const ImageSectionWrapperStyle = ctl(`
  relative 
  w-[300px] 
  s:w-[414px] 
  before:block 
  before:absolute 
  before:bg-brightNavyBlue 
  translate-x-7 
  before:-translate-x-7 
  before:translate-y-7 
  before:rounded-br-large 
  before:h-full 
  before:w-full 
  h-[232px] 
  s:h-[322px] 
  mr-auto
`);
