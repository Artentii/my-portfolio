import Image from "next/image";

//Components
import ImageContainer from "../components/ImageContainer";

const barcelona = [
  { imgUrl: "/art/barcelona/IMG_6448.webp" },
  { imgUrl: "/art/barcelona/IMG_6443.webp" },
  { imgUrl: "/art/barcelona/IMG_6434.webp" },
  { imgUrl: "/art/barcelona/IMG_6449.webp" },
  { imgUrl: "/art/barcelona/IMG_6450.webp" },
  { imgUrl: "/art/barcelona/IMG_6452.webp" },
];
const beach = [{ imgUrl: "/art/beach/IMG_5918.webp" }, { imgUrl: "/art/beach/IMG_5920.webp" }];
const blue = [{ imgUrl: "/art/blue/IMG_6013.webp" }, { imgUrl: "/art/blue/IMG_5214.webp" }];
const colors = [{ imgUrl: "/art/colors/IMG_5178.webp" }, { imgUrl: "/art/colors/IMG_6550.webp" }, { imgUrl: "/art/colors/IMG_6563.webp" }];
const dog = [
  { imgUrl: "/art/dog/img-6602.webp" },
  { imgUrl: "/art/dog/img-6590.webp" },
  { imgUrl: "/art/dog/img-6591.webp" },
  { imgUrl: "/art/dog/img-6593.webp" },
  { imgUrl: "/art/dog/img-6588.webp" },
  { imgUrl: "/art/dog/img-6606.webp" },
];
const dune = [
  { imgUrl: "/art/dune/img-6329.webp" },
  { imgUrl: "/art/dune/img-5248.webp" },
  { imgUrl: "/art/dune/img-6034.webp" },
  { imgUrl: "/art/dune/img-5301.webp" },
  { imgUrl: "/art/dune/img-6032.webp" },
  { imgUrl: "/art/dune/img-6046.webp" },
];
const equanimity = [{ imgUrl: "/art/equanimity/IMG_6514.webp" }, { imgUrl: "/art/equanimity/IMG_6410.webp" }, { imgUrl: "/art/equanimity/IMG_6507.webp" }, { imgUrl: "/art/equanimity/IMG_6515.webp" }];
const gold = [
  { imgUrl: "/art/gold/IMG_6002.webp" },
  { imgUrl: "/art/gold/IMG_6007.webp" },
  { imgUrl: "/art/gold/IMG_6274.webp" },
  { imgUrl: "/art/gold/IMG_5238.webp" },
  { imgUrl: "/art/gold/IMG_5242.webp" },
];
const oasis = [
  { imgUrl: "/art/oasis/IMG_5055.webp" },
  { imgUrl: "/art/oasis/IMG_5058.webp" },
  { imgUrl: "/art/oasis/IMG_6021.webp" },
  { imgUrl: "/art/oasis/IMG_6027.webp" },
  { imgUrl: "/art/oasis/IMG_6025.webp" },
  { imgUrl: "/art/oasis/IMG_6305.webp" },
];
const orchid = [{ imgUrl: "/art/orchid/IMG_5040.webp" }, { imgUrl: "/art/orchid/IMG_5034.webp" }, { imgUrl: "/art/orchid/IMG_5037.webp" }];
const planet = [{ imgUrl: "/art/planet/IMG_5957.webp" }, { imgUrl: "/art/planet/IMG_5064.webp" }, { imgUrl: "/art/planet/IMG_6017.webp" }];
const radioactive = [{ imgUrl: "/art/radioactive/IMG_5939.webp" }, { imgUrl: "/art/radioactive/IMG_5942.webp" }, { imgUrl: "/art/radioactive/IMG_6016.webp" }];
const shapes = [{ imgUrl: "/art/shapes/IMG_6568.webp" }, { imgUrl: "/art/shapes/IMG_6576.webp" }];
const toxic = [
  { imgUrl: "/art/toxic/IMG_6117.webp" },
  { imgUrl: "/art/toxic/IMG_6115.webp" },
  { imgUrl: "/art/toxic/IMG_5151.webp" },
  { imgUrl: "/art/toxic/IMG_5275.webp" },
  { imgUrl: "/art/toxic/IMG_6121.webp" },
  { imgUrl: "/art/toxic/IMG_6120.webp" },
  { imgUrl: "/art/toxic/IMG_6289.webp" },
];
const turquoise = [
  { imgUrl: "/art/turquoise/IMG_6422.webp" },
  { imgUrl: "/art/turquoise/IMG_6200.webp" },
  { imgUrl: "/art/turquoise/IMG_6416.webp" },
  { imgUrl: "/art/turquoise/IMG_6423.webp" },
  { imgUrl: "/art/turquoise/IMG_6425.webp" },
];
const winter = [{ imgUrl: "/art/winter/IMG_6126.webp" }, { imgUrl: "/art/winter/IMG_5251.webp" }, { imgUrl: "/art/winter/IMG_5257.webp" }, { imgUrl: "/art/winter/IMG_6256.webp" }];

export default function SliderImages() {
  return (
    <div className="flex flex-row flex-wrap">
      <ImageContainer images={barcelona} title="Barcelona" material="Realism, Acrylic" />
      <ImageContainer images={beach} title="Beach day" material="Fluid Art, Abstract, Silicone Oil" />
      <ImageContainer images={blue} title="Blue" material="Fluid Art, Abstract, Silicone Oil" />
      <ImageContainer images={colors} title="Chameleon" material="Fluid Art, Abstract, Silicone Oil" />
      <ImageContainer images={dog} title="Husky" material="Realism, Acrylic" />
      <ImageContainer images={dune} title="Dune" material="Fluid Art, Abstract, DIY Frame, Resin" />
      <ImageContainer images={equanimity} title="Equanimity" material="Fluid Art, Abstract, DIY Frame" />
      <ImageContainer images={gold} title="Golden hour" material="Fluid Art, Abstract, DIY Frame, Resin" />
      <ImageContainer images={oasis} title="Oasis" material="Fluid Art, Abstract, Silicone Oil, Resin" />
      <ImageContainer images={orchid} title="Mom's orchid" material="Fluid Art, Abstract, Resin" />
      <ImageContainer images={planet} title="Space" material="Fluid Art, Abstract, Silicone Oil" />
      <ImageContainer images={radioactive} title="Toxic" material="Fluid Art, Abstract, Silicone Oil, Wood" />
      <ImageContainer images={shapes} title="Shapes" material="Abstract, Acrylic" />
      <ImageContainer images={toxic} title="Serpent" material="Fluid Art, Abstract, Silicone Oil, Resin" />
      <ImageContainer images={turquoise} title="Turquoise" material="Fluid Art, Abstract, Silicone Oil, Resin" />
      <ImageContainer images={winter} title="Winter" material="Fluid Art, Abstract, Silicone Oil" />
    </div>
  );
}
