import Image from "next/image";

const addDigitalPresenceCards = [
  {
    imgUrl: "/services_first.png",
    textAlt: "Image one",
    title: "Creating a great first impression",
    text: "A captivating digital presence is the initial point of contact with your audience. Aa a UX engineer I’ll ensure a user-friendly and intuitive experience.",
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
      <h3>Services</h3>
      <h4>Elevate your digital presence</h4>
      <p>
        Your digital presence serves as the digital storefront, the first point of contact for your audience. It's the online space where potential customers and visitors get their first glimpse of
        your brand, products, or services.
      </p>
      <p>So, how can I help you in achieving a remarkable digital presence?</p>
      <div className="flex w-10/12 bg-orange-200 mx-auto p-2">
        {addDigitalPresenceCards.map((card, index) => (
          <div className="bg-orange-400 m-1 w-[400px] mx-auto p-4" key={index}>
            <Image src={card.imgUrl} alt={card.textAlt} className="dark:invert mx-auto" width={180} height={100} priority />
            <p>{card.title}</p>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
