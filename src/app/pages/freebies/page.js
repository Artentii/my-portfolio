import Image from "next/image";
import Link from "next/link";

//Components

const addNewFreebie = [
  {
    title: "Weekly Planner",
    text: "Simplify your week with our comprehensive weekly planner, designed to streamline your meal preparation process and help you achieve your goals and be more conscious about what you eat.",
    button: "Download now",
    imgUrl: "/freebies/weekly_planner.jpg",
    textAlt: "Weekly Planner PDF for free",
  },
];

export default function Freebies() {
  return (
    <main className="p-3 xl:p-10 my-5">
      <h1 className="text-5xl xl:text-7xl text-purple font-bold text-center">Freebies</h1>
      <div className="flex items-center justify-center mx-auto xl:w-1/2 xl:my-10">
        {addNewFreebie.map((card, index) => (
          <div key={index} className="flex flex-col 2xl:flex-row gap-5 bg-white dark:bg-white/30 p-3 xl:p-10 my-3 rounded-md border-2 border-purple shadow-button">
            <Image className="mx-auto" src={card.imgUrl} alt={card.textAlt} width={400} height={400} priority />
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-purple dark:text-purple-light text-xl xl:text-3xl">{card.title}</span>
                <p className="pt-2 pb-5">{card.text}</p>
              </div>
              <Link download href="/freebies/weekly_meal_planner.pdf" className="relative flex flex-col">
                <button className="bg-purple text-white shadow-button fill-purple lg:hover:bg-white -translate-y-1 lg:hover:text-purple border-2 border-purple cursor-pointer transition duration-300 ease-in-out py-2 px-6 rounded-full">
                  {card.button}
                </button>
                <div className="absolute -top-2 right-0 bg-white border border-gray rounded-full px-3">
                  <span className="uppercase text-xs text-gray">Free</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
