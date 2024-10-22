'use client';
import { useState } from "react";
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

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
    const [direction, setDirection] = useState(1);

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const handlePrev = () => {
        setDirection(-1);
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
            <div className="lg:flex gap-4 w-full justify-center hidden px-4">
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

            <div className="relative flex gap-4 w-full justify-center lg:hidden items-center">
                <button 
                    className="absolute left-4 p-2 bg-gray-800 text-white rounded-full"
                    onClick={handlePrev}
                >
                    <FaArrowLeft />
                </button>
                <motion.div
                                                variants={variants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{ duration: 0.5 }}
                >
                <ServiceCard
                    key={currentIndex}
                    title={servicesData[currentIndex].title}
                    description={servicesData[currentIndex].description}
                    logo={servicesData[currentIndex].imageUrl}
                    buttonText={servicesData[currentIndex].buttonText}
                />
                </motion.div>

                <button 
                    className="absolute right-4 p-2 bg-gray-800 text-white rounded-full"
                    onClick={handleNext}
                >
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export { Services };
