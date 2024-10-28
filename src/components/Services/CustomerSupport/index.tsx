
import { Button } from "@/components/Systems/button"
import { Title } from "@/components/Systems/Title"
import Image from "next/image"
const CustomerSupport = () => {
    return (
        <div className="container mx-auto flex w-full sm:flex-row flex-col p-20 ">
            {/* <Image
                src="/images/service-logo-bg.png"
                width={670}
                height={10}
                alt=""
                className="flex justify-end absolute botton-0 left-0 border"
            /> */}
            <div className="sm:w-1/2 w-full">
                <Image src="/images/service-logo.png" width={580} height={420} alt="Crypto visual" />
            </div>
            <div className="flex flex-col justify-center ~gap-4/8 sm:w-1/2 w-full ">
                <Title content="A crypto investment platform that invests in you " size="sm" maxWidth="sm" position="left" />
                <p className="text-gray-400 ~text-sm/lg">We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it</p>
                <Button >
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export { CustomerSupport }