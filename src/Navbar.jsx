import { IconGitHub } from "./IconGitHub";
import { OpcNavbar } from "./OpcNavbar";
import { ButtonDarkMode } from "./ButtonDarkMode";

export function Navbar({ changeDarkMode, darkMode }) {
  return (
    <div  className=" flex justify-center gap-3 w-full h-10 lg:justify-end md:mx-auto md:w-[1200px]">
      <OpcNavbar goTo={"#inicio"}>Inicio</OpcNavbar>
      <OpcNavbar goTo={"#skills"}>Skills</OpcNavbar>
      <OpcNavbar goTo={"#proyectos"}>Proyectos</OpcNavbar>
      <OpcNavbar goTo={"#contacto"}>Contacto</OpcNavbar>

      <IconGitHub></IconGitHub>

        <ButtonDarkMode
          darkMode
          changeDarkMode={changeDarkMode}
        ></ButtonDarkMode>
      
    </div>
  );
}
