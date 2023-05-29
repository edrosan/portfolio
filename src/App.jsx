import { useState } from "react";
import "./App.css";
import { Profile } from "./Profile";
import { Proyectos } from "./Proyectos";
import iconNight from "./assets/img/night.png"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div>
        <span>Gith</span>
        <span>LIn</span>
        <span>
          <button onClick={changeDarkMode}>
            <img src={iconNight} />
          </button>
        </span>
      </div>
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
