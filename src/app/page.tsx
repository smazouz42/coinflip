import Image from "next/image";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="reative">
      <Image
        src="/images/bg-img.png"
        width={1440}
        height={878}
        alt="Picture of the author relaive"
        className=" w-full"
      />
      <div className="absolute top-0 left-0 w-full p-4">
        <NavBar/>
      </div>
    </div>
  );
}
