import Image from "next/image";
import { Button } from "../ui";

export default function ExpertAdvice() {
  return (
    <section className="bg-brightNavyBlue relative  h-[400px]">
      <div className="w-[92%] max-w-[1500px] mx-auto flex h-full justify-between flex-1">
        <div className="h-full grid content-center justify-items-start gap-8">
          <h4 className="capitalize text-3xl max-w-[500px] text-white">
            Protect your digital assets with our advanced cybersecurity
            solutions.
          </h4>
          <Button variant={"tertiary"} style={"px-5 py-4"}>
            Get Expert Advice
          </Button>
        </div>
        <div className="absolute right-0 w-[50%] h-[400px]">
          <Image
            src="/expert-advice-blog.png"
            alt="expert-advice-blog"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
