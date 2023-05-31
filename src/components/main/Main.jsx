import { Contacto } from "../../Contacto";
import { Profile } from "../../Profile";
import { Proyectos } from "../../Proyectos";
import { Skills } from "../../Skills";
import { Tooltip } from "flowbite";

export function Main( {children} ) {
  return (
    <main className="mt-20 mx-4 flex flex-col md:w-auto xl:w-[1024px] xl:mx-auto">
      {children}
      
    </main>
  );
}
