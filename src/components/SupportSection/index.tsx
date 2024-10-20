import Image from "next/image";
import { HeaderSection } from "@/components/HeaderSection";

export const SupportSection = () => {
  return (
    <div className="relative">
      <div className="w-full flex justify-end absolute">
        <Image src="/images/bg-img3.png" width={600} height={878} alt="Crypto visual" />
      </div>
      <div className="top-0 left-0 w-full h-full flex flex-col">
        <HeaderSection
          title="A crypto investment platform that invests in you"
          description="We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it."
          titleStyle="leading-[6rem] max-w-[1000px] font-semibold text-[75px]"
          btnStyle="rounded-lg h-fit w-fit px-6 py-3 bg-gradient-to-r from-[#933FFE] to-[#18C8F0] text-xl font-semibold"
          clasStyle="flex flex-col gap-8 text-white font-sans flex-grow justify-center items-center text-center"
        />

        <div className="flex w-full">
          <div className="w-1/2">
            <Image src="/images/img1.png" width={670} height={1143} alt="Crypto visual" />
          </div>
          <div className="w-1/2 flex items-center">
            <HeaderSection
              title="24/7 access to full-service customer support"
              description="We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it."
              titleStyle="leading-[6rem] max-w-[700px] font-semibold text-[75px]"
              btnStyle="rounded-lg h-fit w-fit px-6 py-3 text-xl font-semibold bg-none border"
              clasStyle="flex flex-col gap-8 text-white font-sans flex-grow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
