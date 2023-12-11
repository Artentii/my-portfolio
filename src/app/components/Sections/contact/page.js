import Image from "next/image";

//Components
import FormComponent from "../../form";

export default function Contact() {
  return (
    <div className="p-10" id="contact">
      <h3 className="text-6xl font-semibold text-center text-razzmataz">Contact</h3>
      <div className="flex flex-row justify-between lg:w-3/4 mx-auto my-4">
        <Image src="/contact.png" width="500" height="500" alt="3D laptop" priority />
        <FormComponent />
      </div>
    </div>
  );
}
