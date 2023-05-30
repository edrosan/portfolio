import { useState } from "react";
import "./App.css";
import { Profile } from "./Profile";
import { Proyectos } from "./Proyectos";
import { Navbar } from "./Navbar";
import { Contacto } from "./Contacto";
import { Skills } from "./Skills";
import { Tooltip } from "flowbite";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full h-[50px] bg-[#fffbff] dark:bg-[#1c1b1f]">
        <Navbar changeDarkMode={changeDarkMode} darkMode></Navbar>
      </header>

      <main className="w-full h-full flex flex-col mt-[50px]  px-4 py-12 md:mx-auto md:w-[1024px]">
        <Profile></Profile>
        

        <Skills></Skills>

        <Proyectos></Proyectos>

        <Contacto></Contacto>
      </main>
    </>
  );
}

export default App;
