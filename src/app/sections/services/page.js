import Image from "next/image";

//Components
import SectionLabel from "../../components/SectionLabel"
import { link } from "fs";
import { url } from "inspector";


const addServiceLink = [
  {
    title: "Brand Identity",
    imgUrl: "/services/service_brand.png",
    textAlt: "Image 1",
    text: ["• Logotype", "• Voice and tone", "• Color scheme", "• Packaging", "• Typography", "•Imagery"],
  },
  {
    title: "Logo Design",
    imgUrl: "/services/service_logo.png",
    textAlt: "Image 1",
    text: ["• Logotype", "• Wordmark", "• Favicon"],
  },
  {
    title: "Web Design",
    imgUrl: "/services/service_design.png",
    textAlt: "Image 1",
    text: ["• Website", "• Landing Page Design", "• Wireframes", "• Responsive Design"],
  },
  {
    title: "Web Development",
    imgUrl: "/services/service_web.png",
    textAlt: "Image 1",
    text: ["• Website Implementation", "• Coding", "• Layout Sections", "• Testing", "• Maintenance"],
  },
  {
    title: "Illustration",
    imgUrl: "/services/service_illustration.png",
    textAlt: "Image 1",
    text: ["• Illustrated Icons", "• Character Design"],
  },
  {
    title: "Physical Art",
    imgUrl: "/services/service_art.png",
    textAlt: "Image 1",
    text: ["• Fluid Art", "• Acrylic", "• Watercolor", "• Textile", "• Abstract Art", "• Framing", "• Resin Art"],
  },
];

const addWebDeveloperTool = ["Figma", "HTML", "CSS", "Javascript", "Next.js", "ChatGPT"];

const addGraphicDesignerTool = [{title: "Adobe Suite", url: "https://www.adobe.com/es/creativecloud.html?gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7pZkzI8CUDE262AWO4uFiOPlt0VNn8zDsDgLoL_-NbtxlIdzHXdP40aAq3HEALw_wcB&mv=search&mv=search&mv2=paidsearch&sdid=D8F91K7Y&ef_id=Cj0KCQiAi_G5BhDXARIsAN5SX7pZkzI8CUDE262AWO4uFiOPlt0VNn8zDsDgLoL_-NbtxlIdzHXdP40aAq3HEALw_wcB:G:s&s_kwcid=AL!3085!3!474067433653!e!!g!!adobe%20creative%20cloud!1445901594!56657212496&gad_source=1"
}, {title: "Midjourney", url: "https://www.midjourney.com/home"}, {title: "Notion", url: "https://www.notion.so/templates/category/personal-home"}, {title: "Blender", url:"https://www.blender.org/"}, {title: "Pacdora", url:"https://www.pacdora.com/es?utm_source=googleads&utm_medium=search&gad_source=1&gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7qg-dd8QTrwmJt5lfqUxHgXmbQckOMYeVZTr2F3NvXHi9ykH3bWIuIaAmH1EALw_wcB"}];

const addDigitalPresenceCards = [
  {
    imgUrl: "/services/first-impression.gif",
    textAlt: "Image one",
    title: "Creating a great first impression",
    text: "A captivating digital presence is the initial point of contact with your audience. As a Web Designer I’ll ensure a user-friendly and intuitive experience.",
  },
  {
    imgUrl: "/services/stay-true.gif",
    textAlt: "Image two",
    title: "Staying true to your brand",
    text: "By maintaining brand consistency, reinforcing your identity across digital touchpoints through visuals, creating trust and recognition.",
  },
  {
    imgUrl: "/services/outshine-competition.gif",
    textAlt: "Image three",
    title: "Outshining the competition online",
    text: " A well-designed digital presence sets you apart from competitors, while also improving search engine visibility, helping your business thrive in the digital landscape.",
  },
];

export default function Services() {
  return (
    <div className="p-5 lg:p-10 mx-5 lg:m-10 bg-white/70 dark:bg-white/30 rounded-md" id="services">
      {/* <Image className="absolute right-28 animate-heart" src="/deco/heart.svg" alt="Bulb" width={125} height={150} /> */}
      <Image className="absolute right-20 animate-float hidden lg:block" src="/deco/stars_two.svg" alt="Bulb" width={125} height={120} />
      <SectionLabel>Services</SectionLabel>

      <div className="">
        <h3 className="text-4xl lg:text-8xl font-semibold text-center text-purple lg:w-3/4 mx-auto py-5 lg:py-10">Designing the visual, coding the functional.</h3>

        {/* List of services I offer */}
        <div className="flex flex-wrap gap-4 lg:gap-10 justify-center">
          {addServiceLink.map((card, index) => (
            <div className="md:w-96 3xl:w-[30rem]" key={index}>
              <Image className="rounded-md shadow-tool-card border-2 border-purple bg-purple-light" src={card.imgUrl} alt={card.textAlt} width={400} height={400} priority />
              <div className="flex flex-col items-start gap-2 py-2">
                <span className="text-lg lg:text-2xl font-medium text-purple">{card.title}</span>
                <span className="flex flex-wrap gap-x-5">
                  {card.text.map((service, index) => (
                    <span className="flex" key={index}>
                      {service}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Image className="mx-auto hidden lg:block" src="/deco/divider.png" alt="Bulb" width={1400} height={100} />
        <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />

        {/* Elevate your digital presence */}
        <div>
          <h4 className="text-2xl lg:text-4xl text-center">
            Elevate your <span className="word-deco-s">digital presence</span>
          </h4>
          <p className="lg:text-md lg:w-2/3 py-5 lg:py-10 lg:text-lg mx-auto">
            Your digital presence serves as the digital storefront, the first point of contact for your audience. It&apos;s the online space where potential customers and visitors get their first
            glimpse of your brand, products, or services. These features will help you achieving a remarkable digital presence.
          </p>
          <div className="flex flex-col gap-4 lg:flex-row mx-auto">
            {addDigitalPresenceCards.map((card, index) => (
              <div className="my-1 lg:my-2 lg:w-2/6 py-4 px-4 lg:px-8 rounded-xl border-2 border-purple dark:shadow-button-two bg-white shadow-service-card" key={index}>
                <Image src={card.imgUrl} alt={card.textAlt} className="mx-auto py-2" width={150} height={125} priority />
                <p className="text-xl lg:text-2xl font-semibold pb-2 text-gray">{card.title}</p>
                <p className="text-gray-light dark:text-gray">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps in my creative process are...  */}
        <Image className="mx-auto hidden lg:block" src="/deco/divider.png" alt="Bulb" width={1400} height={100} />
        <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />

        <div className="relative flex flex-col">
          <p className="text-2xl lg:text-4xl text-center mx-auto">
            Steps in my <span className="word-deco-s">creative process</span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-5 lg:grid-rows-2 gap-1 bg-purple-light rounded-lg text-gray-light shadow-service-card border-2 border-purple mt-5 lg:mt-10">
            <div className="col-span-2 lg:col-span-1 bg-white flex flex-col justify-center items-center rounded-t-md lg:rounded-tl-md lg:rounded-tr-none p-5 lg:p-0 ">
              <div className="my-10">
                <p className="font-bold text-lg pb-2 text-purple">1. Research and discovery</p>
                <ul className="list-disc list-inside">
                  <li>Understand client needs. </li>
                  <li>Research target audience and market.</li>
                  <li>Analyse competitors.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 bg-white flex flex-col justify-center items-center p-5 lg:p-0">
              <div className="my-10">
                <p className="font-bold text-lg pb-2 text-purple">2. Conceptualization and Ideation</p>
                <ul className="list-disc list-inside">
                  <li>Brainstorm ideas.</li>
                  <li>Create sketches and wireframes.</li>
                  <li>Develop mood boards.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:row-start-2 bg-white flex flex-col justify-center items-center lg:rounded-bl-md p-5 lg:p-0">
              <div className="my-10">
                <p className="font-bold text-lg pb-2 text-purple">3. Design Development</p>
                <ul className="list-disc list-inside">
                  <li>Design and prototype.</li>
                  <li>Test for usability.</li>
                  <li>Collaborate with openness to feedback.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1  lg:row-start-2 bg-white flex flex-col justify-center items-center p-5 lg:p-0">
              <div className="my-10">
                <p className="font-bold text-lg pb-2 text-purple">4. Presentation and Documentation</p>
                <ul className="list-disc list-inside">
                  <li>Prepare presentation materials.</li>
                  <li>Document design details.</li>
                  <li>Present to the client.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-start-3 lg:row-span-2 bg-white rounded-b-lg lg:rounded-br-lg lg:rounded-tr-lg lg:rounded-bl-none flex items-center justify-center p-10 lg:px-20">
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
        </div>

        {/* Quote container */}
        <Image className="mx-auto hidden lg:block" src="/deco/divider.png" alt="Bulb" width={1400} height={100} />
        <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />

        <div className="relative my-5">
          <Image className="absolute top-0 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2" src="/deco/clip.png" alt="Bulb" width={90} height={100} />
          <div className="lg:pt-5 lg:pb-10 relative">
            <div className="relative flex flex-col items-center justify-center 3xl:w-9/12 xl:w-10/12 mx-auto gap-2 lg:gap-4 text-gray p-10 xl:p-20 rounded-md  bg-purple-light">
              <p className="text-3xl lg:text-6xl text-center">
                &quot;Give ordinary people the right tools, and they will design and build the<b> most extraordinary things</b>.&quot;
              </p>
              <span className="lg:text-lg">Neil Gershenfeld</span>
            </div>
            <div className="relative flex flex-col items-center xl:absolute xl:-right-10 xl:top-48 my-5 xl:my-0">
              <Image src="/services/Creative_process_1.png" alt="Girl with a brush" width={325} height={300} priority className="animate-float" />
              <Image src="/services/Creative_process_2.png" alt="Girl with a brush" width={325} height={300} priority className="absolute top-0 " />
            </div>
          </div>
        </div>

        {/* Tools I use to work */}
        <div className="flex flex-col ">
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-xl lg:text-3xl">
              Tools I use to work
            </h4>
            <div className="flex flex-col items-start lg:items-center xl:my-5">
              <div className="flex flex-col items-start gap-4">
                {/* As a UX Engineer */}
                <div className="flex flex-col">
                  <span className="lg:text-lg text-gray-light dark:text-white pb-4">As a Web Developer</span>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {addWebDeveloperTool.map((item, index) => (
                      <span className="py-3 px-4 w-[125px] lg:w-[200px] 3xl:w-[250px] rounded-md text-center lg:text-xl font-light bg-purple-light/40 dark:bg-white/80 lg:hover:bg-white text-purple  border-purple border-2 shadow-tool-card transition-all duration-300 ease-in-out" key={index}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {/* As a Graphic Designer */}
                <div className="flex flex-col">
                  <span className="lg:text-lg text-gray-light dark:text-white pb-4">As a Graphic Designer</span>
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    {addGraphicDesignerTool.map((item, index) => (
                      <a className="py-3 px-4 w-[125px] lg:w-[200px] 3xl:w-[250px] rounded-md text-center lg:text-xl font-light bg-purple-light/40 dark:bg-white/80 lg:hover:bg-white text-purple  border-purple border-2 shadow-tool-card transition-all duration-300 ease-in-out" key={index} href={item.url} target="_blank">{item.title}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
