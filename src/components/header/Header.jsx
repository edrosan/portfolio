import { Navbar } from "./Navbar";

export function Header( {changeDarkMode} ) {
  return (
    <header className="w-full h-auto fixed top-0 z-50  bg-[#fffbff] dark:bg-[#1c1b1f] ">
      <Navbar changeDarkMode={changeDarkMode} darkMode></Navbar>
    </header>
  );
}
