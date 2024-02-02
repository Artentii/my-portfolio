import Image from "next/image";

// Components
import Gallery from "../../components/gallery";
import SectionLabel from "../../components/SectionLabel";

const addSocialNetwork = [
  {
    imgURL: "/about/github.svg",
    textAlt: "Github Icon",
    URL: "https://github.com/Artentii",
  },
  {
    imgURL: "/about/behance.svg",
    textAlt: "Behance Icon",
    URL: "https://www.behance.net/artentii",
  },
  {
    imgURL: "/about/linkedin.svg",
    textAlt: "LinkedIn Icon",
    URL: "https://www.linkedin.com/in/marina-terentii-cebotari-4389a822b/",
  },
  {
    imgURL: "/about/twitter-x.svg",
    textAlt: "Twitter Icon",
    URL: "https://twitter.com/Artentii",
  },
];

export default function About() {
  return (
    <div className="lg:m-10 mx-5 my-10 py-5 rounded-md lg:py-10 flex flex-col items-center bg-white/70 dark:bg-white/30" id="about">
      <SectionLabel>About</SectionLabel> 
      {/* About me information */}
      <div className=" flex flex-col items-start justify-center ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20">
            <div className="flex flex-col items-center gap-4">
              {/* Content left */}
              <div className="relative">
                <Image src="/about/Headshot.jpg" alt="Girl with a brush" width={300} height={300} priority className="rounded-full border-[3px] border-gray" />
                <Image src="/about/heart_about.gif" alt="Girl with a brush" width={125} height={125} priority className="absolute top-0 right-0 rotate-12 " />
              </div>
              <div className="flex flex-row items-center gap-3 p-4">
                {addSocialNetwork.map((card, index) => (
                  <a key={index} href={card.URL} target="_blank" className="p-3 flex flex-row border-2 border-gray bg-purple-light/50 dark:bg-white hover:bg-white hover:dark:bg-purple-light rounded-full transition-all duration-300 ease-in-out">
                    <Image src={card.imgURL} alt={card.textAlt} className="mx-auto" width={30} height={30} priority />
                  </a>
                ))}
              </div>
            </div>
            {/* Content right */}
            <div className="flex flex-col justify-center items-start lg:w-1/2 px-5">
              <div className="flex flex-col lg:items-start items-center gap-2">
                <div>
                  <div className="flex flex-col gap-1">
                    <span className="lg:text-lg ">Hi there,</span>
                    <span className="text-2xl lg:text-4xl">
                      I&apos;m <span className="word-deco-s">Marina Terentii</span>.
                    </span>{" "}
                  </div>
                  <p className="lg:text-lg py-5 lg:py-10 ">
                    My heart has always been connected to the world of art and design. To enhance my skills, I pursued a master&apos;s degree in Graphic and Web Design. I found out that my passion is
                    the ability to infuse any creations with a unique personal touch and to solve everyday problems. Not only I like bringing ideas into life but implementing them and seeing people
                    using them also gives me joy.
                  </p>
                </div>
                <a href="mailto:marinaterentiicebotari@gmail.com" className="text-white text-lg bg-purple lg:hover:-translate-y-1 shadow-button lg:hover:bg-white border-2 border-purple lg:hover:text-purple lg:hover:border-purple lg:hover:shadow-button-two cursor-pointer transition-all duration-300 ease-in-out px-10 py-3 rounded-md">
                  <span>Let&apos;s start a project!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image className="mx-auto hidden lg:block" src="/deco/divider.png" alt="Bulb" width={1400} height={100} />
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
      {/* When I'm not at work - gallery*/}
      <div className="px-5 lg:px-0 mx-auto md:w-3/4">
        <p className="text-normal-gray text-xl lg:text-3xl pb-5">When I&apos;m not at work...</p>
        <Gallery />
      </div>
    </div>
  );
}
