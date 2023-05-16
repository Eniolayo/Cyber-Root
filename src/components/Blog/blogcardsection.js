import ctl from "@netlify/classnames-template-literals";
import BlogCard from "../blogcard";
import BlogCardSkeleton from "../blogcardskeleton";

export default function BlogCardSection({ posts = [] }) {
  return (
    <section className={BlogCardSectionStyle}>
      {posts.length == 0 &&
        Array.from({ length: 10 }).map((_, i) => <BlogCardSkeleton key={i} />)}
      {posts.length > 0 &&
        posts.map((item) => <BlogCard key={item.sys.id} item={item} />)}
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
