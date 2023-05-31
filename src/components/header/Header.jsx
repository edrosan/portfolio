import { Navbar } from "./Navbar";

export function Header( {changeDarkMode} ) {
  return (
    <header className="fixed top-0 z-50 w-full h-auto bg-[#fffbff] dark:bg-[#1c1b1f]">
      <Navbar changeDarkMode={changeDarkMode} darkMode></Navbar>
    </header>
  );
}
