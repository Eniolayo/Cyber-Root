import BlogCard from "../blogcard";

export default function BlogCardSection() {
  return (
    <section className="w-[92%] mx-auto gap-5 py-10 grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]">
      {Array.from({ length: 10 }).map((_, i) => (
        <BlogCard key={i} />
      ))}
    </section>
  );
}
