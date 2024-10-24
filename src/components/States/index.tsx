import { Button } from "@/components/Systems/button";
import { Description } from "@/components/Systems/description";
import { Title } from "@/components/Systems/Title";
import Image from "next/image";
import Icon from "@/components/icons/arrow";

const State = () => {
    return (
        <div className="relative flex flex-col w-full gap-6 border">
            <div className="absolute bottom-0 right-0 w-1/2">
            <Image
                src="/images/luggage-background.png"
                width={843}
                height={1950}
                alt="Crypto visual"
            />
            </div>
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
                    <div className="flex flex-col items-center w-full ~gap-1/4 relative">
                        <Image
                            src="/images/state-table.png"
                            width={1180}
                            height={878}
                            alt="Crypto visual"
                            className="w-full"
                        />

                        <div className="flex w-full gap-8 ">
                            <div className="flex flex-col justify-center gap-8 w-1/2">
                                <Title
                                    content="Take your first step into safe, secure crypto investing"
                                    size="sm"
                                    maxWidth="sm"
                                />
                                <Description
                                    content="Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean. Separated they live in Bookmarks right at the coast."
                                />
                                <Button variant="gradient">Get Started</Button>
                            </div>
                            <div className="w-1/2 relative  ">

                                <Image
                                    src="/images/luggage.png"
                                    className=""
                                    width={294}
                                    height={298}
                                    alt="Crypto visual"
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export { State };
