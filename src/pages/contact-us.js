import Header from "@/components/header";
import { Heading, Text } from "@/components/ui";
import ctl from "@netlify/classnames-template-literals";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <Header />
      <main className="text-center py-10">
        <Heading
          variant={"lg"}
          styles={"font-semibold text-brightNavyBlue"}
          level={"h2"}
        >
          lets work together
        </Heading>
        <Text styles={"capitalize text-darkSilver"}>
          tell us about yourself and we’ll figure out the best solution fo you
          and your organization needs
        </Text>
        <section className="flex gap-10 max-w-[1500px] w-[92%] mx-auto py-14">
          <div className=" h-[450px] w-[40%] bg-black"></div>
          <form className="flex-1 space-y-7">
            <section className="flex gap-9">
              <div className={inputWrapperStyle}>
                <input
                  type="text"
                  name="First Name"
                  required
                  className={inputStyle}
                />
                <label htmlFor="First Name" className={inputLabelStyle}>
                  First Name
                </label>
              </div>
              <div className={inputWrapperStyle}>
                <input
                  type="text"
                  name="Last Name"
                  required
                  className={inputStyle}
                />
                <label htmlFor="Last Name" className={inputLabelStyle}>
                  Last Name
                </label>
              </div>
            </section>
            <section className="flex gap-9">
              <div className={inputWrapperStyle}>
                <input
                  type="text"
                  name="Email"
                  required
                  className={inputStyle}
                />
                <label htmlFor="Email" className={inputLabelStyle}>
                  Email
                </label>
              </div>
              <div className={inputWrapperStyle}>
                <input
                  type="text"
                  name="Phone Number"
                  required
                  className={inputStyle}
                />
                <label htmlFor="Phone Number" className={inputLabelStyle}>
                  Phone Number
                </label>
              </div>
            </section>
            <section className="space-y-3">
              <Heading level={"h4"} variant={"m"} styles={"text-left"}>
                Select Subject?
              </Heading>
              <div className="flex gap-5 flex-wrap justify-center">
                <label htmlFor="General Inquiry" className={radioLabelStyle}>
                  <input
                    type="radio"
                    name="Subject"
                    id="General Inquiry"
                    className={inputRadioStyle}
                  />
                  General Inquiry
                </label>
                <label htmlFor="Service Inquiry" className={radioLabelStyle}>
                  <input
                    type="radio"
                    name="Subject"
                    id="Service Inquiry"
                    className={inputRadioStyle}
                  />
                  Service Inquiry
                </label>
                <label
                  htmlFor="Partnership Opportunities"
                  className={radioLabelStyle}
                >
                  <input
                    type="radio"
                    name="Subject"
                    id="Partnership Opportunities"
                    className={inputRadioStyle}
                  />
                  Partnership Opportunities
                </label>
                <label
                  htmlFor="Career Opportunities"
                  className={radioLabelStyle}
                >
                  <input
                    type="radio"
                    name="Subject"
                    id="Career Opportunities"
                    className={inputRadioStyle}
                  />
                  Career Opportunities
                </label>
              </div>
            </section>
            <section className={inputWrapperStyle}>
              <textarea
                className={`${inputStyle} resize-none`}
                rows={1}
                required
              />
              <label htmlFor="Message" className={inputLabelStyle}>
                Message
              </label>
            </section>
            <button className="ml-auto bg-brightNavyBlue py-3 text-lg text-white px-10 rounded-m block w-fit">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
const inputLabelStyle = ctl(`
   absolute 
   text-lg 
   top-3 
   group-focus-within:text-base 
   peer-valid:text-base 
   peer-valid:-top-3 
   peer-valid:text-philippineGray 
   group-focus-within:text-philippineGray 
   group-focus-within:-top-3 
   transition-all 
   left-0 
   pointer-events-none
`);
const inputStyle = ctl(`
    w-full 
    block 
    pt-4 
    pb-3 
    group/item 
    outline-none 
    border-b 
    text-lg
    group-focus-within:border-brightNavyBlue 
    focus-visible:outline-0 
    peer
`);
const inputWrapperStyle = ctl(`
    relative 
    group 
    border-philippineGray 
    flex-1
`);
const inputRadioStyle = ctl(`
    w-[18px] 
    h-[18px]
`);
const radioLabelStyle = ctl(`
    text-lg 
    flex 
    justify-center 
    items-center 
    gap-1
`);
