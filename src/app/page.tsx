import { NavBar } from "@/components/NavBar";
import { BackgroundImage } from "@/components/BackgroundImage";
import { HeaderSection } from "@/components/HeaderSection";
import { InfoSection } from "@/components/InfoSection";
import { SupportSection } from "@/components/SupportSection";
import { InvestmentSection } from "@/components/InvestmentSection";

export default function HomePage() {
  return (
    <>
      <BackgroundImage src="/images/background-main.png" alt="Crypto background" width={1440} height={878} aspect={1.82}>
        <NavBar />
        <HeaderSection title="We make crypto clear and simple"
          description="Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level."
          titleStyle="leading-[8rem] max-w-[950px] font-semibold text-[120px]"
          btnStyle="rounded-lg h-fit w-fit px-6 py-3 bg-gradient-to-r from-[#933FFE] to-[#18C8F0]  text-xl font-semibold"
          clasStyle="flex flex-col gap-8 text-white font-sans flex-grow justify-center items-center text-center"
        />
      </BackgroundImage>

      <BackgroundImage src="/images/circles.png" alt="Crypto info background" width={1440} height={878} aspect={3.20}>
        <InfoSection />
      </BackgroundImage>
      <SupportSection />
      <InvestmentSection />

    </>
  );
}