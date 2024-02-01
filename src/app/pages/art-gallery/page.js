import Image from "next/image";

//Components
import SliderImages from "../../components/SliderImages"

export default function ArtGallery() {
  return (
    <main className="p-3 xl:p-10 my-5">
      <h1 className="text-5xl xl:text-7xl text-purple font-bold text-center">Art Gallery</h1>
      <div className="">
        <SliderImages />
      </div>
    </main>
  );
}
