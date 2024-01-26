import Image from "next/image";

export default function Divider() {
  return (
    <div>
      <Image className="mx-auto hidden lg:block" src="/deco/divider.png" alt="Bulb" width={1400} height={100} />
      <Image className="mx-auto lg:hidden" src="/deco/divider_s.png" alt="Bulb" width={600} height={100} />
    </div>
  );
}
