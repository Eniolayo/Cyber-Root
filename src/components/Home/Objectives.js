import { Icon } from "@iconify/react";
import ctl from "@netlify/classnames-template-literals";

import { ObjectivesItems } from "@/constants";

import { Text } from "../ui";
import Heading from "../ui/Heading";

export default function Objectives() {
  return (
    <div className={ObjectivesWrapperStyle}>
      {ObjectivesItems.map((item) => (
        <ObjectivesCard
          key={item.heading}
          heading={item.heading}
          paragraph={item.paragraph}
          icon={item.icon}
        />
      ))}
    </div>
  );

  function ObjectivesCard({ heading, paragraph, icon }) {
    return (
      <div className={ObjectivesCardWrapperStyle}>
        <div className={ObjectiveDecoratorStyle}>
          <span className={ObjectiveInnerDecoratorStyle}>
            <Icon icon={icon} fontSize={"50px"} color="white" />
          </span>
        </div>
        <Heading level={"h4"} variant={"md"}>
          {heading}
        </Heading>
        <Text variant={"m"}>{paragraph}</Text>
      </div>
    );
  }
}

const ObjectivesWrapperStyle = ctl(`
  flex 
  w-[92%] 
  flex-wrap 
  justify-center 
  gap-14 
  max-w-[1500px] 
  mx-auto 
  py-16
`);
const ObjectivesCardWrapperStyle = ctl(`
  bg-azureishWhite 
  max-w-[370px] 
  space-y-8 
  relative 
  text-center 
  px-14 
  pt-10 
  pb-20 
  rounded-large
`);

const ObjectiveDecoratorStyle = ctl(`
  bg-paleCornflowerBlue 
  block 
  absolute 
  -top-10 
  right-[50%] 
  w-[100px] 
  h-[100px] 
  translate-x-[50%] 
  z-50 
  rounded-full
`);
const ObjectiveInnerDecoratorStyle = ctl(`
  bg-brightNavyBlue 
  rounded-full 
  w-[80px] 
  h-[80px] 
  absolute 
  top-2 
  left-[50%] 
  -translate-x-[50%] 
  flex 
  justify-center 
  items-center
`);
