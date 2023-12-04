import Image from "next/image";

// Components
import Gallery from "../components/gallery";

const addSocialNetwork = [
  {
    imgURL: "/github.png",
    textAlt: "Github Icon",
    URL: "https://github.com/Artentii",
  },
  {
    imgURL: "/behance.png",
    textAlt: "Behance Icon",
    URL: "https://www.behance.net/artentii",
  },
  {
    imgURL: "/linkedin.png",
    textAlt: "LinkedIn Icon",
    URL: "https://www.linkedin.com/in/marina-terentii-cebotari-4389a822b/",
  },
  {
    imgURL: "/twitter.png",
    textAlt: "Twitter Icon",
    URL: "https://twitter.com/Artentii",
  },
];

export default function About() {
  return (
    <div className="pt-5 lg:pt-10">
      <h3 className="text-6xl font-semibold text-center text-razzmataz">About</h3>
      {/* About me information */}
      <div className=" flex flex-col items-start justify-center rounded-t-full bg-antique-white lg:bg-transparent p-10 lg:py-0 px-10">
        <div className="flex flex-col items-center justify-center">
          {/* Content top */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 ">
            <Image src="/headshot.jpg" className="rounded-t-full" width={350} height={350} alt="blabla" priority />
            <div className="flex flex-col justify-center items-start lg:w-1/2">
              <div className="flex flex-col items-start gap-2">
                <div>
                  <span className="text-2xl lg:text-4xl font-semibold text-gray">Hi there, I&apos;m Marina Terentii, a graphic designer born in Moldova but living in Spain.</span>
                  <p className="lg:text-lg py-5 lg:py-10 text-gray">
                    A few years back, I started working as an English teacher after finishing my degree. However, my heart has always been connected to the world of art and design. The more I explore
                    the more curious I become, and just a few months ago I got into the universe of web design.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                {addSocialNetwork.map((card, index) => (
                  <a key={index} href={card.URL} target="_blank" className="flex flex-row gap-2">
                    <Image src={card.imgURL} alt={card.textAlt} className="mx-auto" width={40} height={40} priority />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Content bottom */}
          <div className="lg:w-4/5 pt-5 lg:pt-10 flex flex-col items-center lg:items-start">
            <p className="lg:text-lg text-gray">
              To enhance my skills, I pursued a master&apos;s degree in Graphic Design, followed by another specializing in web design with HTML5, CSS3, and JavaScript. I found out that my passion is
              the ability to infuse any creations with a unique personal touch and to solve everyday problems. Not only I like bringing ideas into life but implementing them and seeing people using
              them also gives me joy. If you&apos;e seeking a UX Engineer and Graphic Designer who is dedicated to enhancing user experiences and harnessing the power of color to create visually
              compelling designs. Together, we can explore how to make your projects shine.
            </p>
            <button className="lg:text-xl bg-razzmataz text-antique-white lg:hover:text-razzmataz lg:hover:bg-lavander-pink py-4 px-8 rounded-full mt-5 lg:my-8 transition-all duration-300 ease-in-out">
              <span>Let&apos;s start a project!</span>
            </button>
          </div>
        </div>
      </div>

      {/* When I'm not at work */}
      <div className="pt-5 lg:pt-0 px-10 lg:px-0 lg:w-3/4 mx-auto ">
        <p className="text-2xl lg:text-4xl font-semibold text-lavander-pink">When I&apos;m not at work...</p>
        <Gallery />
      </div>
    </div>
  );
}
