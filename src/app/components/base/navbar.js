"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const sections = [
  { name: "Home", route: "/#hero" },
  {
    name: "Services",
    route: "/#services",
  },
  {
    name: "FAQs",
    route: "/#FAQs",
  },
  {
    name: "Projects",
    route: "/#projects",
  },

  {
    name: "About",
    route: "/#about",
  },
  {
    name: "Contact",
    route: "/#contact",
  },
];

export default function NavBar() {
  //Active list item
  const [activeSection, setActiveSection] = useState("/#hero");
  const handleItemClick = (route) => {
    setActiveSection(route);
  };

  //Menu bg when starting scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex flex-row items-center justify-between py-5 px-20 sticky top-0 z-50">
      {/* Content left */}
      <Link href="/" className={`flex flex-row items-center justify-center gap-4 transition-all duration-200 ease-in-out ${isScrolled ? "opacity-0" : "opacity-100"}`}>
        <Image className="lg:mr-44" src="/logos/logomark_2.png" width="50" height="50" alt="3D laptop" priority />
      </Link>
      {/* List items */}
      <ul
        className={`lg:flex text-lg flex-row items-center gap-4 text-gray px-4 py-3 rounded-full ${
          isScrolled ? "bg-light bg-opacity-80 backdrop-blur-sm shadow-md transition-all duration-200 ease-in-out" : ""
        }`}
      >
        {sections.map((card, index) => (
          <Link href={card.route} key={index}>
            <li
              onClick={() => handleItemClick(card.route)}
              className={`transition-all duration-500 ease-in-out px-6 py-2 rounded-full ${activeSection === card.route ? "bg-primary-color text-light" : "hover:text-primary-color-dark"}`}
            >
              {card.name}
            </li>
          </Link>
        ))}
      </ul>
      {/* Content right */}
      <div className={`flex flex-row items-center justify-center gap-4 text-lg transition-all duration-200 ease-in-out ${isScrolled ? "opacity-0" : "opacity-100"}`}>
        <button className="px-8 py-3 rounded-lg shadow-button hover:shadow-button-two hover:-translate-y-1 bg-primary-color hover:lg:bg-primary-color-dark group transition-all duration-200 ease-in-out">
          <p className="text-light">Let&apos;s talk!</p>
        </button>
        <div className="flex flex-row gap-2 items-center text-gray">
          <span>Mode</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
