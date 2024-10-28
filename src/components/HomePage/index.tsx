import Image from "next/image"
import { Header } from "./Header"
import { Button } from "@/components/Systems/button"
import { Title } from "@/components/Systems/Title"

const Homepage = () => {
  return (
    <section className="aspect-[1.82] relative w-full flex flex-col items-center ">
      <Image src="/images/bg-imgc:\Users\smazouz\Downloads\bg-img.png.png" alt="background" width={1440} height={700} className="w-full  absolute" style={{ zIndex: -1 }} />
      <Header />
      <div className="flex flex-col items-center justify-center ~gap-4/8 h-full container">
        <Title content="We make crypto clear and simple" size="lg" maxWidth="lg" className="text-center" />
        <p className="text-gray-400 ~text-sm/lg ~max-w-lg/xl text-center">Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.e</p>
        <Button variant="gradient" > Get Started </Button>
      </div>
    </section>
  )
}

export { Homepage }