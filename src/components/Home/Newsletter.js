import ctl from "@netlify/classnames-template-literals";

import { Button, Heading, Text } from "../ui";

export default function Newsletter() {
  return (
    <div className="bg-brightNavyBlue">
      <div className={NewsletterWrapperStyle}>
        <Heading variant={"lg"} styles={"font-black"} level={"h3"}>
          subscribe to our newsletter
        </Heading>
        <Text styles={"max-w-[653px] mx-auto"}>
          Stay Informed and Protected from Cyber Threats - Subscribe to Our
          Cybersecurity Newsletter Now
        </Text>
        <div className={InputWrapperStyle}>
          <input
            type="text"
            placeholder="Enter your email address..."
            className={InputStyle}
          />
          <Button variant={"secondary"} style={ButtonStyle}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
const NewsletterWrapperStyle = ctl(`
  max-w-[987px] 
  text-white 
  py-16 
  rounded-xl 
  w-[90%] 
  mx-auto 
  text-center 
  grid 
  gap-3
`);
const InputWrapperStyle = ctl(`
  flex 
  w-fit 
  flex-col 
  gap-5 
  s:gap-0 
  s:flex-row 
  mx-auto 
  items-center 
  rounded-md 
  s:bg-white 
  p-1
`);

const InputStyle = ctl(`
  text-black 
  placeholder:text-[#000000b2] 
  bg-white 
  text-sm
  m:text-base
  s:bg-transparent 
  py-3 
  px-3 
  s:rounded-tl-md 
  s:rounded-bl-md 
  rounded-md
`);

const ButtonStyle = ctl(`
  s:text-base 
  border-white 
  border 
  px-4 
  py-2
`);
