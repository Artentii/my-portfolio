import React from "react";
import Accordion from "../../components/accordion";
import Image from "next/image";

//Components
import SectionLabel from "../../components/SectionLabel";

export default function FAQs() {
  return (
    <div className="mx-5 lg:mx-10" id="faqs">
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
      <SectionLabel>FAQs</SectionLabel>
      <div>
        <h3 className="xl:w-2/6 mx-auto text-4xl lg:text-6xl font-semibold text-center text-purple">Got questions? I&apos;ve got answers.</h3>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
          <div className="relative w-[350px] lg:w-[700px] block">
            <Image className="" src="/faqs/faqs_1.png" alt="Questions" width={1000} height={1000} />
            <Image className="absolute top-0 animate-question" src="/faqs/faqs_2.png" alt="Questions" width={1000} height={1000} />
          </div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
