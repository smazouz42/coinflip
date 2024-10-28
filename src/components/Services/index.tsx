import { Button } from "@/components/Systems/button"
import { Title } from "@/components/Systems/Title"
import Image from "next/image";
import { CustomerSupport } from "./CustomerSupport";

const Services = () => {
    return (
        <section className="relative flex flex-col w-full justify-between">
                <Image
                    src="/images/services-background.png"
                    width={600}
                    height={1045}
                    alt="Crypto visual"
                    className="flex justify-end absolute top-0 right-0 w-1/2"
                    style={{ zIndex: -1 }}
                />
            <div className="container mx-auto flex flex-col items-center justify-center ~gap-4/8 p-20">
                <Title content="A crypto investment platform that invests in you " size="sm" maxWidth="sm" />
                <p className="text-gray-400 ~text-sm/lg ~max-w-lg/xl text-center">We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it." </p>
                <Button variant="gradient"> Get Started </ Button>
            </div>
            <CustomerSupport />
        </section>
    )
}
export { Services }