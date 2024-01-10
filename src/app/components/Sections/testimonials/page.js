import React from "react";
import Image from "next/image";

const addTestimonial = [
  {
    text: '"I am full of appreciation for the exceptional design work Marina did for StarkWare. Your creativity and attention to detail have truly set a new standard for our brand\'s visual representation. Your ability to listen to our needs and translate them into visually appealing designs is commendable. Your professionalism, timely delivery, and open communication throughout the process made working with you an absolute pleasure."',
    imgUrl: "/testimonials/starkware-testimonials.jpg",
    txtAlt: "Image here",
    name: "Karin Ben David",
    position: "Marketing Producer Assistant",
    business: "Starkware",
    url: "https://starkware.co/",
  },
  {
    text: '"I have worked closely with Marina over the past year. Marina has very strong graphic design skills and proposes solutions that are extremely creative and elegant. She is enthusiastic and has good communication  and time management skills. On a personal level, she is a very diligent and compassionate person."',
    imgUrl: "/testimonials/migalabs-testimonials.jpg",
    txtAlt: "Image here",
    name: "Leonardo Bautista-Gomez",
    position: "Team Leader",
    business: "Migalabs",
    url: "https://migalabs.io/",
  },
];

export default function Testimonials() {
  return (
    <div className="px-10">
      <div className="">
        <h3 className="text-4xl text-gray-normal font-semibold">Hear it from them</h3>
        {/* <Image className="absolute" src="deco/bubble.svg" width="100" height="90" alt="3D laptop" priority /> */}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 py-10 items-end justify-center ">
        {addTestimonial.map((card, index) => (
          <div key={index} className="flex flex-col gap-4 lg:w-2/5 ">
            <div>
              <p className="p-10 bg-primary-color-light shadow-tool-card rounded-md text-gray-normal leading-7">{card.text}</p>
              <Image className="relative top-auto left-10 drop-shadow-testimonial" src="/testimonials/testimonial.svg" alt="Questions" width={50} height={50} />
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <Image className="rounded-full" src={card.imgUrl} alt="Questions" width={50} height={50} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">{card.name}</span>
                <span>
                  {card.position} at{" "}
                  <a href={card.url} target="_blank" className="font-medium">
                    {card.business}
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
