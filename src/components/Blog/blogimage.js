import Image from "next/image";

export default function BlogImage({ item }) {
  return (
    <div className="relative h-[300px] m:h-[600px]">
      <Image
        src={"http://" + item.fields.file.url.slice(2)}
        alt="shield and globe"
        fill
        className="object-cover"
      />
    </div>
  );
}
