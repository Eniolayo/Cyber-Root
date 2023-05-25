import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "react-loading-skeleton";

export default function BlogCardSkeleton() {
  return (
    <section className="border border-spanishGray max-w-[360px] w-full mx-auto">
      <div className="relative h-[200px] m:h-[250px]">
        <Skeleton height={"100%"} />
      </div>
      <div className="p-7">
        <Skeleton width={"100px"} />
        <Skeleton />
        <Skeleton count={3} />

        <Skeleton width={"80px"} />
      </div>
    </section>
  );
}
