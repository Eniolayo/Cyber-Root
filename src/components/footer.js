import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import {
  ABOUT_US,
  BLOG,
  CYBERROOTSUMMIT,
  HOME,
  SERVICES,
  SERVICES_PAGES,
} from "@/config/link";

import { Heading } from "./ui";

export default function Footer() {
  return (
    <footer>
      <div className="flex gap-10 flex-wrap lg:justify-between flex-col md:flex-row items-start py-10 w-[92%] max-w-[1500px] mx-auto">
        <Image
          src="/CyberRoot Logo.png"
          alt="cyberroot Icon"
          width={200}
          height={49}
          style={{ cursor: "pointer" }}
        />
        <AboutUsSection />
        <NewsAndEvents />
        <ContactAndLegal />
        <CyberrootOffice />
        <FollowLinks />
      </div>
    </footer>
  );

  function CyberrootOffice() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          Cyberroot Office
        </Heading>
        <ul>
          <li className="underline mb-1 max-w-[210px]">
            <Link href={HOME}>
              Adamolekun Estate, Adebayo Old Takeaway, 360102, Ado Ekiti, Ekiti
            </Link>
          </li>
        </ul>
      </section>
    );
  }

  function FollowLinks() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          follow us on
        </Heading>
        <ul className="flex gap-1">
          {[
            "ic:sharp-facebook",
            "mdi:twitter",
            "ph:instagram-logo-fill",
            "ph:youtube-logo-fill",
          ].map((item) => (
            <li key={item}>
              <Link href={HOME}>
                <Icon icon={item} color="#146BDF" fontSize={"30px"} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function ContactAndLegal() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          Contact and Legal
        </Heading>

        <ul>
          {["Privacy Policy", "Terms and Conditions"].map((item) => (
            <li key={item}>
              <Link href={HOME} className="underline mb-1">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function AboutUsSection() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          about us
        </Heading>
        <ul>
          {AboutUs.map((item) => (
            <li key={item.name}>
              <Link className="underline mb-1" href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function NewsAndEvents() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          News and Events
        </Heading>
        <ul>
          {[
            { name: "Blog", link: BLOG },
            { name: "Events", link: CYBERROOTSUMMIT },
          ].map((item) => (
            <li key={item.name}>
              <Link href={item.link} className="underline mb-1">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
const AboutUs = [
  { name: "Home", link: HOME },
  { name: "About Us", link: ABOUT_US },
  { name: "Services", link: SERVICES },
];
