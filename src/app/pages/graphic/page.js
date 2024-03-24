import Image from "next/image";

const newProject = [
  {
    imgUrl: "/work/graphic/elusion.webp",
    txtAlt: "Elusion",
    theme: ["Brand Identity"],
    tools: ["Illustrator", "Figma", "Midjourney", "Photoshop"],
    title: "Elusion",
    text: "Elusion is a modern and community-driven start-up. They want to help non-technical users seeking a simple platform to sell and purchase of NFTs. The visual identity of the brand connects nature with technology, a modern, clean, and minimal design.",
  },
  {
    imgUrl: "/work/graphic/migalabs.webp",
    txtAlt: "Migalabs",
    theme: ["Brand Identity"],
    tools: ["Illustrator", "Photoshop"],
    title: "MigaLabs",
    text: "MigaLabs is a research group specialized in next-generation Blockchain technology, focusing on in-depth studies and solutions for Blockchain Scalability, Security, and Sustainability. 'Miga' comes from 'hormiga' which means ant, hence the logo. ",
  },
  {
    imgUrl: "/work/graphic/starknet.webp",
    txtAlt: "Starknet",
    theme: ["Merch"],
    tools: ["Illustrator", "Photoshop"],
    title: "Starknet",
    text: "Starknet is a ZK rollup that provides unlimited scale while retaining Ethereum's security and decentralization. As a commission, I was asked to do two t-shirt designs and a pair of socks using the three brand's color palette.",
  },
  {
    imgUrl: "/work/graphic/prompt-fighters.webp",
    txtAlt: "Prompt Figthers",
    theme: ["Brand Identity"],
    tools: ["Illustrator", "Photoshop"],
    title: "Prompt Fighters!",
    text: "Prompt Fighters! is a decentralized figthing game. It consists of creating your own unique character as an NFT using your imagination (a fill up template prompt which will generate your character) to challenge and bet money against other people's creations.",
  },
  {
    imgUrl: "/work/graphic/music.webp",
    txtAlt: "Music festival poster",
    theme: ["Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Jazz Magnetism",
    text: "Poster design for my Graphic Design course.",
  },
  {
    imgUrl: "/work/graphic/flowers.webp",
    txtAlt: "Flowers",
    theme: ["Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Phsychedelic Music Fest",
    text: "Poster design for my Graphic Design course.",
  },
  {
    imgUrl: "/work/graphic/nike-paint.webp",
    txtAlt: "Nike paint",
    theme: ["Illustration", "Merch", "Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Nike 01",
    text: "Poster design for my Graphic Design course.",
  },
  {
    imgUrl: "/work/graphic/nike-slime.webp",
    txtAlt: "Nike slime",
    theme: ["Illustration", "Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Nike 02",
    text: "Poster design for my Graphic Design course.",
  },
  {
    imgUrl: "/work/graphic/toyota.webp",
    txtAlt: "Toyota",
    theme: ["Illustration", "Merch", "Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Toyota MR2",
    text: "Poster design for my Graphic Design course.",
  },
  {
    imgUrl: "/work/graphic/interstellar.webp",
    txtAlt: "Interstellar",
    theme: ["Illustration", "Poster Design"],
    tools: ["Illustrator", "Photoshop"],
    title: "Interstellar",
    text: "Poster design for my Graphic Design course.",
  },
];

export default function GraphicDesign() {
  return (
    <main className="flex flex-col items-center justify-center p-3 xl:p-10 my-5">
      <h1 className="text-5xl xl:text-7xl text-purple font-bold text-center">Graphic Design</h1>
      {newProject.map((card, index) => (
        <div key={index} className="bg-white dark:bg-white/30 p-3 xl:p-10 my-3 rounded-md border-2 border-purple shadow-button flex flex-col gap-3">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3">
            <div className="flex flex-row flex-wrap gap-3">
              {card.theme.map((item) => (
                <span key={item} className="text-purple dark:text-purple-light xl:text-xl">{item}</span>
              ))}
            </div>
            <div className="flex flex-wrap xl:flex-row items-end gap-3">
              {card.tools.map((item) => (
                <div className="px-4 py-1 rounded-full border xl:border-2 border-purple dark:bg-white" key={item}>
                  <span className="text-purple">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-4xl xl:text-6xl font-semibold text-purple dark:text-purple-light">{card.title}</span>
          <p className="lg:text-lg font-light">{card.text}</p>
          <Image className="mx-auto" src={card.imgUrl} alt={card.txtAlt} width={1400} height={400} />
        </div>
      ))}
    </main>
  );
}
