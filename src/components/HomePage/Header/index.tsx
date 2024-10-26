import { Logo } from "@/components/HomePage/Header/Logo";
import { NavBar } from "@/components/HomePage/Header/NavBar";

const Header = () => {
  return (
    <nav className="container mx-auto w-full flex items-center justify-between px-4 py-2 absolute top-0">
      <Logo/>
      <NavBar />
    </nav>
  );
};

export { Header };