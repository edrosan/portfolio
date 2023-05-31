import IconLogo from "../../assets/img/logo.png";
import { OpcNavbar } from "../../OpcNavbar";
import { ButtonDarkMode } from "../../ButtonDarkMode";
import { Icon } from "../icons/Icon";
import { GitHub } from "../icons/GitHub";
import { Linkedin } from "../icons/Linkedin";

export function Navbar({ changeDarkMode, darkMode }) {
  return (
    <nav className="w-full h-auto mx-auto mt-4 flex justify-center   gap-2 md:w-[1024px] md:mx-auto md:justify-between">
      <div>
        <img src={IconLogo} className="w-auto h-[24px]" />
      </div>

      <div className="flex">
        <div className="hidden md:flex md:gap-2">
          <OpcNavbar goTo="#inicio">Inicio</OpcNavbar>
          <OpcNavbar goTo="#skills">Skills</OpcNavbar>
          <OpcNavbar goTo="#proyectos">Proyectos</OpcNavbar>
          <OpcNavbar goTo="#contacto">Contacto</OpcNavbar>

          <Icon
            goTo="https://www.linkedin.com/in/edrodsan/"
            name="linkedin"
            textTooltip="linkedin/edrosan"
          >
            <Linkedin></Linkedin>
          </Icon>

          <Icon
            goTo="https://github.com/edrosan"
            name="github"
            textTooltip="github/edrosan"
          >
            <GitHub></GitHub>
          </Icon>

          <ButtonDarkMode
            darkMode
            changeDarkMode={changeDarkMode}
          ></ButtonDarkMode>
        </div>
      </div>
    </nav>
  );
}
