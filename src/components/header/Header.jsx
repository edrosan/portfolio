import { Navbar } from "./Navbar";

export function Header( {changeDarkMode} ) {
  return (
    <header className="fixed top-0  z-50 w-full h-auto bg-[#fffbff] border border-transparent border-b-[#e4e1ec] dark:bg-[#1c1b1f] dark:border-b-[#47464f] ">
      <Navbar changeDarkMode={changeDarkMode} darkMode></Navbar>
    </header>
  );
}
