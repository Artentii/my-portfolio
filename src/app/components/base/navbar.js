"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

const sections = [
  { name: "Home", route: "/" },
  {
    name: "Services",
    route: "/#services",
  },
  {
    name: "Work",
    route: "/#work",
  },
  {
    name: "FAQs",
    route: "/#faqs",
  },
  {
    name: "About",
    route: "/#about",
  },
];

export default function NavBar() {
  //Active list item
  const [activeSection, setActiveSection] = useState("/");
  const handleItemClick = (route) => {
    setActiveSection(route);
  };

  //Menu bg when starting scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex flex-row items-center justify-between pt-5 px-5 md:px-20 sticky top-0 z-50">
      {/* Content left */}
      <Link href="/" className={`flex flex-row items-center justify-center gap-4 transition-all duration-100 ease-in-out ${isScrolled ? "opacity-0" : "opacity-100"}`}>
        <Image className="lg:mr-44 w-10 xl:w-[50px]" src="/logos/logomark_2.png" width="50" height="50" alt="3D laptop" priority />
      </Link>
      {/* List items */}
      <ul
        className={`hidden xl:flex text-lg flex-row items-center gap-4  px-4 py-3 rounded-full  ${
          isScrolled ? "bg-light/80 dark:bg-dark/80 backdrop-blur-sm shadow-md transition-all duration-200 ease-in-out" : ""
        }`}
      >
        {sections.map((card, index) => (
          <Link href={card.route} key={index}>
            <li
              onClick={() => handleItemClick(card.route)}
              className={`transition-all duration-500 ease-in-out px-6 py-2 rounded-full ${activeSection === card.route ? "bg-purple text-white" : "hover:text-purple-dark"}`}
            >
              {card.name}
            </li>
          </Link>
        ))}
      </ul>
      {/* Content right */}
      <div className={`flex flex-row items-center justify-center gap-4 lg:text-lg transition-all duration-200 ease-in-out ${isScrolled ? "opacity-0" : "opacity-100"}`}>
        <a
          href="mailto:marinaterentiicebotari@gmail.com"
          className="hidden xl:flex text-white bg-purple lg:hover:-translate-y-1 shadow-button lg:hover:bg-white border-2 border-purple lg:hover:text-purple lg:hover:border-purple lg:hover:shadow-button-two cursor-pointer transition-all duration-300 ease-in-out px-8 lg:px-10 py-2 lg:py-3 rounded-md"
        >
          <p>Let&apos;s talk!</p>
        </a>
        <ThemeSwitcher/>
      </div>
    </nav>
  );
}
