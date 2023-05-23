import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
          <h3 className="text-5xl ">
            Ready to safeguard your assets and take your security to the next
            level?
          </h3>
          <p>Let CyberRoot protect what's important to you.</p>
        </div>
      </div>
      <div className="bg-brightNavyBlue bg-firstAdPicture-bg bg-cover py-10">
        <div className="max-w-[1500px] text-white text-center space-y-3 mx-auto w-[80%]">
          <h3 className="text-5xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            quam.
          </h3>
          <p>Let CyberRoot protect what's important to you.</p>
        </div>
      </div>
      <div className="bg-brightNavyBlue bg-firstAdPicture-bg bg-cover py-10">
        <div className="max-w-[1500px] text-white text-center space-y-3 mx-auto w-[80%]">
          <h3 className="text-5xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            quam.
          </h3>
          <p>Let CyberRoot what's important to you.</p>
        </div>
      </div>
    </Carousel>
  );
}
