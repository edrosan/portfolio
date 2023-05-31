import { OpcNavbar } from "../../../OpcNavbar";
import { Home } from "../../icons/Home";
import { Svg } from "../../icons/Svg";

export function MenuDesplegable() {
  return (
    <>
      <div className="w-full h-screen col-span-2 mt-10 flex flex-col items-start gap-5">
        <OpcNavbar goTo="#inicio">
          <Svg>
            <Home></Home>
          </Svg>
          inicio
        </OpcNavbar>
        <OpcNavbar goTo="#skills">skills</OpcNavbar>
        <OpcNavbar goTo="#proyectos">proyectos</OpcNavbar>
        <OpcNavbar goTo="#contacto">contacto</OpcNavbar>
      </div>
    </>
  );
}
