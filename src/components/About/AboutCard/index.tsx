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
        <Card className="bg-gray-900 border-none rounded-3xl sm:max-w-xs lg:max-w-sm max-w-[15rem] ">
            <CardHeader className="flex items-center justify-center">
                <CardTitle className="flex justify-center items-center ">
                    <Image
                        src={logo}
                        width={80}
                        height={80}
                        alt="Picture of arrows"
                        className="object-contain ~w-10/16 ~h-10/16"
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col ~gap-0/4 text-center">
                <h1 className="text-lg  text-white">
                    {title}
                </h1>
                <p className="text-gray-500 ~text-xs/lg max-w-xs/sm">
                    {description}
                </p>
                <Button variant="ghost" className="flex items-center space-x-2 p-0  text-purple-800">
                    <span className="text-purple-600">{buttonText}</span>
                    <FiArrowRight />
                </Button>
            </CardContent>
        </Card>
    );
}
