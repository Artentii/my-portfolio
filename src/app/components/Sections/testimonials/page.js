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
    <div className=" bg-white/70 p-5 lg:p-10 border-y-2 border-primary-color-light">
      <Image className="hidden lg:block absolute right-28 animate-heart" src="/deco/heart.svg" alt="Bulb" width={125} height={150} />
      <div className="flex flex-col">
        <div className="flex flex-col items-start gap-2 lg:gap-0">
        <h3 className="text-primary-color lg:text-xl bg-white/50 shadow-section px-10 py-2 border-2 border-primary-color rounded-full font-normal">Testimonials</h3>
          <span className="text-4xl lg:text-6xl text-primary-color font-semibold">
            <span className="lg:hidden">Hear it from them</span>
            <span className="word-deco-l hidden lg:block">Hear it from them</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 pt-6 lg:pt-12 items-end justify-center">
        {addTestimonial.map((card, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div>
              <p className="p-5 lg:p-10 bg-primary-color-light shadow-tool-card rounded-md text-gray-normal leading-7 lg:text-lg">{card.text}</p>
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