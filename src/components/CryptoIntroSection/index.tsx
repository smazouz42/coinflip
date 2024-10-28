import { Button } from "@/components/Systems/button";
import { Title } from "@/components/Systems/Title";
import Image from "next/image";
const CryptointoSection = () => {
    return (
        <div className="flex py-10 md:flex-row  flex-col-reverse">
            <div className="flex flex-col  gap-8 w-1/2">
                <Title
                    content="Take your first step into safe, secure crypto investing"
                    size="sm"
                    maxWidth="sm"
                    position="left"
                />
                 <p className="text-gray-400 ~text-sm/lg ~max-w-lg/xl ">Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean. Separated they live in Bookmarks right at the coast.</p>
                <Button variant="gradient">Get Started</Button>
            </div>
            <div className="w-1/2 flex justify-center">

                <Image
                    src="/images/luggage.png"
                    className="flex items-end"
                    width={580}
                    height={420}
                    alt="Crypto visual"
                />
            </div>
        </div>
    )
}
export { CryptointoSection }