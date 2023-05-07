import Image from "next/image";

export default function Blog() {
  return (
    <section className="py-10 w-[92%] max-w-[1500px] mx-auto space-y-10">
      <div className="text-center max-w-2xl space-y-3 mx-auto">
        <h3 className="text-3xl text-brightNavyBlue">Blog</h3>
        <p className="text-lg">
          Stay informed on the latest news and trends in cybersecurity to better
          protect your data and assets from potential threats.
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="border border-spanishGray max-w-[380px]" key={i}>
            <div className="relative h-[250px]">
              <Image
                src="/blog-img.png"
                alt="blog-img"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div className="p-10">
              <span className="uppercase text-gray mb-3">category</span>
              <h4 className="text-2xl leading-6">
                Protecting Your Business from Cyber Attacks
              </h4>
              <p className="text-gray leading-none text-sm my-5">
                In today's digital age, cyber attacks are becoming more
                sophisticated and frequent, making it cruc...
              </p>
              <p className="text-gray">22-04-2023</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
