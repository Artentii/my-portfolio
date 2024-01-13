import React from "react";
import Accordion from "../../accordion";
import Image from "next/image";

export default function FAQs() {
  return (
    <div className="px-10">
      <div className=" flex justify-center" id="FAQs">
        <h3 className="text-primary-color lg:text-xl bg-white/50 shadow-section px-10 py-2 border-2 border-primary-color rounded-full font-normal mb-5">FAQs</h3>
      </div>
      <div className="">
        <h3 className="w-3/4 xl:w-2/6 mx-auto text-4xl lg:text-6xl font-semibold text-center text-primary-color">Got questions? I&apos;ve got answers.</h3>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
          <div className="relative w-[350px] lg:w-[1100px] block">
            <Image className="" src="/faqs/faqs_1.png" alt="Questions" width={1000} height={1000} />
            <Image className="absolute top-0 animate-float" src="/faqs/faqs_2.png" alt="Questions" width={1000} height={1000} />
          </div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
