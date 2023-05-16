import BlogCard from "../blogcard";
import BlogCardSkeleton from "../blogcardskeleton";
import { Heading } from "../ui";

export default function BlogRecommendation({ posts = [] }) {
  return (
    <section className="bg-brightGray py-10">
      <Heading variant={"md"} level={"h4"} styles={"text-center font-black"}>
        Related Posts
      </Heading>
      <section className="w-[92%] max-w-[1500px] mx-auto gap-5 py-10 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] m:grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]">
        {posts.length == 0 &&
          Array.from({ length: 3 }).map((_, i) => <BlogCardSkeleton key={i} />)}
        {posts.length > 0 &&
          posts.map((item) => <BlogCard key={item.sys.id} item={item} />)}
      </section>
    </section>
  );
}
