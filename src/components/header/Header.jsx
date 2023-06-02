import { Navbar } from "./Navbar";

export function Header({ children }) {
  return (
    <header className="w-full h-auto sticky	 top-0 z-50  bg-[#fffbff] border border-transparent dark:bg-[#1c1b1f]   
    md:border-b-[#e4e1ec]  md:dark:border-b-[#47464f] ">
      {children}
    </header>
  );
}
