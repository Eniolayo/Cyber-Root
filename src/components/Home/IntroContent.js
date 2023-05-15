import Image from "next/image";
import ctl from "@netlify/classnames-template-literals";
import { Button } from "../ui";

export default function IntroContent() {
  return (
    <div className={introSectionWrapperStyle}>
      <div className={IntroTextSectionStyle}>
        <h2 className={mainSectionTextStyle}>
          Leading the charge against{" "}
          <span className="font-black">cyber threats.</span>
        </h2>
        <p className="max-w-[450px] m:max-w-[511px] capitalize font-medium text-xl m:text-2xl">
          Protect your digital assets from cyber criminals with our cutting-edge
          cybersecurity solutions.{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 justify-center m:justify-start">
          <Button
            variant={"primary"}
            style={"px-3 m:px-4 py-2 m:py-3 text-base m:text-lg lg:text-xl"}
          >
            Get Expert Advice
          </Button>
          <Button
            variant={"secondary"}
            style={"px-10 py-3 text-base m:text-lg lg:text-xl"}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="relative w-[490px] h-[492px] hidden m:block">
        <Image src="/intro-person-image.png" alt="cyberroot Icon" fill />
      </div>
    </div>
  );
}
const IntroTextSectionStyle = ctl(`
  flex 
  flex-col 
  gap-8 
  justify-start 
`);
const mainSectionTextStyle = ctl(`
  text-4xl
  m:text-5xl
  max-w-[430px]
  lg:max-w-[530px]
  leading-9
  lg:leading-l
  capitalize
`);
const introSectionWrapperStyle = ctl(`
  max-w-[1500px] 
  flex 
  justify-between 
  py-10 
  items-center 
  w-[92%] 
  mx-auto
`);
