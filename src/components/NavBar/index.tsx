import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="flex  items-center justify-around p-4">
      <div className="text-white text-2xl">
        <h1>COINFLIP</h1>
      </div>
      <ul className="text-white flex gap-12 text-sm font-semibold  ">
        <li>Buy / Sell</li>
        <li>Grow</li>
        <li>Markets</li>
        <li>Business</li>
        <li>Support</li>
      </ul>
      <div className="flex space-x-3">
        <Button className="border rounded-lg h-fit p-x-2">Sign in</Button>
        <Button className=" rounded-lg h-fit bg-gradient-to-r from-[#933FFE] to-[#18C8F0]">Sign up</Button>
      </div>
    </nav>
  );
};
export { NavBar };
