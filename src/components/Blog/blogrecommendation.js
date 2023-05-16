import BlogCard from "../blogcard";
import { Heading } from "../ui";

export default function BlogRecommendation() {
  return (
    <section className="bg-brightGray py-10">
      <Heading variant={"md"} level={"h4"} styles={"text-center font-black"}>
        recommended for you
      </Heading>
      <section className="w-[92%] max-w-[1500px] mx-auto gap-5 py-10 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] m:grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]">
        {Array.from({ length: 3 }).map((_, i) => (
          <BlogCard key={i} />
        ))}
      </section>
    </section>
  );
}
