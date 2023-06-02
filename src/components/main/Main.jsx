import { Contacto } from "./contacto/Contacto";
import { Profile } from "./profile/Profile";
import { Proyectos } from "./Proyectos/Proyectos";
import { Skills } from "./Skills/Skills";
import { Tooltip } from "flowbite";

export function Main( {children} ) {
  return (
    <main className="m-4 flex flex-col md:w-auto xl:w-[1024px] xl:mx-auto">
      {children}
      
    </main>
  );
}
