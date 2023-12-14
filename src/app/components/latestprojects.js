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
    <div className="relative m-10">
      {/* <Image className="absolute -left-16 -rotate-12 top-10 z-50" src="/deco/bulb.svg" alt="Bulb" width={150} height={150} /> */}
      {/* <Image className="absolute right-0 bottom-0 -rotate-45 z-50" src="/new_project_hand.png" alt="Bulb" width={150} height={120} /> */}
      <div>
        <Image className="absolute -top-10 left-56 z-50" src="/deco/lines.svg" alt="Bulb" width={90} height={80} />
        <h3 className="text-4xl text-gray-normal font-semibold">Latest projects</h3>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col items-start">
          <div className="flex flex-col lg:flex-row my-10 gap-4">
            {addInformationCard.map((card, index) => (
              <div
                key={index}
                className="relative group lg:hover:scale-110 3xl:hover:scale-125 transition-all duration-300 ease-in-out rounded-md shadow-md lg:shadow-none lg:hover:shadow-lg hover:z-40"
              >
                <Image className="object-cover rounded-md" src={card.imgUrl} alt={card.textAlt} width={400} height={400} />
                <div className="absolute rounded-md p-10 inset-0 hidden lg:hover:bg-white lg:hover:bg-opacity-80 transition-all duration-300 ease-in-out lg:group-hover:flex flex-col items-start gap-4">
                  <span className="uppercase font-normal text-primary-color-dark">{card.category}</span>
                  <span className="font-semibold text-gray-normal text-4xl">{card.title}</span>
                  <button className="px-8 py-2 bg-primary-color shadow-button-hero-s text-light rounded-full lg:hover:bg-primary-color-dark lg:hover:-translate-y-1 lg:hover:shadow-button-hero transition-all duration-300 ease-in-out">
                    {card.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
