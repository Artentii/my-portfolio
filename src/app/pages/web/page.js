import Image from "next/image";

const newProject = [
  {
    title: "MigaLabs",
    theme: ["Blockchain Technology", "Consulting Services"],
    role: ["Frontend Developer", "Web Designer"],
    text: "MigaLabs is a research group specialized in next-generation Blockchain technology, focusing on in-depth studies and solutions for Blockchain Scalability, Security, and Sustainability. They compromise technical experts in the Ethereum protocol, offering consulting services covering all technical aspects of Blockchain technology.",
    imgUrl: "/work/migalabs.png",
    txtAlt: "Migalabs",
    web: "migalabs.io",
    link: "https://migalabs.io/",
  },
  {
    title: "Ethseer",
    theme: ["Blockchain Technology", "Ethereum", "Data Explorer"],
    role: ["Frontend Developer", "Web Designer"],
    text: "Ethseer.io provides information about the Beacon Chain of Ethereum. It displays the blocks being produced in real-time with a user-friendly interface and allows users to search for information in an engaging manner to understand the Blockchain.",
    imgUrl: "/work/ethseer.png",
    txtAlt: "Ethseer",
    web: "ethseer.io",
    link: "https://ethseer.io/?network=mainnet",
  },
  {
    title: "Artentii",
    theme: ["Design Services"],
    role: ["Frontend Developer", "Web Designer"],
    text: "Artentii is the name I gave to my personal brand to offer my services as a graphic and web designer. This portfolio was done in order to share with the world the projects that I'm currently working on.",
    imgUrl: "/work/artentii.png",
    txtAlt: "Artentii",
    web: "artentii.io",
    link: "https://migalabs.io/",
  },
];

export default function WebDesign() {
  return (
    <main className="p-5 xl:p-10 my-5">
      <h1 className="text-5xl xl:text-7xl text-purple font-bold text-center">Web Design</h1>
      {newProject.map((card, index) => (
        <div className="bg-white p-5 xl:p-10 my-5 flex flex-col gap-2 xl:flex-row rounded-md border-2 border-purple shadow-button" key={index}>
          <div className="flex flex-col items-start justify-between gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between">
                <span className="text-4xl xl:text-6xl font-semibold text-gray">{card.title}</span>
                <a href={card.link} target="_blank" className="flex xl:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="fill-purple bg-white shadow-button rounded-md" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                {card.theme.map((item) => (
                  <div className="px-2 py-1 xl:px-4 xl:py-2 rounded-full border-2 border-purple bg-white/70" key={item}>
                    <span className="text-purple">{item}</span>
                  </div>
                ))}
              </div>
              <p className="xl:text-lg text-gray-light">{card.text}</p>
              <div className="relative flex flex-col">
                <button className="bg-purple text-white border-purple shadow-button  py-2 rounded-full">See details</button>
                <div className="absolute -top-2 right-0 bg-white border border-gray rounded-full flex flex-col py-1 px-3">
                  <span className="uppercase text-xs">Soon</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-between w-full">
              <div className="flex flex-col gap-1">
                <span className="xl:text-lg text-gray">Role</span>
                <div className="flex flex-col text-gray-light">
                  {card.role.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <a
                href={card.link}
                target="_blank"
                className="hidden border-2 border-purple xl:flex flex-row items-center gap-2 py-2 px-4 fill-purple -translate-y-1 rounded-md shadow-button bg-white text-purple cursor-pointer "
              >
                <span className="text-lg">{card.web}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Image src={card.imgUrl} alt={card.txtAlt} width={900} height={400} />
        </div>
      ))}
    </main>
  );
}
