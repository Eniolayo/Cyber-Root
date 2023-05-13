import Image from "next/image";
import { Button } from "../ui";

export default function Expertise() {
  return (
    <section className="flex w-[92%] flex-col-reverse lg:flex-row max-w-[1500px] mx-auto items-center py-12 justify-between">
      <div className="flex-1 mt-20 lg:mt-0 flex flex-col items-start gap-4">
        <h3 className="capitalize text-brightNavyBlue font-black text-4xl max-w-md">
          experience the expertise of cyberroot{" "}
        </h3>
        <p className="text-xl lg:max-w-lg">
          CyberRoot International Ltd is a cyber security consulting and IT
          firms in Nigeria specializes in Information and intelligence
          gathering, managed cyber security services, strategic IT consulting,
          cyber.
        </p>
        <Button variant={"secondary"} style="px-10 py-3">
          Learn More
        </Button>
      </div>
      <div className="flex-1 ">
        <div className="relative w-[414px] before:block before:absolute before:bg-brightNavyBlue -translate-x-7 before:translate-x-7 before:translate-y-7 before:rounded-bl-large before:h-full before:w-full h-[322px] ml-auto">
          <Image
            src="/man-in-showing-expertise.png"
            alt="man-in-showing-expertise"
            fill
          />
        </div>
      </div>
    </section>
  );
}
