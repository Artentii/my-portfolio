"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageContainer({ images, title, material }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const currentImage = images[currentIndex];
  return (
    <div className="bg-white/70 dark:bg-white/30 rounded-md mx-auto my-2 xl:my-5 shadow-button-two border xl:border-2 border-purple relative p-2 xl:p-4">
      <div className="flex flex-col gap-4">
        <div className="relative ">
          <Image className="mx-auto rounded-md w-96 h-64 object-cover" src={currentImage.imgUrl} alt={`Image ${currentIndex + 1}`} width={500} height={500} />
          <div className="flex flex-row justify-between items-center absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-2">
            {/* Buttons */}
            <button className="bg-purple-light/80 rounded-full border xl:border-2 p-2 border-white" onClick={handlePrevClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="stroke-2 stroke-white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <button className="bg-purple-light/80 rounded-full border xl:border-2 p-2 border-white" onClick={handleNextClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="stroke-2 stroke-white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg xl:text-2xl font-semibold ">{title}</span>
          <div className="px-4 py-1 rounded-full border xl:border-2 border-purple dark:bg-white">
            <span className="text-purple">{material}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
