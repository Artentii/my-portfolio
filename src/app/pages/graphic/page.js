import Image from "next/image";

const newProject = [
  {
    imgUrl: "/work/graphic/elusion.webp",
    txtAlt: "Elusion",
    theme: ["Brand Identity"],
    tools: ["Illustrator", "Figma", "Midjourney", "Photoshop"],
    title: "Elusion",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/migalabs.webp",
    txtAlt: "Migalabs",
    theme: ["Brand Identity"],
    tools: ["Illustrator", "Photoshop"],
    title: "MigaLabs",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/starknet.webp",
    txtAlt: "Starknet",
    theme: ["Merch"],
    tools: ["Illustrator", "Photoshop"],
    title: "Starknet",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/prompt-fighters.webp",
    txtAlt: "Prompt Figthers",
    theme: ["Brand Identity"],
    tools: ["Illustrator", "Photoshop"],
    title: "Prompt Fighters!",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/music.webp",
    txtAlt: "Music festival poster",
    theme: ["Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Jazz Magnetism",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/flowers.webp",
    txtAlt: "Flowers",
    theme: ["Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Phsychedelic Music Fest",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/nike-paint.webp",
    txtAlt: "Nike paint",
    theme: ["Illustration", "Merch", "Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Nike 01",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/nike-slime.webp",
    txtAlt: "Nike slime",
    theme: ["Illustration", "Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Nike 02",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/toyota.webp",
    txtAlt: "Toyota",
    theme: ["Illustration", "Merch", "Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Toyota MR2",
    text: "Brief explanation goes here",
  },
  {
    imgUrl: "/work/graphic/interstellar.webp",
    txtAlt: "Interstellar",
    theme: ["Illustration", "Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Interstellar",
    text: "Brief explanation goes here",
  },
];

export default function GraphicDesign() {
  return (
    <main className="flex flex-col items-center justify-center p-5 xl:p-10 my-5">
      <h1 className="text-5xl xl:text-7xl text-purple font-bold text-center">Graphic Design</h1>
      {newProject.map((card, index) => (
        <div key={index} className="bg-white dark:bg-white/30 p-5 xl:p-10 my-3 rounded-md border-2 border-purple shadow-button flex flex-col gap-3">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3">
            <div className="flex flex-row flex-wrap gap-3">
              {card.theme.map((item) => (
                <span key={item} className="text-purple text-xl">{item}</span>
              ))}
            </div>
            <div className="flex flex-row items-end gap-3">
              {card.tools.map((item) => (
                <div className="px-2 py-1 xl:px-4 xl:py-2 rounded-full border-2 border-purple dark:bg-white" key={item}>
                  <span className="text-purple">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-4xl xl:text-6xl font-semibold text-purple dark:text-white">{card.title}</span>
          <p className="lg:text-lg font-light">{card.text}</p>
          <Image className="mx-auto" src={card.imgUrl} alt={card.txtAlt} width={1400} height={400} />
        </div>
      ))}
    </main>
  );
}
