'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

const NAV_ITEMS = ["Buy / Sell", "Grow", "Markets", "Business", "Support"];

const NavBarItem = () => (
    <div className="hidden lg:flex items-center w-2/3 justify-between">
        <ul className="flex gap-12 text-white text-sm font-semibold">
            {NAV_ITEMS.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        <div className="flex gap-3">
            <Button className="border rounded-lg px-4 py-2">Sign in</Button>
            <Button className="rounded-lg bg-gradient-to-r from-[#933FFE] to-[#18C8F0] px-4 py-2">
                Sign up
            </Button>
        </div>
    </div>
);

const MobileMenu = ({ open, toggleOpen }: { open: boolean, toggleOpen: () => void }) => (
    open ? (
        <div className="absolute top-0 h-screen right-0 bg-gray-700 w-2/3 flex flex-col justify-between">
            <div className="flex justify-end p-4">
                <Button className="w-10 h-10 bg-transparent text-white" onClick={toggleOpen}>
                    <X />
                </Button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
                <ul className="flex flex-col text-white text-md w-full">
                    {NAV_ITEMS.map((item, index) => (
                        <li
                            key={item}
                            className={`py-2 text-center border-t border-white ${index === NAV_ITEMS.length - 1 ? "border-b" : ""}`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-3 w-full p-4">
                <Button className="text-white">Sign in</Button>
                <Button className="rounded-lg bg-gradient-to-r from-[#933FFE] to-[#18C8F0] px-4 py-2 text-white">
                    Sign up
                </Button>
            </div>
        </div>
    ) : null
);

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((prev) => !prev);

    return (
        <>
            <NavBarItem />
            <div className="lg:hidden">
                <Button className="w-10 h-10 bg-none" onClick={toggleOpen}>
                    <AlignJustify />
                </Button>
                <MobileMenu open={open} toggleOpen={toggleOpen} />
            </div>
        </>
    );
};

export { NavBar };
