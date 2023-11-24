import Image from "next/image";

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
    <div>
      <h3 className="text-6xl font-semibold text-center py-2">Services</h3>
      {/* What tools do I use to work */}
      <div>
        <h4 className="text-4xl font-semibold text-center py-2">
          What tools do I use to work?
        </h4>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-start py-2">
            {/* As a UX Engineer */}
            <div className="flex flex-col">
              <span className="text-lg">As a UX Engineer</span>
              <div className="flex flex-wrap justify-center">
                {addWebDeveloperTool.map((item, index) => (
                  <span className="py-3 px-4 w-[180px] rounded-full text-center mx-1 my-4 text-xl font-light color-razzmataz bg-dandelion" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {/* As a Graphic Designer */}
            <div className="flex flex-col">
              <span className="text-lg">As a Graphic Designer</span>
              <div className="flex flex-wrap items-center justify-center">
                {addGraphicDesignerTool.map((item, index) => (
                  <span className="py-3 px-4 w-[250px] rounded-full text-center mx-1 my-4 text-xl font-light color-razzmataz bg-dandelion" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Elevate your digital presence */}
      <div>
        <h4 className="text-4xl font-semibold text-center py-2">
          Elevate your digital presence
        </h4>
        <p className="text-center lg:text-xl lg:w-2/3 mx-auto p-2">
          Your digital presence serves as the digital storefront, the first point of contact for your audience. It&apos;s the online space where potential customers and visitors get their first
          glimpse of your brand, products, or services. So, how can I help you in achieving a remarkable digital presence?
        </p>
        <div className="flex flex-col lg:flex-row mx-auto p-2">
          {addDigitalPresenceCards.map((card, index) => (
            <div className="m-1 lg:w-2/6 p-4 rounded-xl bg-antiqueWhite" key={index} style={{boxShadow: "var(--shadowCardService)", border: "var(--borderCardService)" }}>
              <Image src={card.imgUrl} alt={card.textAlt} className="mx-auto" width={180} height={100} priority />
              <p className="text-2xl font-semibold py-2 text-center color-cadmiumOrange">
                {card.title}
              </p>
              <p className="text-black text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
