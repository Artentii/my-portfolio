import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col lg:w-11/12 px-20 py-10 3xl:p-40" id="hero">
      <div className="flex flex-col relative">
        <Image className="hidden 2xl:flex absolute lg:top-5 3xl:bottom-56 lg:right-44 3xl:w-[200px] z-50 animate-wiggle" src="deco/stars.svg" width="80" height="80" alt="3D laptop" priority />
        <Image className="hidden 2xl:flex absolute lg:-top-8 lg:left-20 3xl:bottom-56 3xl:w-[200px]" src="deco/bubble.svg" width="100" height="90" alt="3D laptop" priority />

        <div className="relative">
          <span className="text-gray-normal text-md lg:text-lg">Hi there, I&apos;m Artentii</span>
        </div>
        <h1 className="text-[50px] lg:text-[120px] my-5 text-primary-color font-extrabold leading-none">
          Web <span className="">Developer</span> & Graphic Designer
        </h1>
        <p className=" w-3/4 text-gray-normal lg:p-0 text-md lg:text-lg my-5 lg:my-5">
          I am an enthusiastic web developer with a solid background in graphic and web design. My passion lies in turning ideas into user-friendly experiences that not only engage users but also
          enrich their lives in various ways.
        </p>
      </div>
      <div className="flex flex-col items-start gap-4 3xl:pt-10">
        <p className="text-gray-normal font-medium text-center text-md lg:text-lg">How can I help you?</p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
          <button className="px-8 lg:px-10 py-4 bg-primary-color hover:lg:bg-primary-color-dark rounded-lg lg:w-[350px] shadow-button-hero-s lg:shadow-button-hero lg:hover:-translate-y-1 lg:hover:shadow-button-job-hover transition-all duration-300 ease-in-out">
            <p className="text-light font-extralight text-md lg:text-xl">
              I need a <b>Web Developer</b>
            </p>
          </button>
          <button className="px-8 lg:px-10 py-4 bg-primary-color hover:lg:bg-primary-color-dark rounded-lg lg:w-[350px] shadow-button-hero-s lg:shadow-button-hero lg:hover:-translate-y-1 lg:hover:shadow-button-job-hover transition-all duration-300 ease-in-out">
            <p className="text-light font-extralight text-md lg:text-xl">
              I need a <b>Graphic Designer</b>
            </p>
          </button>
        </div>
      </div>

      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] z-10" src="/hero/hero_bg.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] z-50" src="/hero/hero_light.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] z-40 animate-light" src="/hero/hero_light_soft.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] z-40 animate-light" src="/hero/hero_light_dark.png" width="500" height="500" alt="3D laptop" priority />

      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] z-40" src="/hero/hero_girl.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] z-20" src="/hero/hero_sky.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] z-30" src="/hero/hero_frame.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] animate-swing z-20" src="/hero/hero_plant_one.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] animate-tree z-20" src="/hero/hero_plant_two.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] animate-float z-20" src="/hero/hero_cloud.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] z-50" src="/hero/hero_dog.png" width="500" height="500" alt="3D laptop" priority />
      <Image className="hidden 2xl:flex absolute lg:bottom-8 lg:right-6 3xl:w-[800px] animate-tail z-40" src="/hero/hero_tail.png" width="500" height="500" alt="3D laptop" priority />


      <Image className="hidden 2xl:flex absolute lg:bottom-28 3xl:bottom-56 lg:-left-5 3xl:w-[200px] animate-arrow" src="deco/arrow.svg" width="120" height="120" alt="3D laptop" priority />
    </div>
  );
}
