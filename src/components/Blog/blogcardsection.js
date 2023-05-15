import ctl from "@netlify/classnames-template-literals";
import BlogCard from "../blogcard";

export default function BlogCardSection() {
  return (
    <section className={BlogCardSectionStyle}>
      {Array.from({ length: 10 }).map((_, i) => (
        <BlogCard key={i} />
      ))}
    </section>
  );
}
const BlogCardSectionStyle = ctl(`
  w-[92%] 
  max-w-[1500px] 
  mx-auto 
  gap-5 
  py-10 
  grid 
  grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))]
  m:grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]
`);
