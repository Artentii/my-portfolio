"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-10 right-5 z-50">
      {backToTopButton && (
        <button
          className="p-2 xl:p-3 bg-white/80 border-purple border-2 rounded-full"
          style={{ WebkitTapHighlightColor: "transparent" }}
          onClick={scrollUp}
        >
          <Image src="/backtotop.svg" width={25} height={25} alt="Back to top icon"/>
        </button>
      )}
    </div>
  );
}
export default BackToTopButton;
