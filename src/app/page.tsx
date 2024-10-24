import { Homepage } from "../components/HomePage"
import { About } from "../components/About"
import { Services } from "../components/Services"
import { State } from "@/components/States";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Homepage />
      <About />
      <Services/>
      <State />
      <Footer />
    </>
  );
}