import Image from "next/image";
import Link from "next/link";

const addInformationCard = [
  {
    textAlt: "Elusion",
    imgUrl: "/latest_projects/latest_project_elusion.webp",
    link: "/pages/graphic"
  },
  { textAlt: "Ethseer", imgUrl: "/latest_projects/latest_project_ethseer.webp",  link: "/pages/web" },
  
  {
    textAlt: "Migalabs",
    imgUrl: "/latest_projects/latest_project_migalabs.webp",
    link: "/pages/web"
  },
  {
    textAlt: "Starknet",
    imgUrl: "/latest_projects/latest_project_starknet.webp",
    link: "/pages/graphic"
  },
];

export default function LatestProjects() {
  return (
    <div className="relative mx-5 lg:mx-10">
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
      <div className=" flex flex-col items-start gap-5">
        <h3 className="text-3xl font-semibold">Recent work</h3>
        <div className="flex w-full flex-col lg:flex-row gap-4 ">
          {addInformationCard.map((card, index) => (
            <Link
              href={card.link}
              key={index}
              className={`cursor-pointer relative w-full group lg:hover:scale-110 transition-all duration-300 ease-in-out rounded-md shadow-button-two border-2 border-purple hover:z-40`}
            >
              <Image className="w-full rounded-md" src={card.imgUrl} alt={card.textAlt} width={400} height={400} />
            </Link>
          ))}
        </div>
      </div>
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
    </div>
  );
}
