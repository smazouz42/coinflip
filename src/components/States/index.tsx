import { Button } from "@/components/Systems/button";
import { Description } from "@/components/Systems/description";
import { Title } from "@/components/Systems/Title";
import Image from "next/image";
import Icon from "@/components/icons/Arrow";
import { CryptointoSection } from "../CryptoIntroSection";

const State = () => {
    return (
        <div className="relative flex flex-col w-full gap-6">
            {/* <div className="absolute bottom-0 right-0 w-1/2">
            <Image
                src="/images/luggage-background.png"
                width={843}
                height={1950}
                alt="Crypto visual"
            />
            </div> */}
            <div className="absolute top-0 left-0 w-1/2">
                <Image
                    src="/images/state-background.png"
                    width={600}
                    height={878}
                    alt="Crypto visual"
                />
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 h-full">
                <Title
                    content="Buy and sell with the lowest fees in the industry"
                    size="sm"
                    maxWidth="sm"
                    className="text-center"
                />
                <Description
                    content="Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card."
                    position="center"
                />
                <Button variant="iconButton">
                    Learn more <Icon />
                </Button>
            </div>
            <div className="relative w-full">
                <div className="flex mx-auto container items-center w-full  gap-4">
                    <div className="flex flex-col items-center w-full ~gap-1/16 relative ">
                        <Image
                            src="/images/state-table.png"
                            width={1180}
                            height={878}
                            alt="Crypto visual"
                            className="w-full"
                        />
                        <CryptointoSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { State };
