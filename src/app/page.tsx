import { Homepage } from "../components/HomePage"
import { About } from "../components/About"
import { Services } from "../components/Services"
import { State } from "@/components/States";

export default function Page() {
  return (
    <>
      <Homepage />
      <About />
      <Services/>
      <State />
    </>
  );
}