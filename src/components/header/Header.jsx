import { Navbar } from "./Navbar";

export function Header({ children }) {
  return (
    <header className="w-full h-auto fixed top-0 z-50  bg-[#fffbff] dark:bg-[#1c1b1f] ">
      {children}
    </header>
  );
}
