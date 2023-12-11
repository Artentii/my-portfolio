import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col lg:w-11/12 px-20 py-10 3xl:p-40" id="hero">
      <div className="flex flex-col relative">
        <span className="text-gray-normal text-md lg:text-lg">Hi there, I&apos;m Artentii</span>
        <h1 className="text-[50px] lg:text-[120px] my-5 text-primary-color font-extrabold leading-none">
          Web <span className=" text-">Developer</span> & Graphic Designer
        </h1>
        <p className=" w-3/4 text-gray-normal lg:p-0 text-md lg:text-lg my-5 lg:my-5">
          I am an enthusiastic web developer with a solid background in graphic and web design. My passion lies in turning ideas into user-friendly experiences that not only engage users but also
          enrich their lives in various ways.
        </p>
      </div>
      <div className="flex flex-col items-start gap-4 ">
        <p className="text-gray-normal text-center text-md lg:text-lg">How can I help you?</p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
          <button className="px-8 lg:px-10 py-4 bg-primary-color hover:lg:bg-primary-color-dark rounded-xl lg:w-[350px] shadow-button-hero-s lg:shadow-button-hero lg:hover:-translate-y-1 lg:hover:shadow-button-job-hover transition-all duration-300 ease-in-out">
            <p className="text-light font-extralight text-md lg:text-xl">
              I need a <b>Web Developer</b>
            </p>
          </button>
          <button className="px-8 lg:px-10 py-4 bg-primary-color hover:lg:bg-primary-color-dark rounded-xl lg:w-[350px] shadow-button-hero-s lg:shadow-button-hero lg:hover:-translate-y-1 lg:hover:shadow-button-job-hover transition-all duration-300 ease-in-out">
            <p className="text-light font-extralight text-md lg:text-xl">
              I need a <b>Graphic Designer</b>
            </p>
          </button>
        </div>
      </div>
      <Image className="absolute lg:bottom-8 lg:right-0 3xl:w-[800px]" src="/hero_girl.png" width="500" height="500" alt="3D laptop" priority />
      {/* <Image className="absolute lg:bottom-24 lg:left-2 rotate-45 3xl:w-[200px] z-50" src="deco/twisted_arrow.svg" width="150" height="150" alt="3D laptop" priority /> */}
    </div>
  );
}
