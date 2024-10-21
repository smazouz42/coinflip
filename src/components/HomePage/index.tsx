import Image from "next/image"
import { Header } from "./Header"
const Homepage = () => {
  return (
    <section>
      <Image src="/images/background-main.png" alt="background" width={1440} height={700} className="w-full aspect-[2]" />
      <Header />

    </section>

  )
}

export { Homepage }