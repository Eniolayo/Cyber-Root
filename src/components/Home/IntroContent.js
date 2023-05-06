import Image from "next/image";
import ctl from "@netlify/classnames-template-literals";

export default function IntroContent() {
  return (
    <div className="max-w-[1500px] flex justify-between py-5 items-center w-[92%] mx-auto">
      <div className="flex flex-col gap-8 justify-start">
        <h2 className={mainSectionTextStyle}>
          Leading the charge against{" "}
          <span className="font-black">cyber threats.</span>
        </h2>
        <p className="max-w-[511px] capitalize font-medium text-2xl">
          Protect your digital assets from cyber criminals with our cutting-edge
          cybersecurity solutions.{" "}
        </p>
        <div className="flex gap-10">
          <button className="text-brightNavyBlue px-4 py-3 rounded-m text-xl border border-brightNavyBlue">
            Get Expert Advice
          </button>
          <button className="text-xl bg-brightNavyBlue text-white px-10 py-3 rounded-m">
            Contact Us
          </button>
        </div>
      </div>
      <div className="relative w-[514px]  h-[492px]">
        <Image src="/intro-person-image.png" alt="cyberroot Icon" fill />
      </div>
    </div>
  );
}
const mainSectionTextStyle = ctl(`
  text-5xl
  max-w-[530px]
  leading-l
  capitalize
`);
