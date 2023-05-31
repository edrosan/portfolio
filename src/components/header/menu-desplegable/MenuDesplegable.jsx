import { ButtonDarkMode } from "../../../ButtonDarkMode";
import { OpcNavbar } from "../../../OpcNavbar";
import { GitHub } from "../../icons/GitHub";
import { Home } from "../../icons/Home";
import { Dashboard } from "../../icons/Dashboard";
import { Message } from "../../icons/Message";
import { Icon } from "../../icons/Icon";
import { Linkedin } from "../../icons/Linkedin";
import { Svg } from "../../icons/Svg";
import { Tools } from "../../icons/Tools";

export function MenuDesplegable({ changeOpenMenu, changeDarkMode }) {
  return (
    <>
      <div className="w-full h-screen relative  mb-0 px-4 flex flex-col items-start gap-5">
        <div className="w-full mt-8 flex flex-col gap-4">
          <OpcNavbar goTo="#inicio" changeOpenMenu={changeOpenMenu}>
            <Svg>
              <Home></Home>
            </Svg>
            inicio
          </OpcNavbar>
          <OpcNavbar goTo="#skills" changeOpenMenu={changeOpenMenu}>
            <Svg>
              <Tools></Tools>
            </Svg>
            skills
          </OpcNavbar>
          <OpcNavbar goTo="#proyectos" changeOpenMenu={changeOpenMenu}>
            <Svg>
              <Dashboard></Dashboard>
            </Svg>
            proyectos
          </OpcNavbar>
          <OpcNavbar goTo="#contacto" changeOpenMenu={changeOpenMenu}>
            <Svg>
              <Message></Message>
            </Svg>
            contacto
          </OpcNavbar>
        </div>

        <div className="w-full  mt-auto mb-14  flex justify-between bg-[#fffbff] dark:bg-[#1c1b1f]">
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
    </>
  );
}
