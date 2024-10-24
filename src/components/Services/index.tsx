import { Button } from "@/components/Systems/button"
import { Description } from "@/components/Systems/description"
import { Title } from "@/components/Systems/Title"
import Image from "next/image";
import { CustomerSupport } from "../CustomerSupport";

const Services = () => {
    return (
        <div className=" relative flex flex-col w-full  pt-10 ">
            <div className=" flex justify-end absolute top-0 right-0 w-1/2">
                <Image
                    src="/images/services-background.png"
                    width={600}
                    height={878}
                    alt="Crypto visual"
                />
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center ~gap-4/8">
                <Title content="A crypto investment platform that invests in you " size="sm" maxWidth="sm" />
                <Description content="We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it." position="center" />
                <Button variant="gradient"> Get Started </ Button>
            </div>
            <CustomerSupport/>
        </div>
    )
}
export { Services }