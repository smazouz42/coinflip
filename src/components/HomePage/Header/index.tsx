import { Logo } from "@/components/HomePage/Header/Logo";
import { NavBar } from "@/components/HomePage/Header/NavBar";

const Header = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-2">
      <Logo/>
      <NavBar />
    </nav>
  );
};

export { Header };
