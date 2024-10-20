import Image from "next/image";
import { HeaderSection } from "@/components/HeaderSection";

export const InvestmentSection = () => {
  return (
    <div className="relative">
      <div className="w-full flex justify-start items-end absolute">
        <Image src="/images/bg-img4.png" width={600} height={878} alt="Crypto visual" />
      </div>
      <div className="top-0 left-0 w-full h-full flex flex-col">
        <div className="flex w-full flex-col items-center gap-8 relative">
          <HeaderSection
            title="Buy and sell with the lowest fees in the industry"
            description="Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card."
            titleStyle="leading-[6rem] max-w-[1000px] font-semibold text-[75px]"
            btnStyle="rounded-lg h-fit w-fit px-6 py-3 text-xl font-semibold bg-none text-purple-800"
            clasStyle="flex flex-col gap-2 text-white font-sans flex-grow justify-center items-center text-center"
          />
          <div>
            <Image src="/images/table.png" width={1280} height={448} alt="Crypto visual" />
          </div>
        </div>
        <div className="flex w-full bg-gray-200">
          <div className="w-1/2 flex items-center justify-cente bg-red-500">
            <HeaderSection
              title="Take your first step into safe, secure crypto investing"
              description="Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean."
              titleStyle="leading-[6rem] max-w-[700px] font-semibold text-[75px]"
              btnStyle="rounded-lg h-fit w-fit px-6 py-3 bg-gradient-to-r from-[#933FFE] to-[#18C8F0] text-xl font-semibold"
              clasStyle="flex flex-col gap-8 text-white font-sans flex-grow"
            />
          </div>
          <div className="w-1/2 relative">
            <Image src="/images/background.png" className="relative" width={1800} height={1950} alt="Crypto visual" />
            <Image src="/images/item2.png" className="absolute inset-0 m-auto" width={600} height={600} alt="Crypto visual" />
          </div>
        </div>
      </div>
    </div>
  );
};
