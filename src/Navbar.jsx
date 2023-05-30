import { IconGitHub } from "./IconGitHub";
import { OpcNavbar } from "./OpcNavbar";
import { ButtonDarkMode } from "./ButtonDarkMode";
import IconLogo from "./assets/img/logo.png";

export function Navbar({ changeDarkMode, darkMode }) {
  return (
    <nav className="w-full h-10 m-auto flex justify-center   gap-4 md:w-[1024px] md:mx-auto md:justify-between">
      <div>
        <img src={IconLogo} className="w-auto h-full" />
      </div>
      <div className="flex gap-4 ">
        <div className="hidden md:flex">
          <OpcNavbar goTo={"#inicio"}>Inicio</OpcNavbar>
          <OpcNavbar goTo={"#skills"}>Skills</OpcNavbar>
          <OpcNavbar goTo={"#proyectos"}>Proyectos</OpcNavbar>
          <OpcNavbar goTo={"#contacto"}>Contacto</OpcNavbar>
        </div>

        <IconGitHub></IconGitHub>

        <ButtonDarkMode
          darkMode
          changeDarkMode={changeDarkMode}
        ></ButtonDarkMode>
      </div>
    </nav>
  );
}
