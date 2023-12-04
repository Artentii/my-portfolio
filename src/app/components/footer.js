import Image from "next/image";

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
  { title: "Contact", URL: "/contact" },
];

const addExtraItem = [
  { title: "Figma", URL: "https://www.behance.net/artentii" },
  { title: "Notion", URL: "https://www.behance.net/artentii" },
];

export default function Footer() {
  return (
    <div className="bg-light-lavander-pink p-5 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-around">
        {/* Left content */}
        <div className="flex flex-col items-start gap-2 lg:w-1/2">
          <Image src="/logos/primarylogo.png" width="120" height="120" alt="3D laptop" priority />
          <p className="text-gray lg:text-lg">UX Engineer and graphic designer turning ideas into user-friendly experiences that not only engage users but also enrich their lives in various ways.</p>
          <div className="flex flex-row items-center gap-2 text-razzmataz hover:underline hover:underline-offset-4 transition-none duration-300 ease-in-out">
            <span className="lg:text-lg">marinaterentiicebotari@gmail.com</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </div>
        </div>
        {/* Right content */}
        <div className="flex flex-wrap gap-5 lg:gap-10">
          {/* Social Media */}
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold text-razzmataz">Social</p>
            {addSocialNetworkItem.map((card, index) => (
              <a key={index} href={card.URL} target="_blank">
                <span className="text-gray hover:underline hover:underline-offset-4 hover:text-black transition-all duration-300 ease-in-out">{card.title}</span>{" "}
              </a>
            ))}
          </div>
          {/* Explore items */}
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold text-razzmataz">Explore</p>
            {addExploreItem.map((card, index) => (
              <a key={index} href={card.URL}>
                <span className="text-gray hover:underline hover:underline-offset-4 hover:text-black transition-all duration-300 ease-in-out">{card.title}</span>{" "}
              </a>
            ))}
          </div>
          {/* Add extra item */}
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold text-razzmataz">More</p>
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
