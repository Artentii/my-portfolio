import Image from "next/image";

const addInformationCard = [
  {
    textAlt: "Elusion",
    imgUrl: "/latest_projects/latest_project_elusion.webp",
  },
  { textAlt: "Ethseer", imgUrl: "/latest_projects/latest_project_ethseer.webp" },
  {
    textAlt: "Migalabs",
    imgUrl: "/latest_projects/latest_project_migalabs.webp",
  },
  {
    textAlt: "Starknet",
    imgUrl: "/latest_projects/latest_project_starknet.webp",
  },
];

export default function LatestProjects() {
  return (
    <div className="relative mx-5 lg:mx-10">
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
      <div className=" flex flex-col items-start gap-5">
        <h3 className="text-3xl font-semibold">Recent work</h3>
        <div className="flex w-full flex-col lg:flex-row gap-4">
          {addInformationCard.map((card, index) => (
            <div
              key={index}
              className={`relative w-full group lg:hover:scale-110 transition-all duration-300 ease-in-out rounded-md shadow-button-two border-2 border-purple hover:z-40`}
            >
              <Image className="w-full rounded-md" src={card.imgUrl} alt={card.textAlt} width={400} height={400} />
            </div>
          ))}
        </div>
      </div>
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
    </div>
  );
}
