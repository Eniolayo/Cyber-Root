import { Button, Heading, Text } from "../ui";

export default function Events() {
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
      <div className="flex gap-3 justify-center flex-wrap w-[90%] mx-auto">
        {["Webinars", "Workshops", "Seminars", "Conferences"].map((item) => (
          <Button
            style="bg-lightSilver rounded-full px-6 py-3 text-base m:text-lg uppercase"
            key={item}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap py-10 justify-center gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <EventsCard key={i} />
        ))}
      </div>
    </section>
  );
}
function EventsCard() {
  return (
    <div className="bg-summit-bg max-w-[315px] rounded-md overflow-hidden text-white bg-no-repeat bg-cover text-left p-5">
      <h5 className="uppercase font-bold text-lg">cybersummit 2023</h5>
      <h6>10-09-2023</h6>
      <p className="text-xs max-w-[230px] py-7">
        Small businesses are often targets for cyber-attacks because they are
        perceived as easy targets. A cybersecurity event designed for small
        business owners and employees can cover topics like risk management,
      </p>
      <button className="border border-white text-sm rounded-lg px-2 py-1">
        Register for free
      </button>
    </div>
  );
}
