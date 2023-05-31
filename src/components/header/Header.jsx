import { Navbar } from "./Navbar";

export function Header( {changeDarkMode} ) {
  return (
    <header className="fixed top-0  z-50 w-full h-auto border border-transparent border-b-[#e4e1ec] backdrop-blur-3xl dark:border-b-[#47464f] ">
      <Navbar changeDarkMode={changeDarkMode} darkMode></Navbar>
    </header>
  );
}
