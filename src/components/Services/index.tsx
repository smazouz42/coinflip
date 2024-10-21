'use client'
import { useState } from "react";
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";

const servicesData = [
    {
        title: "Trade Desk",
        description: "Invest in crypto anytime, anywhere with our safe, secure, and easy-to-use online platform.",
        imageUrl: "/icons/arrows.png",
        buttonText: "Get Started",
    },
    {
        title: "CoinFlip ATMs",
        description: "We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto.",
        imageUrl: "/icons/files.png",
        buttonText: "Find an ATM",
    },
    {
        title: "Coin Flip Wallet",
        description: "Manage your crypto easily with our secure wallet application.",
        imageUrl: "/icons/file.png",
        buttonText: "Download the App",
    },
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    };

    return (
        <section className="aspect-[2.63] relative w-full flex flex-col items-center">
            <Image
                src="/images/background-Services.png"
                alt="Background"
                width={1440}
                height={546}
                className="w-full absolute"
            />
             <div className="lg:flex gap-4 w-full justify-center hidden ">
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        logo={service.imageUrl}
                        buttonText={service.buttonText}
                    />
                ))}
            </div>

            <div className="flex gap-4 w-full justify-center lg:hidden">
                <ServiceCard
                    key={currentIndex}
                    title={servicesData[currentIndex].title}
                    description={servicesData[currentIndex].description}
                    logo={servicesData[currentIndex].imageUrl}
                    buttonText={servicesData[currentIndex].buttonText}
                />
            </div>
            {/* <Button onClick */}
        </section>
    );
};

export { Services };
