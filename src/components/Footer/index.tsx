import Image from "next/image"
import { Title } from "../Systems/Title"
import { Input } from "../ui/input"

const Footer = () => {
    return (
        <section className="container mx-auto flex flex-col p-10">
            <div className="flex flex-col items-center justify-center gap-4 h-full ~py-10/20 ">
                <Title content="Receive transmissions" size="sm" maxWidth="sm" className="text-center" />
                <p className="text-gray-400 ~text-xs/lg ~lg:max-w-2xl text-center">Unsubscribe anytime. <span className="text-white">Privacy Policy</span></p>
                <Input
                    type="email"
                    placeholder="Email"
                    className="max-w-xs bg-[#171717]  text-white"
                />
            </div>
            <div className="flex justify-between text-gray-400 ~text-xs/lg opacity-30 ">
                <div className="flex flex-col gap-4 w-1/3  ">
                    <h1 className="text-md font-semibold">coinFlip</h1>
                    <p>CoinFlip, the world’s leading bitcoin ATM operator, makes it so flippin’ easy to buy and sell bitcoin via cash, card, or bank transfer. </p>
                    <p>© 2021 GPD Holdings, LLC FinCEN MSB</p>
                </div>
                <div className="flex flex-col gap-4 w-1/3  items-center">
                    <p className="text-md font-semibold">Company</p>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>News</p>
                    <p>Merch</p>
                </div>
                <div className="flex flex-col gap-4 w-1/3">
                    <p className="text-md font-semibold">Privacy Policy and Terms of Service</p>
                    <p>CoinFlip Privacy Policy</p>
                    <p>CoinFlip Biometrics Privacy Policy</p>
                    <p>CoinFlip Financial Privacy Notice</p>
                    <p>CoinFlip Terms of Service</p>
                    <p>CoinFlip Trade Desk Terms of Service</p>
                </div>
            </div>
        </section>
    )
}
export { Footer }
