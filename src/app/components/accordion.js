"use client";
import { useState } from "react";

const content = [
  {
    question: "How quickly can I start?",
    answer:
      "You can start right away—today even! After subscribing, you'll receive a welcome email. Shortly after, you'll be invited to a private Slack channel. You can begin making design requests immediately. There's no quicker way to get started on your design projects.",
  },
  {
    question: "How quickly do you work?",
    answer:
      "In most cases, you can expect a response within 2 business days. Often, it's even quicker. For larger projects, it might require a bit more time, but don't worry—we'll give you a heads-up in advance.",
  },
  {
    question: "What if I'm not satisfied with my design?",
    answer: "No problem! You have unlimited revisions. We'll keep refining the design until it meets your expectations. Your project is important to us, and we're committed to making it perfect.",
  },
  {
    question: "What programs do you design in?",
    answer: "Most requests are designed using Figma.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "Unfortunately, refunds are not available. Once you subscribe, we allocate specific time for your design needs. The creative process and research we put in to deliver high-quality results in a short time frame make it challenging to provide uncompensated services.",
  },
  {
    question: "Is there any design work you don't cover?",
    answer:
      "Absolutely. Artentii does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, and extensive print design (magazines, books, etc.).",
  },
];

export default function Accordion() {
    const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevOpenAccordion) => (prevOpenAccordion === index ? false : index));
  };

  return (
    <div>
      {content.map((card, index) => (
        <div key={index} className="py-4 border-b-2 border-gray-light">
          <button onClick={() => toggleAccordion(index)} className="flex items-center justify-between w-full">
            <span key={index} className="text-lg text-gray-normal">{card.question}</span>
            <svg className="fill-gray-normal shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${openAccordion === index && "rotate-180"}`} />
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${openAccordion === index && "hidden"}`} />
            </svg>
          </button>
          <div className={` grid overflow-hidden transition-all duration-300 ease-in-out text-gray-light ${openAccordion === index ? "my-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div key={index} className="overflow-hidden text-lg">
              {card.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
