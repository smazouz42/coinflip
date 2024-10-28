import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
    title: string;
    description: string;
    logo: string;
    buttonText: string;
}

export function ServiceCard({ title, description, logo, buttonText }: ServiceCardProps) {
    return (
        <Card className="bg-gray-900 border-none rounded-3xl sm:max-w-sm lg:max-w-md max-w-[15rem] ">
            <CardHeader className="flex items-center justify-center">
                <CardTitle className="flex justify-center items-center ">
                    <Image
                        src={logo}
                        width={80}
                        height={80}
                        alt="Picture of arrows"
                        className="object-contain ~w-10/24 ~h-10/24"
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col ~gap-0/4 text-center px-6">
                <h1 className="~text-lg/4xl font-semibold  text-white">
                    {title}
                </h1>
                <p className="text-gray-500 ~text-xs/lg ">
                    {description}
                </p>

            </CardContent>
            <CardFooter className="flex justify-center ">
                <Button variant="ghost" className="flex items-center font-semibold text-purple-800">
                    <span className="text-purple-600 ~text-sm/lg">{buttonText}</span>
                    <FiArrowRight />
                </Button>
            </CardFooter>
        </Card>
    );
}
