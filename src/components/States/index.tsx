import { Button } from "@/components/Systems/button";
import { Title } from "@/components/Systems/Title";
import Image from "next/image";
import Icon from "@/components/icons/Arrow";
import { CryptointoSection } from "../CryptoIntroSection";

const State = () => {
    return (
        <section className="relative flex flex-col w-full gap-6 px-20">
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
            <div className="container mx-auto flex flex-col items-center justify-center h-full  ~py-4/10 gap-4">
                <Title
                    content="Buy and sell with the lowest fees in the industry"
                    size="sm"
                    maxWidth="sm"
                    className="text-center"
                />
                <p className="text-gray-400 ~text-sm/lg ~max-w-lg/xl text-center">Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</p>
                <Button variant="iconButton">
                    Learn more <Icon />
                </Button>
            </div>
            <div className="container mx-auto flex flex-col items-center w-full ~gap-1/16 relative ~pb-8/20 ">
                        <Image
                            src="/images/state-table.png"
                            width={1180}
                            height={878}
                            alt="Crypto visual"
                            className="w-full"
                        />
                    </div>
            <div className="relative w-full ">
                <div className="flex mx-auto container items-center w-full  gap-4">
                        <CryptointoSection />
                </div>
            </div>
        </section>
    );
};

export { State };
