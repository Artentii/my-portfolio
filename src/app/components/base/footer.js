import Image from "next/image";
import Link from "next/link";

const addSocialNetworkItem = [
  { title: "Behance", URL: "https://www.behance.net/artentii" },
  { title: "Twitter", URL: "https://twitter.com/Artentii" },
  { title: "Github", URL: "https://github.com/Artentii" },
  { title: "LinkedIn", URL: "https://www.linkedin.com/in/marina-terentii-cebotari-4389a822b/" },
];

const addExploreItem = [
  { title: "Services", URL: "#services" },
  { title: "Projects", URL: "#work" },
  { title: "Faqs", URL: "#faqs" },
  { title: "About", URL: "#about" },
];

// const addExtraItem = [
//   { title: "Figma", URL: "https://www.behance.net/artentii" },
//   { title: "Notion", URL: "https://www.behance.net/artentii" },
// ];

export default function Footer() {
  return (
    <div className="p-5 lg:p-10 bg-white/70 dark:bg-white/30 border-t-2 border-purple-light">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
        {/* Left content */}
        <div className="flex flex-col lg:flex-row lg:gap-8 items-start">
          <div className="flex flex-row items-center gap-4">
            <Image src="/footer.png" width="100" height="100" alt="3D laptop" priority />
            <div className="flex xl:hidden">
              <div className="flex flex-col items-start gap-2 ">
                <div className="flex flex-col items-start gap-2 lg:text-lg divide-y-2 divide-purple-light">
                  <span className="text-lg lg:text-2xl font-semibold">Got an idea?</span>
                  <a className="flex flex-row items-center gap-2 cursor-pointer pt-2" href="mailto:marinaterentiicebotari@gmail.com">
                    <span>Let&apos;s work together!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 lg:w-96">
            <p>A designer who loves creating cool and usable stuff while having a good time. From Spain with love.</p>
            <p>Contact me for full-time jobs, freelance projects, or just to say hi.</p>
            <span>©Artentii 2024</span>
          </div>
        </div>

        {/* Center content */}
        <div className="hidden xl:flex">
          <div className="flex flex-col items-start gap-2 ">
            <div className="flex flex-col items-start gap-2 lg:text-lg divide-y-2 divide-purple-light">
              <span className="text-lg lg:text-2xl font-semibold">Got an idea?</span>
              <a className="flex flex-row items-center gap-2 cursor-pointer pt-2" href="mailto:marinaterentiicebotari@gmail.com">
                <span>Let&apos;s work together!</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-wrap gap-5 lg:gap-10">
          {/* Social Media */}
          <div className="flex flex-col gap-2">
            <p className="text-lg lg:text-2xl font-semibold text-purple">Say hello!</p>
            {addSocialNetworkItem.map((card, index) => (
              <a key={index} href={card.URL} target="_blank">
                <span className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out">{card.title}</span>{" "}
              </a>
            ))}
          </div>
          {/* Explore items */}
          <div className="flex flex-col gap-2">
            <p className="text-lg lg:text-2xl font-semibold text-purple">Explore</p>
            {addExploreItem.map((card, index) => (
              <a key={index} href={card.URL}>
                <span className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out">{card.title}</span>{" "}
              </a>
            ))}
          </div>
          {/* Add extra item */}
          {/* <div className="flex flex-col gap-2">
            <p className="text-lg lg:text-2xl font-semibold text-purple">More</p>
            {addExtraItem.map((card, index) => (
              <a key={index} href={card.URL} target="_blank">
                <span className=" hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out">{card.title}</span>{" "}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
