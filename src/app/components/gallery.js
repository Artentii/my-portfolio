"use client";

import Image from "next/image";
import galleryOne from "../../../public/gallery/left_1.jpg";
import galleryTwo from "../../../public/gallery/left_2.jpg";
import galleryThree from "../../../public/gallery/left_3.jpg";
import galleryFour from "../../../public/gallery/left_4.jpg";
import galleryFive from "../../../public/gallery/left_5.jpg";
import gallerySix from "../../../public/gallery/left_6.jpg";
import gallerySeven from "../../../public/gallery/left_7.jpg"
import galleryEight from "../../../public/gallery/left_8.jpg"
import galleryNine from "../../../public/gallery/right_1.jpg";
import galleryTen from "../../../public/gallery/right_2.jpg";
import galleryEleven from "../../../public/gallery/right_3.jpg";
import galleryTwelve from "../../../public/gallery/right_4.jpg";
import galleryThirteen from "../../../public/gallery/right_5.jpg";
import galleryFourteen from "../../../public/gallery/right_6.jpg";
import galleryFifteen from "../../../public/gallery/right_7.jpg";
import gallerySixteen from "../../../public/gallery/right_8.jpg";
import gallerySeventeen from "../../../public/gallery/right_9.jpg";
import galleryEighteen from "../../../public/gallery/right_10.jpg"

export default function Gallery() {
  const getRandomImgLeft = () => {
    const imgArray = [galleryOne, galleryTwo, galleryThree, galleryFour, galleryFive, gallerySix, gallerySeven, galleryEight];
    let rand = Math.floor(Math.random() * 8);
    let randImg = imgArray[rand];
    return randImg;
  };

  const getRandomImgRight = () => {
    const imgArray = [galleryNine, galleryTen, galleryEleven, galleryTwelve, galleryThirteen, galleryFourteen, galleryFifteen, gallerySixteen, gallerySeventeen, galleryEighteen];
    let rand = Math.floor(Math.random() * 10);
    let randImg = imgArray[rand];
    return randImg;
  };

  return (
    <div className="py-5">
      <div className="grid grid-cols-2 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-6 ">
        <div className="col-span-1 row-span-1 relative h-60 lg:h-[32rem]">
          <Image src={getRandomImgLeft()} className="rounded-xl object-cover w-full h-full shadow-image-card" alt="blabla" priority />
        </div>
        <div className="col-span-1 row-span- lg:col-span-2 relative h-60 lg:h-[32rem]">
          <Image src={getRandomImgRight()} className="rounded-xl object-cover w-full h-full shadow-image-card" alt="blabla" priority />
        </div>
      </div>
    </div>
  );
}
