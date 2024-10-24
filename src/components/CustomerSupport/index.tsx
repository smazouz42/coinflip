
import { Button } from "@/components/Systems/button"
import { Description } from "@/components/Systems/description"
import { Title } from "@/components/Systems/Title"
import Image from "next/image"
const CustomerSupport = () => {
    return (
        <div className="container mx-auto flex  w-full ">
            <div className="w-1/2">
                <Image src="/images/service-logo.png" width={580} height={420} alt="Crypto visual" />
            </div>
            <div className="flex flex-col justify-center ~gap-4/8 w-1/2 ">
                <Title content="A crypto investment platform that invests in you " size="sm" maxWidth="sm" />
                <Description content="We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it." />
                <Button >
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export {CustomerSupport }