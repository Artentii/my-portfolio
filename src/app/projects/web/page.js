import Image from "next/image";

const newProject = [
  {
    title: "Migalabs",
    theme: ["Blockchain Technology", "Consulting Services"],
    role: ["Frontend Developer", "Web Designer"],
    text: "MigaLabs is a research group specialized in next-generation Blockchain technology, focusing on in-depth studies and solutions for Blockchain Scalability, Security, and Sustainability. They compromise technical experts in the Ethereum protocol, offering consulting services covering all technical aspects of Blockchain technology.",
    imgUrl: "/work/migalabs.jpg",
    txtAlt: "Migalabs",
    link: "https://migalabs.io/",
  },
];

export default function WebDesign() {
  return (
    <main className=" p-10">
      <div className=" flex flex-col items-start gap-5">
        <h1 className="text-6xl text-purple font-bold">Web Design</h1>
        <p className="xl:text-lg">
          Crafting visually appealing, user-friendly websites transforms your vision into a compelling online presence. Whether revitalizing an existing site or starting anew, I bring ideas to life.
        </p>
      </div>

      {newProject.map((card, index) => (
        <div className="bg-white p-10 flex flex-col gap-2 xl:flex-row rounded-md" key={index}>
          <div className="flex flex-col items-start justify-between">
            <div className="flex flex-col gap-5">
              <span className="text-6xl font-semibold text-gray">{card.title}</span>
              <div className="flex flex-row gap-3">
                {card.theme.map((item) => (
                  <div className="px-2 py-1 rounded-full border-2 border-purple-dark bg-white/70" key={item}>
                    <span className="text-purple-dark">{item}</span>
                  </div>
                ))}
              </div>
              <p className="xl:text-lg text-gray-light">{card.text}</p>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col gap-1">
                <span className="text-lg text-gray">Role</span>
                <div className="flex flex-col text-gray-light">
                  {card.role.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <a href={card.link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="fill-gray-light" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Image src={card.imgUrl} alt={card.txtAlt} width={900} height={100} />
        </div>
      ))}
    </main>
  );
}
