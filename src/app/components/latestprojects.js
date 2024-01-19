import Image from "next/image";

const addInformationCard = [
  { textAlt: "Image One", imgUrl: "/latest_projects/latest_project_ethseer.jpg", category: ["Web design", "Graphic design", "Brand identity"], title: "Ethseer" },
  {
    textAlt: "Image Two",
    imgUrl: "/latest_projects/latest_project_migalabs.jpg",
    category: ["Web design", "Graphic design", "Brand identity"],
    title: "Migalabs",
  },
  {
    textAlt: "Image Three",
    imgUrl: "/latest_projects/latest_project_starknet.jpg",
    category: ["Brand identity"],
    title: "Starknet",
  },
  {
    textAlt: "Image Four",
    imgUrl: "/latest_projects/latest_project_artentii.jpg",
    category: ["Web design", "Graphic design", "Brand identity"],
    title: "Artentii",
  },
];

export default function LatestProjects() {
  return (
    <div className="relative mx-5 lg:mx-10">
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
      <div className=" flex flex-col items-start gap-5">
        <h3 className="text-3xl text-gray font-semibold">Recent work</h3>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {addInformationCard.map((card, index) => (
            <div
              key={index}
              className="relative w-full group lg:hover:scale-110 transition-all duration-300 ease-in-out rounded-md shadow-md lg:shadow-none lg:hover:shadow-lg hover:z-40"
            >
              <Image className="w-full object-cover rounded-md" src={card.imgUrl} alt={card.textAlt} width={400} height={400} />
              <div className="absolute rounded-md p-10 inset-0 lg:hidden bg-gradient-to-r from-white to-white/20 lg:hover:bg-gradient-to-r transition-all duration-300  ease-in-out flex lg:group-hover:flex flex-col items-start justify-center gap-2 xl:gap-4">
                <span className="font-semibold text-gray text-3xl xl:text-5xl">{card.title}</span>
                <div className="flex flex-wrap items-center gap-1">
                  {card.category.map((item) => (
                    <div key={item} className="px-2 bg-white border border-gray rounded-full">
                      <span className="uppercase font-regular text-gray text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
    </div>
  );
}
