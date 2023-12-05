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
    <div className="relative mx-10">
      <Image className="absolute left-0 top-20 rotate-45 z-50" src="/new_project_bulb.png" alt="Bulb" width={100} height={100} />
      <Image className="absolute right-0 bottom-0 -rotate-45 z-50" src="/new_project_hand.png" alt="Bulb" width={120} height={120} />
      <div className="flex justify-center ">
        <div className="flex flex-col items-start py-10">
          <h3 className="z-40 absolute text-3xl text-razzmataz font-semibold">Latest projects</h3>
          <div className="flex flex-col lg:flex-row my-14 pt-20 gap-4">
            {addInformationCard.map((card, index) => (
              <div key={index} className="cursor-pointer relative group lg:hover:scale-110 transition-all duration-300 ease-in-out rounded-md shadow-md lg:shadow-none lg:hover:shadow-lg hover:z-40">
                <Image className="object-cover rounded-md" src={card.imgUrl} alt={card.textAlt} width={400} height={400} />
                <div className="absolute rounded-md p-10 inset-0 hidden lg:hover:bg-antique-white lg:hover:bg-opacity-80 transition-all duration-300 ease-in-out lg:group-hover:flex flex-col items-start gap-4">
                  <span className="uppercase font-normal text-razzmataz  ">{card.category}</span>
                  <span className="font-semibold text-gray text-4xl">{card.title}</span>
                  <button className="px-8 py-2 bg-razzmataz text-antique-white rounded-full lg:hover:bg-lavander-pink lg:hover:text-razzmataz transition-all duration-300 ease-in-out">
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
