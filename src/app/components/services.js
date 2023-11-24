import Image from "next/image";

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
    <div className="bg-orange-300">
      <h3 className="text-6xl font-semibold text-center py-2">Services</h3>
      <h4 className="text-4xl font-semibold text-center py-2" style={{ color: "var(--cadmiumOrange)"}}>Elevate your digital presence</h4>
      <p className="text-center lg:text-lg lg:w-1/2 mx-auto p-2">
        Your digital presence serves as the digital storefront, the first point of contact for your audience. It&apos;s the online space where potential customers and visitors get their first glimpse
        of your brand, products, or services. So, how can I help you in achieving a remarkable digital presence?
      </p>
      <div className="flex flex-col lg:flex-row bg-orange-200 mx-auto p-2">
        {addDigitalPresenceCards.map((card, index) => (
          <div className="m-1 lg:w-2/6 p-4 rounded-xl" key={index} style={{ background: "var(--antiqueWhite)", boxShadow: "var(--shadowCardService)", border: "var(--borderCardService)" }}>
            <Image src={card.imgUrl} alt={card.textAlt} className="mx-auto" width={180} height={100} priority />
            <p className="text-black text-2xl font-semibold py-2 text-center" style={{ color: "var(--cadmiumOrange)"}}>{card.title}</p>
            <p className="text-black text-center">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
