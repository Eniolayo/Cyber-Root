import React from "react";

import { Footer, Header } from "@/components";
import { Heading, Text } from "@/components/ui";

function AboutUs() {
  return (
    <main>
      <Header />
      <section className="bg-aliceBlue text-center space-y-9 py-12">
        <Heading
          level={"h2"}
          variant={"m"}
          styles={
            "border text-brightNavyBlue mx-auto w-fit px-7 py-2 rounded-m"
          }
        >
          About Us
        </Heading>
        <Heading styles={"capitalize font-black"} level={"h3"} variant={"lg"}>
          who we are
        </Heading>
        <Text variant={"m"} styles={"max-w-[780px] w-[90%] mx-auto"}>
          CyberRoot is a leading cybersecurity company dedicated to providing
          advanced solutions and comprehensive protection for businesses and
          organizations. With our team of highly skilled experts and
          cutting-edge technologies, we offer a wide range of services to
          safeguard valuable data, secure networks, and defend against cyber
          threats. We prioritize proactive defense strategies, leveraging threat
          intelligence and continuous monitoring to identify vulnerabilities and
          mitigate risks before they can be exploited.
        </Text>
        <Text
          variant={"lg"}
          styles={"font-black max-w-[820px] w-[90%] mx-auto"}
        >
          We are committed to providing strong cybersecurity measures for
          businesses, fostering awareness and resilience, and enabling growth
          through trust and protection.
        </Text>
      </section>
      <Footer />
    </main>
  );
}

export default AboutUs;
