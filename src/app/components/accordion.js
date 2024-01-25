"use client";
import { useState } from "react";

const content = [
  {
    question: "How quickly can I start?",
    answer: "You can start right away—today even! You can begin making design requests immediately. There's no quicker way to get started on your design projects. Contact me.",
  },
  {
    question: "How does the design process work",
    answer:
      "We would first talk about your goal asynchronously or in a meeting. Once we know our clients' objectives we start to work. You will receive a client portal in Notion that will help you follow the whole process and deadlines.",
  },
  {
    question: "How quickly do you work?",
    answer:
      "It depends on the project, most requests are completed in 3-5 business days. For larger projects, it might require a bit more time. We'll provide estimated timelines for each task, keeping you informed along the way.",
  },
  {
    question: "What if I'm not satisfied with my design?",
    answer: "No problem! You have unlimited revisions. We'll keep refining the design until it meets your expectations. Your project is important to us, and we're committed to making it perfect.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "Unfortunately, refunds are not available. The creative process and research we put in to deliver high-quality results in a short time frame make it challenging to provide uncompensated services.",
  },
  {
    question: "Is there any design work you don't cover?",
    answer: "Absolutely. Artentii does not cover the following design work: 3D modeling, document design (medical forms, etc.), extensive print design (magazines, books, etc.).",
  },
  {
    question: "How much do you charge?",
    answer: "Before charging a specific amount we need to know what your project will be about. Right after, you will be sent an invoice with all services offered to achieve your goal.",
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
            <span key={index} className="text-left lg:text-lg font-normal">
              {card.question}
            </span>
            <svg className="fill-gray dark:fill-gray-light shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${openAccordion === index && "rotate-180"}`} />
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${openAccordion === index && "hidden"}`} />
            </svg>
          </button>
          <div
            className={` grid overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === index ? "my-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div key={index} className="overflow-hidden font-light lg:text-lg">
              {card.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
