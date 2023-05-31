import { useState } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import "./App.css";
import { Profile } from "./Profile";
import { Skills } from "./Skills";
import { Proyectos } from "./Proyectos";
import { Contacto } from "./Contacto";
import { Navbar } from "./components/header/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Header>
        <Navbar changeDarkMode={changeDarkMode} darkMode></Navbar>
      </Header>

      <Main>
        <Profile></Profile>

        <Skills></Skills>

        <Proyectos></Proyectos>

        <Contacto></Contacto>
      </Main>
    </>
  );
}

export default App;
