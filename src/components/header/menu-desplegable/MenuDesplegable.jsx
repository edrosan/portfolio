import { OpcNavbar } from "../../../OpcNavbar";
import { Home } from "../../icons/Home";
import { Svg } from "../../icons/Svg";

export function MenuDesplegable({ changeOpenMenu }) {
  return (
    <>
      <div className="w-full h-screen col-span-2 mt-10 flex flex-col items-start gap-5">
        <OpcNavbar goTo="#inicio" changeOpenMenu={changeOpenMenu}>
          <Svg>
            <Home></Home>
          </Svg>
          inicio
        </OpcNavbar>
        <OpcNavbar goTo="#skills" changeOpenMenu={changeOpenMenu}>
          skills
        </OpcNavbar>
        <OpcNavbar goTo="#proyectos" changeOpenMenu={changeOpenMenu}>
          proyectos
        </OpcNavbar>
        <OpcNavbar goTo="#contacto" changeOpenMenu={changeOpenMenu}>
          contacto
        </OpcNavbar>

        <div>
          
        </div>
      </div>
    </>
  );
}
