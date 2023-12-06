export default function Hero() {
  return (
    <div className=" flex flex-col justify-center items-center p-10">
      <span className="text-gray text-md lg:text-lg">Hi there, I&apos;m Artentii</span>
      <h1 className="text-[50px] lg:text-[100px] my-5 text-razzmataz font-extrabold lg:w-10/12 text-center leading-none">Web Developer and Graphic Designer</h1>
      <p className="text-gray lg:p-0 lg:w-1/2 text-md lg:text-lg text-center my-5 lg:my-10">
        I am an enthusiastic web developer with a solid background in graphic and web design. My passion lies in turning ideas into user-friendly experiences that not only engage users but also enrich
        their lives in various ways.
      </p>
      <div className="flex flex-col gap-4">
        <p className="text-gray text-center text-md lg:text-lg">How can I help you?</p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
          <button className="px-8 lg:px-10 py-4 bg-razzmataz rounded-xl lg:w-[350px] shadow-button-job-s lg:shadow-button-job lg:hover:-translate-y-1 lg:hover:shadow-button-job-active transition-all duration-300 ease-in-out">
            <p className="text-pale-page text-md lg:text-xl">
              I need a <b>Web Developer</b>
            </p>
          </button>
          <button className="px-8 lg:px-10 py-4 bg-razzmataz rounded-xl lg:w-[350px] shadow-button-job-s lg:shadow-button-job lg:hover:-translate-y-1 lg:hover:shadow-button-job-active transition-all duration-300 ease-in-out">
            <p className="text-pale-page text-md lg:text-xl">
              I need a <b>Graphic Designer</b>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
