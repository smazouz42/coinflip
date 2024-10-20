import { CardWithForm } from "@/components/Card";

export const InfoSection = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex gap-10 justify-center items-center">
        <CardWithForm
          title="Trade Desk"
          description="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
          imageUrl="/icons/arrows.png"
          buttonText="Get Started"
        />
        <CardWithForm
          title="CoinFlip ATMs"
          description="We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto"
          imageUrl="/icons/files.png"
          buttonText="Find an ATM"
        />
        <CardWithForm
          title="Coin Flip Wallet"
          description="We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto"
          imageUrl="/icons/file.png"
          buttonText="Download the App"
        />
      </div>
    );
  };