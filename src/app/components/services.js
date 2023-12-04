import Image from "next/image";

const addServiceLink = [
  {
    title: "Web Design",
    textAlt: "Pink arrow",
    imgUrl: "/link_arrow.svg",
  },
  {
    title: "Web Development",
    textAlt: "Pink arrow",
    imgUrl: "/link_arrow.svg",
  },
  {
    title: "Logo Design",
    textAlt: "Pink arrow",
    imgUrl: "/link_arrow.svg",
  },
  {
    title: "Brand Identity",
    textAlt: "Pink arrow",
    imgUrl: "/link_arrow.svg",
  },
  {
    title: "Physical Art",
    textAlt: "Pink arrow",
    imgUrl: "/link_arrow.svg",
  },
];

const addWebDeveloperTool = ["Figma", "HTML", "CSS", "Javascript", "Next.js", "Chat GPT"];

const addGraphicDesignerTool = ["Adobe Creative Cloud", "Midjourney", "Notion", "Blender"];

const addDigitalPresenceCards = [
  {
    imgUrl: "/services_first.png",
    textAlt: "Image one",
    title: "Creating a great first impression",
    text: "A captivating digital presence is the initial point of contact with your audience. As a UX engineer I’ll ensure a user-friendly and intuitive experience.",
  },
  {
    imgUrl: "/services_second.png",
    textAlt: "Image two",
    title: "Staying true to your brand",
    text: "By maintaining brand consistency, reinforcing your identity across digital touchpoints through visuals, creating trust and recognition.",
  },
  {
    imgUrl: "/services_third.png",
    textAlt: "Image three",
    title: "Outshining the competition online",
    text: " A well-designed and user-centric digital presence sets you apart from competitors, while also improving search engine visibility, helping your business thrive in the digital landscape.",
  },
];

export default function Services() {
  return (
    <div className="py-10">
      <h3 className="text-6xl font-semibold text-center text-razzmataz">Services</h3>
      {/* List of services I offer */}
      <div className="flex flex-wrap gap-4 lg:gap-10 justify-center p-10">
        {addServiceLink.map((card, index) => (
          <div className="flex flex-row items-center decoration-transparent lg:hover:underline hover:decoration-razzmataz hover:underline-offset-8 cursor-pointer transition-all duration-300 ease-in-out" key={index}>
            <span className="text-lg lg:text-2xl text-razzmataz">{card.title}</span>
            <Image src={card.imgUrl} alt={card.textAlt} width={30} height={30} priority />
          </div>
        ))}
      </div>
      {/* The steps in my creative process are...  */}
      <div className="relative flex flex-col p-10">
        <p className="text-xl lg:text-3xl font-regular pb-6 text-cadmium-orange">The steps in my creative process are...</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-5 lg:grid-rows-2 gap-1 rounded-md text-gray bg-cadmium-orange shadow-service-card border-cadmium-orange border-2">
          <div className="col-span-2 lg:col-span-1 bg-antique-white flex flex-col justify-center items-center rounded-t-md lg:rounded-tl-md lg:rounded-tr-none">
            <div className="my-10">
              <p className="font-bold text-lg pb-2 text-cadmium-orange">1. Research and discovery</p>
              <ul className="list-disc list-inside">
                <li>Understand client needs. </li>
                <li>Research target audience and market.</li>
                <li>Analyse competitors.</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 bg-antique-white flex flex-col justify-center items-center">
            <div className="my-10">
              <p className="font-bold text-lg pb-2 text-lavander-pink">2. Conceptualization and Ideation</p>
              <ul className="list-disc list-inside">
                <li>Brainstorm ideas.</li>
                <li>Create sketches and wireframes.</li>
                <li>Develop mood boards.</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 bg-antique-white flex flex-col justify-center items-center lg:rounded-tr-md">
            <div className="my-10">
              <p className="font-bold text-lg pb-2 text-egg-blue">3. Design Development</p>
              <ul className="list-disc list-inside">
                <li>Design and prototype.</li>
                <li>Test for usability.</li>
                <li>Collaborate with openness to feedback.</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-2 bg-antique-white flex flex-col justify-center items-center lg:rounded-bl-md lg:rounded-br-none">
            <div className="my-10">
              <p className="font-bold text-lg pb-2 text-razzmataz">4. Presentation and Documentation</p>
              <ul className="list-disc list-inside">
                <li>Prepare presentation materials.</li>
                <li>Document design details.</li>
                <li>Present to the client.</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 bg-antique-white rounded-b-md lg:rounded-br-md lg:rounded-bl-none flex items-center justify-center p-10 lg:px-20">
            <div className="flex items-start justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-square flex-shrink-0" viewBox="0 0 16 16">
                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
              </svg>
              <p className="text-[16px]">I will provide you with a Notion client portal to track the project. Additionally, you’ll have documentation with the brand strategy and brand presentation.</p>
            </div>
          </div>
        </div>
        <Image src="/creative_process.png" alt="Girl with a brush" width={300} height={300} priority className="absolute top-80 hidden xl:block" />
      </div>
      {/* What tools do I use to work? */}
      <div className="pt-10 px-10">
        <h4 className="text-4xl font-semibold text-center py-2 text-lavander-pink">What tools do I use to work?</h4>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-start py-2">
            {/* As a UX Engineer */}
            <div className="flex flex-col">
              <span className="text-lg text-gray">As a UX Engineer</span>
              <div className="flex flex-wrap justify-center">
                {addWebDeveloperTool.map((item, index) => (
                  <span className="py-3 px-4 w-[180px] rounded-xl text-center mx-1 my-4 text-xl font-light text-razzmataz border-2 shadow-tool-card" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {/* As a Graphic Designer */}
            <div className="flex flex-col">
              <span className="text-lg text-gray">As a Graphic Designer</span>
              <div className="flex flex-wrap items-center justify-center">
                {addGraphicDesignerTool.map((item, index) => (
                  <span className="py-3 px-4 w-[250px] rounded-xl text-center mx-1 my-4 text-xl font-light text-razzmataz border-2 shadow-tool-card" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Elevate your digital presence */}
      <div className="pt-10 px-10">
        <h4 className="text-4xl font-semibold pb-6 text-center text-lavander-pink">Elevate your digital presence</h4>
        <p className="lg:text-xl lg:w-2/3 pb-6 text-center mx-auto text-gray">
          Your digital presence serves as the digital storefront, the first point of contact for your audience. It&apos;s the online space where potential customers and visitors get their first
          glimpse of your brand, products, or services. So, how can I help you in achieving a remarkable digital presence?
        </p>
        <div className="flex flex-col lg:flex-row mx-auto">
          {addDigitalPresenceCards.map((card, index) => (
            <div className="my-2 lg:mx-2 lg:w-2/6 p-4 rounded-xl bg-antique-white border-2 border-cadmium-orange shadow-service-card" key={index}>
              <Image src={card.imgUrl} alt={card.textAlt} className="mx-auto" width={180} height={100} priority />
              <p className="text-2xl font-semibold py-2 text-center text-cadmium-orange">{card.title}</p>
              <p className="text-gray text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
