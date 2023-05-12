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
        <p className="max-w-[511px] capitalize font-medium text-2xl">
          Protect your digital assets from cyber criminals with our cutting-edge
          cybersecurity solutions.{" "}
        </p>
        <div className="flex gap-10 justify-center m:justify-start">
          <Button variant={"primary"} style={"px-4 py-3 text-xl"}>
            Get Expert Advice
          </Button>
          <Button variant={"secondary"} style={"px-10 py-3 text-xl"}>
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
  text-5xl
  max-w-[530px]
  leading-l
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
