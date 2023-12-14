import Image from "next/image";

const addNewProjectCategory = [
  {
    number: "[01]",
    category: "Web Design",
    imgUrl: "/project_one.png",
    textAlt: "Image one",
    text: "Crafting visually appealing, user-friendly websites transforms your vision into a compelling online presence. Whether revitalizing an existing site or starting anew, I bring ideas to life.",
    button: "See Projects",
  },
  {
    number: "[02]",
    category: "Graphic Design",
    imgUrl: "/project_two.png",
    textAlt: "Image one",
    text: "Each project is unique; I collaborate closely with clients to realize their visions. My aim is to ensure your brand looks its best, whether launching or refreshing its visual identity.",
    button: "See Projects",
  },
  {
    number: "[03]",
    category: "Merchandising",
    imgUrl: "/project_three.png",
    textAlt: "Image one",
    text: "From custom apparel with your logo to branded merchandise reflecting your unique identity, I'm here to help you make a statement. My designs enhance brand recognition and engage your target audience.",
    button: "See Projects",
  },
  {
    number: "[04]",
    category: "Art Gallery",
    imgUrl: "/project_four.png",
    textAlt: "Image one",
    text: "This section reflects my profound passion for the arts in all forms. Featuring various artistic styles, from abstract to realistic, it's a space where creativity knows no limits and art knows no boundaries.",
    button: "See Projects",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <h3 className="text-6xl font-semibold text-center text-primary-color"><span className="word-deco-primary">Projects</span></h3>
      {/* Quote container */}
      <div className="pt-10">
        <div className="py-10">
          {/* <div className="relative inset-0 overflow-hidden">
            <Image src="/stickers.png" className="z-50 absolute object-cover opacity-80" width={350} height={350} alt="blabla" priority />
          </div> */}
          <div className="flex flex-col items-start justify-center w-10/12 lg:w-3/4 mx-auto gap-4 text-gray-normal">
            <p className="text-2xl lg:text-4xl ">
              &quot;Give ordinary people the right tools, and they will design and build the<b> most extraordinary things</b>.&quot;
            </p>
            <span className="lg:text-lg">Neil Gershenfeld</span>
          </div>
        </div>
      </div>

      {/* List of projects */}
      <div className="pt-10 px-10 flex flex-col items-center justify-center lg:flex-row lg:flex-wrap ">
        {addNewProjectCategory.map((card, index) => (
          <div className="flex flex-col rounded-xl m-2 lg:w-5/12 bg-white border-[3px] border-primary-color shadow-project-card" key={index} >
            <div className="flex flex-row justify-start gap-6 border-primary-color border-b-[3px]">
              <span className="text-2xl lg:text-4xl font-semibold p-5 lg:p-8 border-primary-color border-r-[3px] text-gray-light ">{card.number}</span>
              <p className="text-2xl lg:text-4xl font-semibold p-5 lg:p-8 text-gray-light">{card.category}</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Image src={card.imgUrl} alt={card.textAlt} width={180} height={180} priority />
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-center p-4 text-gray-light">{card.text}</p>
                <span className="text-light text-lg bg-primary-color hover:-translate-y-1 shadow-button hover:bg-primary-color-dark hover:shadow-button-two cursor-pointer transition-all duration-300 ease-in-out px-12 py-3 rounded-lg">
                  {card.button}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
