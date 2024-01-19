import Image from "next/image";
import Link from "next/link";

const addNewProjectCategory = [
  {
    number: "[01]",
    category: "Web Design",
    imgUrl: "/projects/web-design.gif",
    textAlt: "Image one",
    text: "Crafting visually appealing, user-friendly websites transforms your vision into a compelling online presence. Whether revitalizing an existing site or starting anew, I bring ideas to life.",
    button: "See Projects",
    path: "/pages/web",
  },
  {
    number: "[02]",
    category: "Graphic Design",
    imgUrl: "/projects/graphic-design.gif",
    textAlt: "Image one",
    text: "Each project is unique. I collaborate closely with my clients to realize their visions and create a great impact. My aim is to ensure your brand looks its best, whether launching or refreshing its visual identity.",
    button: "See Projects",
    path: "/pages/graphic",
  },
  {
    number: "[03]",
    category: "Brand Identity",
    imgUrl: "/projects/shop.gif",
    textAlt: "Image one",
    text: "From custom apparel with your logo to branded merchandise reflecting your unique identity, I'm here to help you make a statement. My designs enhance brand recognition and engage your target audience.",
    button: "See Projects",
    path: "/pages/brand-identity",
  },
  {
    number: "[04]",
    category: "Art Gallery",
    imgUrl: "/projects/art-gallery.gif",
    textAlt: "Image one",
    text: "This section reflects my profound passion for the arts in all forms. Featuring various artistic styles, from abstract to realistic, it's a space where creativity knows no limits and art knows no boundaries.",
    button: "See Projects",
    path: "/pages/art-gallery",
  },
];

export default function Projects() {
  return (
    <div className="px-5 lg:px-10 flex flex-col items-center gap-5 xl:my-10" id="work">
      <h3 className="text-purple lg:text-xl bg-white/50 shadow-section px-10 py-2 border-2 border-purple rounded-full font-normal">Selected projects</h3>
      {/* List of projects */}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap">
        {addNewProjectCategory.map((card, index) => (
          <div className="flex flex-col rounded-xl my-2 lg:m-4 lg:w-5/12 bg-white border-[3px] border-purple shadow-project-card" key={index}>
            <div className="flex flex-row justify-start gap-6 border-purple border-b-[3px]">
              <span className="text-2xl lg:text-4xl font-semibold p-5 lg:p-8 border-purple border-r-[3px] text-gray-light ">{card.number}</span>
              <p className="text-2xl lg:text-4xl font-semibold p-5 lg:p-8 text-gray-light">{card.category}</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5 p-5 lg:p-10">
              <Image src={card.imgUrl} alt={card.textAlt} width={150} height={150} priority />
              <div className="flex flex-col items-center lg:items-start gap-5">
                <p className=" text-gray-light">{card.text}</p>
                <Link href={card.path} target="_blank">
                  <button className="text-white text-lg bg-purple lg:hover:-translate-y-1 shadow-button lg:hover:bg-white border-2 border-purple lg:hover:text-purple lg:hover:border-purple lg:hover:shadow-button-two cursor-pointer transition-all duration-300 ease-in-out px-10 py-3 rounded-md">
                    {card.button}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
