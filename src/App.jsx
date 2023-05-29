import { useState } from "react";
import "./App.css";
import { Profile } from "./Profile";
import { Proyectos } from "./Proyectos";
import { Navbar } from "./Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <header className="w-full h-full flex flex-col px-3 py-2  md:px-36">
        <Navbar changeDarkMode={changeDarkMode} darkMode></Navbar>
      </header>
      <main className="w-full h-full flex flex-col  px-4 py-12 md:px-36">
        <Profile></Profile>

        <Proyectos></Proyectos>
        <div>
          <h1>ACERCA</h1>
        </div>
        <div>
          <h1>CONTACTO</h1>
        </div>
      </main>
    </>
  );
}

export default App;
