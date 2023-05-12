import React from "react";
import Image from "next/image";
import Link from "next/link";
import ctl from "@netlify/classnames-template-literals";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="border-b border-cornflowerBlue relative">
      <div className="flex items-center justify-between  max-w-[1500px] w-[92%] mx-auto py-6">
        <Link href="/">
          <Image
            src="/CyberRoot Logo.png"
            alt="cyberroot Icon"
            width={200}
            height={49}
            style={{ cursor: "pointer" }}
          />
        </Link>
        {/* TODO:Review arrangement */}
        <div
          className={`w-[100%] inset-x-0 m:w-[65%] absolute top-full p-10 m:p-0 bg-cornflowerBlue m:bg-transparent m:flex m:relative justify-between z-50 ${
            isOpen ? "scale-y-100" : "scale-y-0"
          } m:scale-100 origin-top transition-all duration-300`}
        >
          <ul className="flex flex-col m:flex-row items-start m:items-center w-[50%] gap-5 justify-between ">
            {["Services", "Events", "blog", "training"].map((item) => (
              <li className="text-xl capitalize" key={item}>
                <Link href={item}>{item}</Link>
              </li>
            ))}
          </ul>
          <button className="text-xl bg-brightNavyBlue mt-5 m:mt-0 text-white px-8 py-3 rounded-m">
            Contact Us
          </button>
        </div>
        <button
          className="flex flex-col h-12 w-12 border-2
            rounded justify-center items-center group m:hidden"
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
        </button>
      </div>
    </header>
  );
}
const genericHamburgerLine = ctl(`
  h-1 
  w-6 
  my-1 
  rounded-full 
  bg-gray 
  transition 
  ease 
  transform 
  duration-300
`);
