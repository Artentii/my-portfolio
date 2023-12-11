import React from "react";
import Accordion from "../../accordion";
import Image from "next/image";

export default function FAQs() {
  return (
    <div className="px-10" id="FAQs">
      <h3 className="text-6xl font-semibold text-center text-razzmataz">Have questions?</h3>
      <div className="flex items-center gap-10 py-10">
        <div className="w-[1500px]">
          <Image className="" src="/faqs.png" alt="Questions" width={1200} height={1200} />
        </div>
        <Accordion />
      </div>
    </div>
  );
}
