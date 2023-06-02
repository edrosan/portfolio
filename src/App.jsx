import { useState } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Profile } from "./components/main/profile/Profile";
import { Skills } from "./components/main/Skills/Skills";
import { Proyectos } from "./components/main/Proyectos/Proyectos";
import { Contacto } from "./components/main/contacto/Contacto";
import { Navbar } from "./components/header/Navbar";
import { Footer } from "./components/footer/Footer";
import { Tooltip } from 'flowbite';
import "./App.css";

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

      <Footer></Footer>
    </>
  );
}

export default App;
