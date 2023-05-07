import React from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="border-b border-cornflowerBlue">
      <div className="flex items-center justify-between max-w-[1500px] w-[92%] mx-auto py-6">
        <Image
          src="/CyberRoot Logo.png"
          alt="cyberroot Icon"
          width={200}
          height={49}
          style={{ cursor: "pointer" }}
        />

        <ul className="flex items-center w-[32%] justify-between ">
          {["Services", "Events", "blogs", "training"].map((item) => (
            <li className="cursor-pointer text-xl capitalize" key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className="text-xl bg-brightNavyBlue text-white px-8 py-3 rounded-m">
          Contact Us
        </button>
        {/* <button
          className="flex flex-col h-12 w-12 border-2
           border-primary-white rounded justify-center items-center group md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 group-hover:opacity-100"
                : "group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
                : "group-hover:opacity-100"
            }`}
          />
        </button> */}
      </div>
    </header>
  );
}
