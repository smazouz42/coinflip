import Image from "next/image"
import { Header } from "./Header"
import { Button } from "@/components/Systems/button"
import { Description } from "@/components/Systems/description"
import { Title } from "@/components/Systems/Title"

const Homepage = () => {
  return (
    <section className="aspect-[1.82] relative w-full flex flex-col items-center">
      <Image src="/images/background-main.png" alt="background" width={1440} height={700} className="w-full  absolute" />
      <Header />
      <div className="flex flex-col items-center justify-center ~gap-4/8 h-full container">
        <Title content="We make crypto clear and simple" size="lg" maxWidth="lg" className="text-center" />
        <Description content="Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.e" position="center" />
        <Button variant="gradient" > Get Started </Button>
      </div>
    </section>

  )
}

export { Homepage }