import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-end" id="hero">
      {/* Container homepage */}
      <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-10 px-5 pb-5 xl:p-16 3xl:p-28 relative">
        {/* <Image className="hidden 2xl:flex absolute lg:top-5 3xl:bottom-56 lg:right-60 3xl:w-[200px] z-50 animate-wiggle" src="deco/stars.svg" width="80" height="80" alt="3D laptop" priority /> */}
        {/* <Image className="hidden 2xl:flex absolute lg:-top-8 lg:left-20 3xl:bottom-56 3xl:w-[200px]" src="deco/bubble.svg" width="100" height="90" alt="3D laptop" priority /> */}
        <div className="flex flex-col gap-2">
          <span className="text-gray-normal text-md lg:text-lg">Hi there, I&apos;m Artentii</span>
          <h1 className="text-6xl lg:text-8xl 3xl:text-9xl text-primary-color font-extrabold">
            Web Developer & Graphic Designer
          </h1>
          <div className="xl:hidden">
            <Image src="/hero/hero_page.png" width="500" height="500" alt="3D laptop" priority />
          </div>
          <p className="text-gray-normal lg:text-lg hidden xl:block">
            I am an enthusiastic web developer with a solid background in graphic and web design. My passion lies in turning ideas into user-friendly experiences that not only engage users but also
            enrich their lives in various ways.
          </p>
        </div>
        {/* How can I help you section */}
        <div className="flex flex-col items-start gap-2 lg:gap-4 w-full">
          <p className="text-gray-normal text-center lg:text-left text-lg">How can I help you?</p>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full">
            <a
              href="mailto:marinaterentiicebotari@gmail.com"
              className="w-full text-white text-lg bg-primary-color lg:hover:-translate-y-1 shadow-button lg:hover:bg-white border-2 border-primary-color lg:hover:text-primary-color lg:hover:border-primary-color lg:hover:shadow-button-two cursor-pointer transition-all duration-300 ease-in-out px-8 lg:px-10 py-3 rounded-md"
            >
              <p className="font-extralight lg:text-xl text-center">
                I need a <b>Web Developer</b>
              </p>
            </a>
            <a
              href="mailto:marinaterentiicebotari@gmail.com"
              className="w-full text-white text-lg bg-primary-color lg:hover:-translate-y-1 shadow-button lg:hover:bg-white border-2 border-primary-color lg:hover:text-primary-color lg:hover:border-primary-color lg:hover:shadow-button-two cursor-pointer transition-all duration-300 ease-in-out px-8 lg:px-10 py-3 rounded-md"
            >
              <p className="font-extralight lg:text-xl text-center">
                I need a <b>Graphic Designer</b>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <Image className="3xl:w-[1200px]" src="/hero/hero_page.png" width="900" height="500" alt="3D laptop" priority />
      </div>
      {/* Animation homepage */}
      {/* <div className="bg-orange-800">
        <Image className="absolute z-10" src="/hero/hero_bg.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute z-50" src="/hero/hero_light.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute z-40 animate-light" src="/hero/hero_light_soft.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute z-40 animate-light" src="/hero/hero_light_dark.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute z-40" src="/hero/hero_girl.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute z-20" src="/hero/hero_sky.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute z-30" src="/hero/hero_frame.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute animate-swing z-20" src="/hero/hero_plant_one.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute animate-tree z-20" src="/hero/hero_plant_two.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute animate-float z-20" src="/hero/hero_cloud.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute z-50" src="/hero/hero_dog.png" width="500" height="500" alt="3D laptop" priority />
        <Image className="absolute animate-tail z-40" src="/hero/hero_tail.png" width="500" height="500" alt="3D laptop" priority />
      </div> */}

      {/* <Image className="hidden 2xl:flex absolute lg:bottom-28 3xl:bottom-56 lg:-left-5 3xl:w-[200px] animate-arrow" src="deco/arrow.svg" width="120" height="120" alt="3D laptop" priority /> */}
    </div>
  );
}
