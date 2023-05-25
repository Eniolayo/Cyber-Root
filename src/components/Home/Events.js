import Link from "next/link";

import { Heading, Text } from "../ui";

export default function Events({ eventPosts }) {
  console.log(eventPosts, "eventPosts");
  return (
    <section className="text-center w-[92%] max-w-[1500px] mx-auto space-y-3">
      <Heading
        level={"h3"}
        variant={"md"}
        styles={"font-black text-brightNavyBlue"}
      >
        Events
      </Heading>
      <Text>Discover upcoming events and conferences in Cyberroot</Text>
      {/* <div className="flex gap-3 justify-center flex-wrap w-[90%] mx-auto">
        {["Webinars", "Workshops", "Seminars", "Conferences"].map((item) => (
          <Button
            style="bg-lightSilver rounded-full px-6 py-3 text-base m:text-lg uppercase"
            key={item}
          >
            {item}
          </Button>
        ))}
      </div> */}
      <div className="flex flex-wrap py-10 justify-center gap-10">
        {eventPosts.map((item, i) => (
          <EventsCard
            key={i}
            title={item.fields.eventName}
            date={item.fields.dateAndTime.slice(0, 10)}
            desc={item.fields.description}
            id={item.sys.id}
          />
        ))}
      </div>
    </section>
  );
}
function EventsCard({ title, date, desc, id }) {
  return (
    <div className="bg-summit-bg max-w-[315px] rounded-md overflow-hidden text-white bg-no-repeat bg-cover text-left p-5">
      <h5 className="uppercase font-bold text-lg">{title}</h5>
      <h6>{date}</h6>
      <p className="text-xs max-w-[230px] py-7">
        {desc.length > 210 ? `${desc.slice(0, 210)}...` : desc}
      </p>
      <Link
        href={`/events/${id}`}
        className="border border-white text-sm rounded-lg px-2 py-1"
      >
        Register for free
      </Link>
    </div>
  );
}
