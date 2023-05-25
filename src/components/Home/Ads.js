import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Heading, Text } from "../ui";
export default function Ads() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      swipeable
      transitionTime={2000}
      interval={7000}
      showArrows={false}
      showStatus={false}
    >
      <div className="bg-brightNavyBlue bg-firstAdPicture-bg bg-cover py-10">
        <div className="max-w-[1500px] text-white text-center space-y-3 mx-auto w-[80%]">
          <Heading variant={"xl"} level={"h3"}>
            Ready to safeguard your assets and take your security to the next
            level?
          </Heading>
          <Text>Let CyberRoot protect what's important to you.</Text>
        </div>
      </div>
      <div className="bg-brightNavyBlue bg-firstAdPicture-bg bg-cover py-10">
        <div className="max-w-[1500px] text-white text-center space-y-3 mx-auto w-[80%]">
          <Heading variant={"xl"} level={"h3"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            quam.
          </Heading>
          <Text>Let CyberRoot protect what's important to you.</Text>
        </div>
      </div>
      <div className="bg-brightNavyBlue bg-firstAdPicture-bg bg-cover py-10">
        <div className="max-w-[1500px] text-white text-center space-y-3 mx-auto w-[80%]">
          <Heading variant={"xl"} level={"h3"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            quam.
          </Heading>
          <Text>Let CyberRoot protect what's important to you.</Text>
        </div>
      </div>
    </Carousel>
  );
}
