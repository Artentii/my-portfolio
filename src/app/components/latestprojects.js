import Image from "next/image";

const addInformationCard = [
  { textAlt: "Image One", imgUrl: "/latest_projects/latest_project_ethseer.jpg", category: "Web Design & Brand Identity", title: "Ethseer", button: "See project" },
  {
    textAlt: "Image Two",
    imgUrl: "/latest_projects/latest_project_migalabs.jpg",
    category: "Web Design & Brand Identity",
    title: "Migalabs",
    button: "See project",
  },
  {
    textAlt: "Image Three",
    imgUrl: "/latest_projects/latest_project_starknet.jpg",
    category: "Illustration & Merchandising",
    title: "Starknet",
    button: "See project",
  },
  {
    textAlt: "Image Four",
    imgUrl: "/latest_projects/latest_project_artentii.jpg",
    category: "Web Design & Brand Identity",
    title: "Artentii",
    button: "See project",
  },
];

export default function LatestProjects() {
  return (
    <div className="relative m-5 lg:mx-10">
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
      <div className=" flex flex-col items-start gap-5">
        <h3 className="text-3xl text-gray-normal font-semibold">Recent work
        </h3>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {addInformationCard.map((card, index) => (
            <div
              key={index}
              className="relative w-full group lg:hover:scale-110 transition-all duration-300 ease-in-out rounded-md shadow-md lg:shadow-none lg:hover:shadow-lg hover:z-40"
            >
              <Image className="w-full object-cover rounded-md" src={card.imgUrl} alt={card.textAlt} width={400} height={400} />
              <div className="absolute rounded-md p-10 inset-0 lg:hidden bg-gradient-to-r from-white to-transparent lg:hover:bg-gradient-to-r transition-all duration-300  ease-in-out flex lg:group-hover:flex flex-col items-start justify-center gap-4">
                <span className="uppercase font-medium text-gray-normal">{card.category}</span>
                <span className="font-semibold text-gray-normal text-4xl">{card.title}</span>
                <button className="text-white bg-primary-color lg:hover:-translate-y-1 shadow-button lg:hover:bg-white border-2 border-primary-color lg:hover:text-primary-color lg:hover:border-primary-color lg:hover:shadow-button-two cursor-pointer transition-all duration-300 ease-in-out px-8 py-2 rounded-md">
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
