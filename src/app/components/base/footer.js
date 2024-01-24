import Image from "next/image";
import Link from "next/link";
import Sayhello from ".././sayhello";

const addSocialNetworkItem = [
  { title: "Behance", URL: "https://www.behance.net/artentii" },
  { title: "Twitter", URL: "https://twitter.com/Artentii" },
  { title: "Github", URL: "https://github.com/Artentii" },
  { title: "LinkedIn", URL: "https://www.linkedin.com/in/marina-terentii-cebotari-4389a822b/" },
];

const addExploreItem = [
  { title: "Home", URL: "/home" },
  { title: "Services", URL: "/services" },
  { title: "Projects", URL: "/projects" },
  { title: "About", URL: "/about" },
];

const addExtraItem = [
  { title: "Figma", URL: "https://www.behance.net/artentii" },
  { title: "Notion", URL: "https://www.behance.net/artentii" },
];

export default function Footer() {
  return (
    <div className="p-5 lg:p-10 bg-white/70 border-t-2 border-purple-light">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
        {/* Left content */}
        <div className="flex flex-col lg:flex-row xl:gap-2 items-start">
          <div className="flex flex-row items-start gap-4">
            <Image src="/footer.png" width="100" height="100" alt="3D laptop" priority />
            <div className="flex flex-col items-start gap-2 xl:hidden">
              <div className="flex flex-col items-start gap-2 lg:text-lg">
                <span className="text-lg lg:text-2xl font-semibold text-gray">Got an idea?</span>
                <hr className="h-0.5 rounded-full w-full bg-purple-light"></hr>
                <a className="flex flex-row items-center gap-2 cursor-pointer" href="mailto:marinaterentiicebotari@gmail.com">
                  <span className="text-gray-light">Let&apos;s work together!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-gray-light" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 lg:w-96">
            <p className="text-normal-gray ">A designer who loves creating cool and usable stuff while having a good time. From Spain with love.</p>
            <p className="text-gray-light ">Contact me for full-time jobs, freelance projects, or just to say hi.</p>
            <span className="">©Artentii 2024</span>
          </div>
        </div>

        {/* Center content */}
        <div className="hidden xl:flex">
          <div className="flex flex-col items-start gap-2 ">
            <div className="flex flex-col items-start gap-2 lg:text-lg divide-y-2 divide-purple-light">
              <span className="text-lg lg:text-2xl font-semibold text-gray">Got an idea?</span>
              <a className="flex flex-row items-center gap-2 cursor-pointer pt-2" href="mailto:marinaterentiicebotari@gmail.com">
                <span className="text-gray-light">Let&apos;s work together!</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-gray-light" class="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-wrap gap-5 lg:gap-10">
          {/* Social Media */}
          <div className="flex flex-col gap-2">
            <p className="text-lg lg:text-2xl font-semibold text-razzmataz text-purple">Say hello!</p>
            {addSocialNetworkItem.map((card, index) => (
              <a key={index} href={card.URL} target="_blank">
                <span className="text-gray hover:underline hover:underline-offset-4 hover:text-black transition-all duration-300 ease-in-out">{card.title}</span>{" "}
              </a>
            ))}
          </div>
          {/* Explore items */}
          <div className="flex flex-col gap-2">
            <p className="text-lg lg:text-2xl font-semibold text-purple">Explore</p>
            {addExploreItem.map((card, index) => (
              <a key={index} href={card.URL}>
                <span className="text-gray hover:underline hover:underline-offset-4 hover:text-black transition-all duration-300 ease-in-out">{card.title}</span>{" "}
              </a>
            ))}
          </div>
          {/* Add extra item */}
          <div className="flex flex-col gap-2">
            <p className="text-lg lg:text-2xl font-semibold text-purple">More</p>
            {addExtraItem.map((card, index) => (
              <a key={index} href={card.URL} target="_blank">
                <span className="text-gray hover:underline hover:underline-offset-4 hover:text-black transition-all duration-300 ease-in-out">{card.title}</span>{" "}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
