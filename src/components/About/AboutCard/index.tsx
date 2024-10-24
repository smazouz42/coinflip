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

export function ServiceCard({ title, description, logo, buttonText }) {
    return (
        <Card className=" ~max-w-xs/xl bg-gray-900 border-none rounded-3xl">
            <CardHeader className="flex items-center justify-center">
                <CardTitle>
                    <Image
                        src={logo}
                        width={80}
                        height={80}
                        alt="Picture of arrows"
                        className="object-contain"
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-center">
                <h1 className="text-lg sm:text-xl lg:text-2xl text-white">
                    {title}
                </h1>
                <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="ghost" className="flex items-center space-x-2 p-0 text-base sm:text-lg text-purple-800">
                    <span className="text-purple-600">{buttonText}</span>
                    <FiArrowRight />
                </Button>
            </CardFooter>
        </Card>
    );
}
