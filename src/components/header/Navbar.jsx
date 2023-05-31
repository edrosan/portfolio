import { OpcNavbar } from "../../OpcNavbar";
import { ButtonDarkMode } from "../../ButtonDarkMode";
import { Icon } from "../icons/Icon";
import { GitHub } from "../icons/GitHub";
import { Linkedin } from "../icons/Linkedin";
import { ButtonNavbar } from "./ButtonNavbar";
import { Svg } from "../icons/Svg";
import { Menu } from "../icons/Menu";
import { Close } from "../icons/Close";
import { MenuDesplegable } from "./menu-desplegable/MenuDesplegable";
import { useState } from "react";

export function Navbar({ changeDarkMode, darkMode }) {
  const [openMenu, setOpenMenu] = useState(false);

  const changeOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="w-auto h-auto mx-4 my-4  grid grid-cols-2 lg:w-[1024px] lg:mx-auto md:justify-between">
      <div className="text-[#1c1b1f] dark:text-[#e5e1e6]">Rodriguez</div>

      <div className="flex justify-self-end">
        <ButtonNavbar changeOpenMenu={changeOpenMenu}>
          <Svg>
            {openMenu ? <Close></Close> : <Menu></Menu>}
          </Svg>
        </ButtonNavbar>

        <div className="hidden  md:flex md:gap-2">
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

      {openMenu ? (
        <MenuDesplegable changeOpenMenu={changeOpenMenu} changeDarkMode={changeDarkMode}></MenuDesplegable>
      ) : (
        <></>
      )}
    </nav>
  );
}
