import Image from "next/image";

export default function BlogImage() {
  return (
    <div className="relative h-[300px] m:h-[600px]">
      <Image
        src={"/shield-and-globe.png"}
        alt="shield and globe"
        fill
        className="object-cover"
      />
    </div>
  );
}
