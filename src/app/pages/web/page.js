import Image from "next/image";

const newProject = [
  {
    title: "MigaLabs",
    theme: ["Blockchain Technology", "Consulting Services"],
    role: ["Frontend Developer", "Web Designer"],
    text: "MigaLabs is a research group specialized in next-generation Blockchain technology, focusing on in-depth studies and solutions for Blockchain Scalability, Security, and Sustainability. They compromise technical experts in the Ethereum protocol, offering consulting services covering all technical aspects of Blockchain technology.",
    imgUrl: "/work/migalabs.webp",
    txtAlt: "Migalabs",
    web: "migalabs.io",
    link: "https://migalabs.io/",
  },
  {
    title: "Ethseer",
    theme: ["Blockchain Technology", "Ethereum", "Data Explorer"],
    role: ["Frontend Developer", "Web Designer"],
    text: "Ethseer.io provides information about the Beacon Chain of Ethereum. It displays the blocks being produced in real-time with a user-friendly interface and allows users to search for information in an engaging manner to understand the Blockchain.",
    imgUrl: "/work/ethseer.webp",
    txtAlt: "Ethseer",
    web: "ethseer.io",
    link: "https://ethseer.io/?network=mainnet",
  },
  {
    title: "Discover Van Gogh",
    theme: ["Art", "Vincent Van Gogh"],
    role: ["Frontend Developer", "Web Designer"],
    text: "This project has been created as part of my web design course using HTML, CSS, and Javascript. The main objective of this page is to pay tribute to an exceptional artist and his legacy, as well as to arouse people's curiosity to learn more about his life and work.",
    imgUrl: "/work/vangogh.webp",
    txtAlt: "Discover Vincent Van Gogh",
    web: "Discover Van Gogh",
    link: "https://opentechne.github.io/Discover-Vincent-VanGogh/",
  },
  {
    title: "Artentii",
    theme: ["Design Services"],
    role: ["Frontend Developer", "Web Designer"],
    text: "Artentii is the name I gave to my personal brand to offer my services as a graphic and web designer. This portfolio was done in order to share with the world the projects that I'm currently working on.",
    imgUrl: "/work/artentii.webp",
    txtAlt: "Artentii",
    web: "artentii.com",
    link: "https://www.artentii.com/",
  },
];

export default function WebDesign() {
  return (
    <main className="p-3 xl:p-10 my-5">
      <h1 className="text-5xl xl:text-7xl text-purple font-bold text-center">Web Design</h1>
      {newProject.map((card, index) => (
        <div className="bg-white dark:bg-white/30 p-3 xl:p-10 my-5 flex flex-col gap-5 xl:flex-row rounded-md border-2 border-purple shadow-button" key={index}>
          <div className="flex flex-col items-start justify-between gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row flex-wrap gap-3">
                {card.theme.map((item) => (
                  <div className="px-4 py-1 rounded-full border xl:border-2 border-purple dark:bg-white" key={item}>
                    <span className="text-purple">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-4xl xl:text-6xl font-semibold text-purple dark:text-purple-light">{card.title}</span>
                <a href={card.link} target="_blank" className="block xl:hidden fill-purple dark:fill-purple-light">
                  <svg xmlns="http://www.w3.org/2000/webp" width="35" height="35" viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                    />
                  </svg>
                </a>
              </div>
              <p className="xl:text-lg font-light">{card.text}</p>
              <div className="relative flex flex-col">
                <button className="bg-purple text-white border-purple shadow-button  py-2 rounded-full">See details</button>
                <div className="absolute -top-2 right-0 bg-white border border-gray rounded-full flex flex-col py-1 px-3">
                  <span className="uppercase text-xs text-gray">Soon</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-between w-full">
              <div className="flex flex-col gap-1">
                <span className="xl:text-lg ">Role</span>
                <div className="flex flex-col ">
                  {card.role.map((item) => (
                    <span className="font-light" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={card.link}
                target="_blank"
                className="hidden lg:hover:bg-purple lg:hover:text-white border-2 border-purple xl:flex flex-row items-center gap-2 py-2 px-4 fill-purple lg:hover:fill-white -translate-y-1 rounded-md shadow-button bg-white text-purple cursor-pointer transition duration-300 ease-in-out"
              >
                <span className="text-lg">{card.web}</span>
                <svg xmlns="http://www.w3.org/2000/webp" width="30" height="30" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Image className="mx-auto" src={card.imgUrl} alt={card.txtAlt} width={900} height={400} />
        </div>
      ))}
    </main>
  );
}
