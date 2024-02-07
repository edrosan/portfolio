import { useState } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Profile } from "./components/main/profile/Profile";
import { Skills } from "./components/main/Skills/Skills";
import { Proyectos } from "./components/main/Proyectos/Proyectos";
import { Contacto } from "./components/main/contacto/Contacto";
import { Navbar } from "./components/header/Navbar";
import { Footer } from "./components/footer/Footer";
import esgrima from "./assets/img/esgrima-1.jpg";
import esgrima2 from "./assets/img/esgrima-2.jpg";
import esgrima3 from "./assets/img/esgrima-3.jpg";
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

        <div className="flex flex-col gap-4 dark:text-[#e5e1e6]">
          <h2 className="text-2xl font-bold">Conóceme más...</h2>

          <div className="flex flex-col gap-4 ">
            <div className="border p-2 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">Japones</h3>
              <p className="text-lg">
                El japones una de los idiomas de mi aprendizaje. Me apasiona
                mucho la cultura japones, el anime, la musica de japon, por eso
                he desidido aprender el japones, es una lengua muy bella y con
                cierta complicación pero cuando la empiezas a entender te
                enamora. Actualmente tengo la certificación N5 de Japones.
              </p>
            </div>

            <div className="border p-2 rounded-xl shadow-md flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Esgrima</h3>
              <p className="text-lg">
                En 2022 me aventura en una de las aventuras que mas me han
                sorpendido, una idea loca de entrar a esgrima. Me enamore desde
                el primer día que la empece a practicar, es un deporte noble,
                elegante y con mucha historia. Me convertir en espadista y ya
                llevo mas de un año en esto, es un deporte que me ha enseñado
                mucho y me ha ayudado a crecer como persona.
              </p>

              <div className="flex flex-wrap gap-2 items-center justify-evenly">
                <div className="w-[200px] h-[200px] overflow-hidden rounded-xl">
                  <img src={esgrima2} className="w-full h-full object-cover" />
                </div>
                <div className="w-[200px] h-[200px] overflow-hidden rounded-xl">
                  <img src={esgrima} className="w-full h-full object-cover" />
                </div>
                <div className="w-[200px] h-[200px] overflow-hidden rounded-xl">
                  <img src={esgrima3} className=" w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Contacto></Contacto>
      </Main>

      <Footer></Footer>
    </>
  );
}

export default App;
