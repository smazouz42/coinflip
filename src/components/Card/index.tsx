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

export function CardWithForm({ title, description, imageUrl, buttonText }) {
    return (
        <Card className="w-[400px] bg-gray-900 h-[370px] border-none rounded-3xl">
            <CardHeader className="flex items-center justify-center">
                <CardTitle>
                    <Image
                        src={imageUrl}
                        width={80}
                        height={80}
                        alt="Picture of arrows"
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-center">
                <h1 className="text-3xl text-white">{title}</h1>
                <p className="text-gray-500">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="ghost" className="flex items-center space-x-2 p-0 text-lg text-purple-800">
                    <span className="text-purple-600">{buttonText}</span>
                    <FiArrowRight className="" />
                </Button>
            </CardFooter>
        </Card>
    );
}
