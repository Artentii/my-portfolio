import Image from "next/image";

const addServiceLink = [
  {
    title: "Brand Identity",
    imgUrl: "/service.jpg",
    textAlt: "Image 1",
    text: ["• Website", "• Landing Page Design", "• Wireframes", "• Design systems", "• Framer Development"],
  },
  {
    title: "Logo Design",
    imgUrl: "/service.jpg",
    textAlt: "Image 1",
    text: ["• Website", "• Landing Page Design", "• Wireframes", "• Design systems", "• Framer Development"],
  },
  {
    title: "Web Design",
    imgUrl: "/service.jpg",
    textAlt: "Image 1",
    text: ["• Website", "• Landing Page Design", "• Wireframes", "• Design systems", "• Framer Development"],
  },
  {
    title: "Web Development",
    imgUrl: "/service.jpg",
    textAlt: "Image 1",
    text: ["• Website", "• Landing Page Design", "• Wireframes", "• Design systems", "• Framer Development"],
  },
  {
    title: "Physical Art",
    imgUrl: "/service.jpg",
    textAlt: "Image 1",
    text: ["• Website", "• Landing Page Design", "• Wireframes", "• Design systems", "• Framer Development"],
  },
  {
    title: "Illustration",
    imgUrl: "/service.jpg",
    textAlt: "Image 1",
    text: ["• Website", "• Landing Page Design", "• Wireframes", "• Design systems", "• Framer Development"],
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
    <div className="px-10 pt-10 m-10 bg-white/70 rounded-large" id="services">
      <Image className="absolute right-28 animate-heart" src="/deco/heart.svg" alt="Bulb" width={150} height={150} />

      <div className=" flex justify-center" id="services">
        <h3 className="text-primary-color lg:text-xl bg-white/50 shadow-section px-12 py-2 border border-primary-color rounded-full font-normal">Services</h3>
      </div>

      <div className="py-10">
        <h3 className="text-8xl font-semibold text-center text-primary-color w-3/4 mx-auto">Designing the visual, coding the <span className="word-deco-primary">functional</span>.</h3>

        {/* List of services I offer */}
        <div className="flex flex-wrap gap-4 lg:gap-10 justify-center pt-20">
          {addServiceLink.map((card, index) => (
            <div className="w-96" key={index}>
              <Image className="rounded-xl" src={card.imgUrl} alt={card.textAlt} width={400} height={400} priority />
              <div className="flex flex-col items-start gap-3 py-3">
                <span className="text-lg lg:text-2xl font-semibold text-primary-color">{card.title}</span>
                <span className="flex flex-wrap gap-x-5">
                  {card.text.map((service, index) => (
                    <span className="flex text-gray-light" key={index}>
                      {service}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The steps in my creative process are...  */}
        <div className="relative flex flex-col">
          <p className="text-xl lg:text-4xl py-10 font-regular text-center mx-auto text-gray-normal">
            <span className="word-deco">Steps</span> in my creative process
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-5 lg:grid-rows-2 gap-1 bg-primary-color-light rounded-md text-gray-light shadow-service-card border-2 border-primary-color">
            <div className="col-span-2 lg:col-span-1 bg-white flex flex-col justify-center items-center rounded-t-md lg:rounded-tl-md lg:rounded-tr-none">
              <div className="my-10">
                <p className="font-bold text-lg pb-2 text-primary-color">1. Research and discovery</p>
                <ul className="list-disc list-inside">
                  <li>Understand client needs. </li>
                  <li>Research target audience and market.</li>
                  <li>Analyse competitors.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 bg-white flex flex-col justify-center items-center">
              <div className="my-10">
                <p className="font-bold text-lg pb-2 text-primary-color">2. Conceptualization and Ideation</p>
                <ul className="list-disc list-inside">
                  <li>Brainstorm ideas.</li>
                  <li>Create sketches and wireframes.</li>
                  <li>Develop mood boards.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 bg-white flex flex-col justify-center items-center lg:rounded-tr-md">
              <div className="my-10">
                <p className="font-bold text-lg pb-2 text-primary-color">3. Design Development</p>
                <ul className="list-disc list-inside">
                  <li>Design and prototype.</li>
                  <li>Test for usability.</li>
                  <li>Collaborate with openness to feedback.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-2 bg-white flex flex-col justify-center items-center lg:rounded-bl-md lg:rounded-br-none">
              <div className="my-10">
                <p className="font-bold text-lg pb-2 text-primary-color">4. Presentation and Documentation</p>
                <ul className="list-disc list-inside">
                  <li>Prepare presentation materials.</li>
                  <li>Document design details.</li>
                  <li>Present to the client.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 bg-white rounded-b-md lg:rounded-br-md lg:rounded-bl-none flex items-center justify-center p-10 lg:px-20">
              <div className="flex items-start justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-square flex-shrink-0" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <p className="text-[16px]">
                  I will provide you with a Notion client portal to track the project. Additionally, you’ll have documentation with the brand strategy and brand presentation.
                </p>
              </div>
            </div>
          </div>
          <Image src="/creative_process.png" alt="Girl with a brush" width={270} height={270} priority className="absolute top-96 hidden xl:block" />
        </div>

        {/* Tools I use to work */}
        <div className="py-10">
          <h4 className="text-xl lg:text-4xl py-5 font-regular text-gray-normal text-center">
            <span className="word-deco">Tools</span> I use to work
          </h4>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start">
              {/* As a UX Engineer */}
              <div className="flex flex-col p-4">
                <span className="text-lg text-gray-light pb-4">As a Web Developer</span>
                <div className="flex flex-wrap gap-4 justify-center">
                  {addWebDeveloperTool.map((item, index) => (
                    <span className="py-3 px-4 w-[180px] rounded-lg text-center text-xl font-light text-primary-color border-primary-color border-2 shadow-tool-card" key={index}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {/* As a Graphic Designer */}
              <div className="flex flex-col p-4">
                <span className="text-lg text-gray-light pb-4">As a Graphic Designer</span>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                  {addGraphicDesignerTool.map((item, index) => (
                    <span className="py-3 px-4 w-[250px] rounded-lg text-center text-xl font-light text-primary-color border-primary-color border-2 shadow-tool-card" key={index}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elevate your digital presence */}
        <Image className="absolute left-16 -rotate-12 animate-float" src="/deco/stars_two.svg" alt="Bulb" width={120} height={120} />
        <Image className="absolute right-16 rotate-6 animate-float" src="/deco/cloud.svg" alt="Bulb" width={175} height={175} />
        <div className="pt-10">
          <h4 className="text-xl lg:text-4xl font-regular text-gray-normal text-center">
            Elevate your <span className="word-deco">digital presence</span>
          </h4>
          <p className="lg:text-md lg:w-2/3 py-10 lg:text-lg text-center text-gray-light mx-auto">
            Your digital presence serves as the digital storefront, the first point of contact for your audience. It&apos;s the online space where potential customers and visitors get their first
            glimpse of your brand, products, or services. So, how can I help you in achieving a remarkable digital presence?
          </p>
          <div className="flex flex-col gap-4 lg:flex-row mx-auto">
            {addDigitalPresenceCards.map((card, index) => (
              <div className="my-2 lg:w-2/6 p-4 rounded-xl border-2 border-primary-color bg-white/80 shadow-service-card" key={index}>
                <Image src={card.imgUrl} alt={card.textAlt} className="mx-auto" width={180} height={100} priority />
                <p className="text-2xl font-semibold py-2 text-center text-gray-light">{card.title}</p>
                <p className="text-gray-light text-center">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
