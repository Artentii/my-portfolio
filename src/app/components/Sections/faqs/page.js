import React from "react";
import Accordion from "../../accordion";
import Image from "next/image";

export default function FAQs() {
  return (
    <div className="px-10">
      <div className=" flex justify-center" id="FAQs">
        <span className="text-primary-color bg-white/50 shadow-section px-10 py-1 border border-primary-color rounded-full font-normal">FAQs</span>
      </div>
      <div className="py-20">
        <h3 className="text-6xl font-semibold text-center text-primary-color">Have questions?</h3>
        <div className="flex items-center gap-10 py-10">
          <div className="w-[1200px]">
            <Image className="" src="/faqs.png" alt="Questions" width={1000} height={1000} />
          </div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
